"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
	const pathname = usePathname();

	const linksList = [
		{ id: 1, path: "#about", value: "About" },
		{ id: 2, path: "#contacts", value: "Contacts" },
	];
	return (
		<nav>
			<ul className="flex-between-center gap-4">
				{linksList.map((link) => (
					<li key={link.id}>
						<Link
							className=""
							href={link.path}
						>
							{link.value}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
