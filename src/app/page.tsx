import {  Container,Title, TopBar, Filters } from "@/components/shared";
import ProductCard from "@/components/shared/product-card";
import ProductsGroupList from "@/components/shared/products-group-list";



export default function Home() {
  return (
<>
<Container className="mt-10">
  <Title text="Все пиццы" size="lg" className="font-extrabold"/>
</Container>
  <TopBar/>
  <Container className="mt-10 pb-14">
    <div className="flex gap-[60px]">
      <div className="w-[250px]">
        <Filters/>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-16">
      <ProductsGroupList title="Пицца" items={[
        {
        id:0, 
        name:"Диабло", 
        items:[{price:550}], 
        imageUrl:"https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.avif"
      },        
      {
        id:1, 
        name:"Диабло", 
        items:[{price:550}], 
        imageUrl:"https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.avif"
      },
            {
        id:2, 
        name:"Диабло", 
        items:[{price:550}], 
        imageUrl:"https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.avif"
      },
            {
        id:3, 
        name:"Диабло", 
        items:[{price:550}], 
        imageUrl:"https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.avif"
      },
            {
        id:4, 
        name:"Диабло", 
        items:[{price:550}], 
        imageUrl:"https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.avif"
      },
        ]} categoryId={1}/>
      <ProductsGroupList title="Комбо" items={[
        {
        id:0, 
        name:"Диабло", 
        items:[{price:550}], 
        imageUrl:"https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.avif"
      },        
      {
        id:1, 
        name:"Диабло", 
        items:[{price:550}], 
        imageUrl:"https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.avif"
      },
            {
        id:2, 
        name:"Диабло", 
        items:[{price:550}], 
        imageUrl:"https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.avif"
      },
            {
        id:3, 
        name:"Диабло", 
        items:[{price:550}], 
        imageUrl:"https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.avif"
      },
            {
        id:4, 
        name:"Диабло", 
        items:[{price:550}], 
        imageUrl:"https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.avif"
      },
        ]} categoryId={2}/>
        </div>
      </div>
    </div>
  </Container>
</>
  );
}
