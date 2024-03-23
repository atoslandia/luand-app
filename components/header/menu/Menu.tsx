"use client";

import Image from "next/image";

import menuIcon from "@/assets/menu.svg";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
	const [isExpandido, setIsExpandido] = useState(false);

	function expandir() {
		setIsExpandido(!isExpandido);
	}

	return (
		<>
			<Image onClick={expandir} src={menuIcon} alt="ícone menu" className="size-7" />

			{isExpandido && (
				<nav className="flex absolute left-0 top-0 w-full h-svh">
					<div className="z-10 animate-toggle-menu p-2 w-1/2 h-svh gap-2 flex flex-col justify-between items-start bg-white">
						<div className="w-full flex flex-col items-start divide-y-2 divide-tertiary">
							<Link onClick={expandir} href="/" className="p-2 w-full text-start">
								Catálogo
							</Link>
							<Link onClick={expandir} href="/empresa" className="p-2 w-full text-start">
								Empresa
							</Link>
							<button className="p-2 w-full text-start">Sobre a Luand</button>
						</div>
						<button className="p-2">Relatar problemas</button>
					</div>
					<div onClick={expandir} className="animate-fade-in absolute z-0 w-full h-svh bg-tertiary"></div>
				</nav>
			)}
		</>
	);
}
