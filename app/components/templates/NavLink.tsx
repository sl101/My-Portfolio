"use client";
import { closeMenu, openMenu } from "@/app/context/burger";
import { useBurger } from "@/app/hooks/useBurger";
import Link from "next/link";

type LinkProps = {
  id: number;
  path: string;
  value: string;
  target: string;
};

type Props = {
  link: LinkProps;
};

export const NavLink = ({link}:Props) => {
	const isActive  = useBurger();
	const handleSwitchBurger = ()=>{
		if(isActive){
			closeMenu()
		} else {
			openMenu()
		}
	}
	return (
		<li key={link.id}>
						<Link
							className="pb-1 outline-none focus:text-accent-orange border-b-2  hover:text-accent-orange hover:border-accent-orange transition-color duration-500 " 
							href={link.path}
							target={link.target}
							onClick={handleSwitchBurger}
						>
							{link.value}
						</Link>
					</li>
	)
}
