import { Checkbox } from "../ui/checkbox";

export interface FilterCheckBoxProps {
	text:string,
	value:string,
	endAdorment?: React.ReactNode,
	onCheakedChange?: (checked:boolean) => void,
	checked?:boolean
}


 export function FilterCheckBox({
	value,
	text,
	endAdorment, 
	onCheakedChange,
	checked }:FilterCheckBoxProps) {
		return (
				<div className="flex items-center space-x-2">
					<Checkbox
					onCheckedChange = {onCheakedChange}
					checked = {checked}
					value={value}
					className="rounded-[8px] w-6 h-6"
					id = {`checkbox-${String(value)}`} 
					/>
					<label htmlFor={`checkbox-${String(value)}`}
					className="leading-none cursor-pointer flex-1">
						{text}
					</label>
					{endAdorment}
				</div>
		);
}
