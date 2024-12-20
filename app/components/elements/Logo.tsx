"use client"
import { closeMenu } from "@/app/context/burger";
import Link from "next/link";

export const Logo = () => {

	return (
		<div className="font-['Roboto-medium'] relative z-50">
			<Link className="flex-col text-lg/5 uppercase group focus:outline-none" 
			href="#hero"
			onClick={()=>closeMenu()}
			>
				<p className="text-accent-orange transition-colors duration-500  group-hover:text-white">Viacheslav</p>
				<p className="transition-colors duration-500 group-hover:text-accent-orange">Zhevaha</p>
			</Link>
		</div>
	);
}
