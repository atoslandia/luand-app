import { FC } from "react";
import Image from "next/image";
import { Be_Vietnam_Pro } from "next/font/google";
import Titulo from "@/components/titulo/Titulo";

import testeImagem from "@/public/teste.png";

const beVietnamProFont = Be_Vietnam_Pro({ weight: "500", subsets: ["latin"] });

interface ItemProps {
	imagem?: string;
	qtdCoresDisponiveis?: string;
	valor?: string;
}

const Item: FC<ItemProps> = () => {
	return (
		<section className="flex flex-col gap-2">
			<Image className="h-64 rounded-md overflow-hidden object-none" src={testeImagem} alt="imagem teste" />
			<h4 className={`${beVietnamProFont.className} text-xs place-self-center`}>(4 cores dispoíveis)</h4>
			<Titulo>R$19.00</Titulo>
		</section>
	);
};

export default Item;
