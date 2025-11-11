"use client";
import { useCategoryStore } from "@/app/store/category";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import ProductCard from "./product-card";
import { Title } from "./title";

interface Props {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	items: any[];
	categoryId: number;
	className?: string;
	ListClassName?: string;
	title: string;
}

export function ProductsGroupList({
	items,
	categoryId,
	className,
	ListClassName,
	title,
}: Props) {
	const intersectionRef = useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});

	const setActiveCategoryId = useCategoryStore(state => state.setActiveId);

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId);
		}
	}, [categoryId, intersection?.isIntersecting]);
	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />
			<div className={`grid grid-cols-3 gap-[50px] ${ListClassName}`}>
				{items.map((product, i) => (
					<ProductCard
						key={i}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.items[0].price}
					/>
				))}
			</div>
		</div>
	);
}

export default ProductsGroupList;
