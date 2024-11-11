"use client"
import { closeMenu, openMenu } from "@/app/context/burger";
import { useBurger } from "@/app/hooks/useBurger";
import Link from "next/link";

export const Logo = () => {
	const isActive  = useBurger();
	const handleSwitchBurger = ()=>{
		if(isActive){
			closeMenu()
		} else {
			openMenu()
		}
	}
	return (
		<div className="font-['Roboto-medium'] relative z-50">
			<Link className="flex-col text-lg/5 uppercase group focus:outline-none" 
			href="#hero"
			onClick={handleSwitchBurger}
			>
				<p className="text-accent-orange transition-colors duration-500  group-hover:text-white">Viacheslav</p>
				<p className="transition-colors duration-500 group-hover:text-accent-orange">Zhevaha</p>
			</Link>
		</div>
	);
}
