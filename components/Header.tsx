import Image from "next/image";

import menuIcon from "@/assets/menu.svg";
import carrinhoDeComprasIcon from "@/assets/carrinho-de-compras.svg";

export default function Header() {
	return (
		<header className="w-full h-14 p-2 flex items-center justify-between border-b-2 border-tertiary">
			<div className="w-12">
				<Image src={menuIcon} alt="ícone do menu" />
			</div>
			<h1>Luand</h1>
			<div className="flex justify-between items-center">
				<Image src={carrinhoDeComprasIcon} alt="ícone do carrinho de compras" />
				<p className="p-1 text-center rounded-full bg-secundary">1000000</p>
			</div>
		</header>
	);
}
