'use client'

import {  FilterCheckBox, FilterCheckBoxProps } from "./filter-checkbox";
import { Input } from "../ui/input";
import { use, useState } from "react";


type Item = FilterCheckBoxProps

interface Props {
	title:string;
	items:Item[];
	limit?:number;
	searchInputPlaceholder?:string;
	onChange?: (values:string[]) => void;
	defaultItems:Item[];
	defaultValue?:Item[]
	className?: string;
}

export function CheckBoxFiltersGroup({
	className,
	title,
	items,
	limit = 5,
	searchInputPlaceholder = "Поиск...",
	onChange,
	defaultItems,
	defaultValue
}:Props) {
	const [showAll, setShowAll] = useState(false)
	const [searchValue, setSearchValue ] = useState('')
	function onChangeSearch (e:React.ChangeEvent<HTMLInputElement>) {
		setSearchValue(e.target.value)
	}
	const list = showAll 
	? items.filter(( item ) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
  : defaultItems?.slice(0,limit)
		return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>
{		showAll &&	(<div className="mb-5">
				<Input onChange={onChangeSearch} value={searchValue} placeholder = {searchInputPlaceholder} className="bg-gray-50 border-none" />
			</div>)}
			<div className="flex flex-col gap-4 pr-2 max-h-96 overflow-auto scrollbar">
				{list.map(( item ) => (
					<FilterCheckBox 
					key={String(item.value)}
					onCheakedChange={(ids)=> console.log(ids)}
					checked = {false}
					value={item.value}
					text={item.text}
					endAdorment = {item.endAdorment}/>
				))}
			</div>
			{items.length > limit && (
				<div className={showAll ?'borde-t border-t-neutral-100 mt-4':''}>
					<button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
						{showAll?"Скрыть всё":"Показать всё"}
					</button>
				</div>
			)}
		</div>
		);
}

export default CheckBoxFiltersGroup;