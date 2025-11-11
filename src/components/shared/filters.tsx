import { cn } from "@/lib/utils";
import { Title } from "./title";
import {FilterCheckBox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import CheckBoxFiltersGroup from "./checkbox-filters-group";

interface Props {
	className?:string
}

export function Filters ({className}:Props) {
		return (
				<div className={className}>
					<Title text="Филтрация" size="sm" className="mb-5 font-bold"/>
					{/*Верхние чекбоксы*/}
					<div className="flex flex-col gap-4">
						<FilterCheckBox text = "Можно собирать" value = "1"/>
						<FilterCheckBox text = "Новинки" value = "2"/>
					</div>
					{/* Фильтры */}
					<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
						<p className="font-bold mb-5">Цена от и до</p>
						<div className="flex gap-3 mb-5">
						<Input type="number" placeholder="0" min={0} max = {30000} defaultValue={0}/>
						<Input type="number" min={100} placeholder="1000" max={1000}/>
						</div>
						<RangeSlider min={0} max={5000} step={10} value={[0,5000]}/>
					</div>
					<CheckBoxFiltersGroup 
					title="Ингриденты"
					className="mt-5"
					limit={6}
					items={[
					{
						text:"Сырный соус",
						value:'1',
					},
					{
						text:"Моцарелла",
						value:'2',
					},
					{
						text:"Чеснок",
						value:'3',
					},
					{
						text:"Солёные огурчики",
						value:'4',
					},
					{
						text:"Красный лук",
						value:'5',
					},
					{
						text:"Томат",
						value:'7',
					},
										{
						text:"Сырный соус",
						value:'8',
					},
					{
						text:"Моцарелла",
						value:'9',
					},
					{
						text:"Чеснок",
						value:'10',
					},
					{
						text:"Солёные огурчики",
						value:'11',
					},
					{
						text:"Красный лук",
						value:'12',
					},
					{
						text:"Томат",
						value:'13',
					}
				]}
					defaultItems={[
					{
						text:"Сырный соус",
						value:'1',
					},
					{
						text:"Моцарелла",
						value:'2',
					},
					{
						text:"Чеснок",
						value:'3',
					},
					{
						text:"Солёные огурчики",
						value:'4',
					},
					{
						text:"Красный лук",
						value:'5',
					},
					{
						text:"Томат",
						value:'6',
					}
					]}/>
				</div>
		);
}

export default  Filters;