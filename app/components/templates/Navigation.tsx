import { NavLink } from "./NavLink";

export const Navigation = () => {

	const linksList = [
		{ id: 1, path: "#about", value: "About", target: "_self" },
		{ id: 2, path: "#contacts", value: "Contacts", target: "_self"},
		{ id: 3, path: "#portfolio", value: "Portfolio", target: "_self"},
		{ id: 4, path: "https://sl101.github.io/Viacheslav-Zhevaha_CV/", value: "Resume", target: "_blank" },
	];

	return (
		<nav>
			<ul className="flex-between-center gap-4 text-white">
				{linksList.map((link) => (
					<NavLink key={link.id} link={link}/>
				))}
			</ul>
		</nav>
	);
}
