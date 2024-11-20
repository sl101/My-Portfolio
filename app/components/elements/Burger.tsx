"use client"
import { closeMenu, openMenu } from "@/app/context/burger";
import { useBurger } from "@/app/hooks/useBurger";
import { useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

export const Burger = () => {

	const isActive  = useBurger();

	useEffect(() => {
		const scrolBarWidth = `${window.innerWidth - document.documentElement.clientWidth}px`
		if (isActive) {
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = scrolBarWidth;
		} else {
			document.body.style.overflow = '';
			document.body.style.paddingRight = '';
		}
	}, [isActive]);

	const handleSwitchBurger = ()=>{
		if(isActive){
			closeMenu()
		} else {
			openMenu();
		}
	}

	return (
		<button className="w-6 h-6" onClick={handleSwitchBurger}>
			{!isActive ? <RxHamburgerMenu className="w-full h-full" /> : <RxCross2 className="w-full h-full"/> }		
		</button>
	)
}

