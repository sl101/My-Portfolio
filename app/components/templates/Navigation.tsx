"use client"
import { useLang } from "@/app/hooks/useLang";
import { NavLink } from "./NavLink";
import { WhatsAppContact } from "../elements/WhatsAppContact";
import { useBurger } from "@/app/hooks/useBurger";

export const Navigation = () => {
	const {lang, translations} = useLang();
	const isActive  = useBurger();

	const linksList = [
		{ id: 1, path: "#about", value: translations[lang].header.about, target: "_self" },
		{ id: 2, path: "#portfolio", value: translations[lang].header.portfolio, target: "_self"},
		{ id: 3, path: "#contacts", value: translations[lang].header.contacts, target: "_self"},
		{ id: 4, path: "https://sl101.github.io/Viacheslav-Zhevaha_CV/", value: translations[lang].header.resume, target: "_blank" },
	];

	return (
		<nav className={`flex-between-center min-w-1/3 text-lg max-[1024px]:fixed max-[1024px]:top-0 max-[1024px]:left-0  max-[1024px]:w-full max-[1024px]:h-full max-[1024px]:z-20 max-[1024px]:bg-original-tean max-[1024px]:flex-col max-[1024px]:justify-center max-[1024px]:gap-12 ${!isActive && "max-[1024px]:-translate-x-full"} transition-transform duration-500`}>
			<ul className="flex-between-center w-full  gap-8 max-[1024px]:flex-col max-[1024px]:gap-12">
				{linksList.map((link) => (
					<NavLink key={link.id} link={link}/>
				))}
			</ul>
			<div  className="hidden max-[1024px]:block">
			<WhatsAppContact/>
			</div>
		</nav>
	);
}
