import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Container from "./container";

interface Props {
	className?: string;
}

export function Header({ className }: Props) {
	return (
		<header className={cn("border border-b", className)}>
			<Container className="flex items-center justify-between py-8">
				<div className="flex items-center gap-4">
					<Image src="/logo.png" alt="logo" width={35} height={35} />
					<div>
						<h1 className="text-2xl uppercase font-black">Next Pizza</h1>
						<p className="text-sm text-gray-400 leading-3">
							вкусней уже некуда
						</p>
					</div>
				</div>
				<div className="flex gap-3">
					<Button className="flex items-center gap-1" variant={"outline"}>
						<User size={16} />
						Войти
					</Button>
					<Button className="group relative">
						<b>520 р</b>
						<span className="h-full w-[1px] bg-white/30 mx-3" />
						<div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
							<ShoppingCart className="h-4 w-4 relative" />
							<b>3</b>
						</div>
						<ArrowRight
							size={20}
							className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
						/>
					</Button>
				</div>
			</Container>
		</header>
	);
}

export default Header;
