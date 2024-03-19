import Image from "next/image";

import menuIcon from "@/assets/menu.svg";
import logoIcon from "@/assets/logo.svg";
import carrinhoDeComprasIcon from "@/assets/carrinho-de-compras.svg";

import Titulo from "@/components/titulo/Titulo";
import Link from "next/link";

export default function Header() {
	return (
		<header className="sticky top-0 w-full h-14 p-2 flex items-center justify-between border-b-2 border-tertiary bg-white">
			<div className="w-12">
				<Image src={menuIcon} alt="ícone menu" />
			</div>
			<Link href="/" className="flex items-center gap-2">
				<Image src={logoIcon} alt="ícone logo" />
				<Titulo>Luand</Titulo>
			</Link>
			<Link href="/carrinho" className="flex justify-between items-center gap-1">
				<Image src={carrinhoDeComprasIcon} alt="ícone carrinho de compras" />
				<p className="w-10 text-center text-white rounded-full bg-secundary">100</p>
			</Link>
		</header>
	);
}
