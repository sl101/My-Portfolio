"use client"
import { useLang } from "@/app/hooks/useLang";
import { NavLink } from "./NavLink";

export const Navigation = () => {
	const {lang, translations} = useLang()

	const linksList = [
		{ id: 1, path: "#about", value: translations[lang].header.about, target: "_self" },
		{ id: 2, path: "#portfolio", value: translations[lang].header.portfolio, target: "_self"},
		{ id: 3, path: "#contacts", value: translations[lang].header.contacts, target: "_self"},
		{ id: 4, path: "https://sl101.github.io/Viacheslav-Zhevaha_CV/", value: translations[lang].header.resume, target: "_blank" },
	];

	return (
		<nav className="flex-between-center w-1/3 text-lg">
			<ul className="flex-between-center w-full  gap-8">
				{linksList.map((link) => (
					<NavLink key={link.id} link={link}/>
				))}
			</ul>
		</nav>
	);
}
