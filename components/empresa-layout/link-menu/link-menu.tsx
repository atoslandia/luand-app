"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

interface LinkMenuProps {
	href: string;
	children: ReactNode;
}

const LinkMenu: FC<LinkMenuProps> = ({ href, children }) => {
	const path = usePathname();
	let estilo = "p-2 w-full hover:bg-tertiary";
	return (
		<Link href={href} className={path === href ? estilo + " bg-secundary text-white" : estilo}>
			{children}
		</Link>
	);
};

export default LinkMenu;
