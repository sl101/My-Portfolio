"use client";
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

	return (
		<li key={link.id}>
						<Link
							className="pb-1 outline-none focus:text-accent-orange border-b-2  hover:text-accent-orange hover:border-accent-orange transition-color duration-500 " 
							href={link.path}
							target={link.target}
						>
							{link.value}
						</Link>
					</li>
	)
}
