import { hashSync } from "bcrypt";
import { prisma } from "./prisma.client";
import { categories, ingredients, products } from "./constans";
import { Prisma } from "@prisma/client";

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomNumber(190, 600),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};


async function up() {
  await prisma.user.createMany({
    data: [
      { fullName: 'User', email: 'user@test.ru', password: hashSync('111111',10), verifide: new Date(), role: "USER" },
      { fullName: 'Admin', email: 'admin@test.ru', password: hashSync('111111',10), verifide: new Date(), role: "ADMIN" },
    ],
  });

  await prisma.category.createMany({ data: categories });
  await prisma.ingredient.createMany({ data: ingredients });
  await prisma.product.createMany({ data: products });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Пепперони фреш',
      imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/0198bf57bc517218ab93c762f4b0193e.avif',
      categoryId: 1,
      ingredients: { connect: ingredients.slice(0,5) },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Чоризо фреш',
      imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/0198bf4f806371f19d529f9e9e7dba36.avif',
      categoryId: 1,
      ingredients: { connect: ingredients.slice(5,10) },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Сырная',
      imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/0198bf40eb1171aabe90b1b3ce07c0c5.avif',
      categoryId: 1,
      ingredients: { connect: ingredients.slice(5,10) },
    },
  });

  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      { userId: 1, totalAmount: 0, token: '1111' },
      { userId: 2, totalAmount: 0, token: '2222' },
    ],
  });

  await prisma.cartItem.create({
    data:  { productItemId: 1, 
				cartId: 1,
				quantity: 2,
				ingredints: {
				connect:[{ id: 1 },{ id: 2 },{ id: 3 },{ id: 4 }],
			} 
		},
  });
}





async function down () {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;;
}

async function main () {
	try {
		await down()
		await up()
	} catch (e) {
		console.log(e);	
	}
}
(async function runSeed() {
  await main();
})();
