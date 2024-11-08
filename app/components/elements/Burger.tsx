"use client"
import { closeMenu, openMenu } from "@/app/context/burger";
import { useBurger } from "@/app/hooks/useBurger";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

export const Burger = () => {

	const isActive  = useBurger();

	const handleSwitchBurger = ()=>{
		if(isActive){
			closeMenu()
		} else {
			openMenu()
		}
	}

	return (
		<button className="burger" onClick={handleSwitchBurger}>
			{!isActive ? <RxHamburgerMenu className="w-full h-full" /> : <RxCross2 className="w-full h-full"/> }		
		</button>
	)
}

