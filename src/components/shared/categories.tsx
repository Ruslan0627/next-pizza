"use client";
import { useCategoryStore } from "@/app/store/category";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
}

const categories = [
	{id:1,name:"Пицца"},
	{id:2,name:"Комбо"},
	{id:3,name:"Закуски"},
	{id:4,name:"Коктейли"},
	{id:5,name:"Кофе"},
	{id:6,name:"Напитки"},
	{id:7,name:"Десерты"},
];
export function Categories({ className }: Props) {
	const categorActiveId = useCategoryStore(state => state.activeId);
	return (
		<div
			className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
		>
			{categories.map(({name, id}, idx) => (
				<a
					className={cn(
						"flex items-center font-bold h-11 rounded-2xl px-5",
						categorActiveId === id &&
							"bg-white shadow-mb shadow-gray-200 text-primary"
					)}
					key={idx}
					href={`#${name}`}
				>
					<button>{name}</button>
				</a>
			))}
		</div>
	);
}

export default Categories;
