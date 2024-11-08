"use client"
import { useUnit } from "effector-react"
import { $menuIsOpen } from "../context/burger";

export const useBurger =()=> {
	return useUnit($menuIsOpen);
}