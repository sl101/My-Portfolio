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
							className=""
							href={link.path}
							target={link.target}
						>
							{link.value}
						</Link>
					</li>
	)
}
