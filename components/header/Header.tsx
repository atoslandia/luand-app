import Image from "next/image";

import logoIcon from "@/assets/logo.svg";
import carrinhoDeComprasIcon from "@/assets/carrinho-de-compras.svg";

import Titulo from "@/components/titulo/titulo";
import Link from "next/link";
import Menu from "./menu/menu";

export default function Header() {
	return (
		<header className="w-full h-14 p-2 flex items-center justify-between border-b-2 border-tertiary bg-white">
			<Menu />
			<Link href="/" className="flex items-center gap-2">
				<Image src={logoIcon} alt="icone logo" />
				<Titulo>Luand</Titulo>
			</Link>
			<Link href="/carrinho" className="flex justify-between items-center gap-1">
				<Image src={carrinhoDeComprasIcon} alt="icone carrinho de compras" />
				<p className="w-10 text-center text-white rounded-luand bg-secundary">1</p>
			</Link>
		</header>
	);
}
