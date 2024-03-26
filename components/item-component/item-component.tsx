import { FC } from "react";
import Image from "next/image";
import { Be_Vietnam_Pro } from "next/font/google";
import Titulo from "@/components/titulo/titulo";

import testeImagem from "@/public/teste.png";
import Link from "next/link";
import Cor from "@/lib/model/cor";

const beVietnamProFont = Be_Vietnam_Pro({ weight: "500", subsets: ["latin"] });

interface ItemComponentProps {
	id: string;
	cores: Cor[];
	numCoresDisponiveis: number;
}

const ItemComponent: FC<ItemComponentProps> = ({ id, cores, numCoresDisponiveis }) => {
	return (
		<Link id={id} href={id} className="flex flex-col gap-2">
			<Image className="h-64 rounded-luand overflow-hidden object-none" src={testeImagem} alt="imagem teste" />
			<h4 className={`${beVietnamProFont.className} text-xs place-self-center`}>
				({numCoresDisponiveis} cores dispoíveis)
			</h4>
			<div className="flex items-center justify-between">
				<Titulo>R$19.00</Titulo>
				<div className="flex gap-1">
					{cores.map(({ cor }) => (
						<div
							style={{ backgroundColor: cor }}
							className="size-5 rounded-[100%] border-2 border-tertiary"></div>
					))}
				</div>
			</div>
		</Link>
	);
};

export default ItemComponent;
