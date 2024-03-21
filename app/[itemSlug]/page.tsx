import Seletor from "@/components/seletor/Seletor";
import React, { FC } from "react";

import testeImagem from "@/public/teste.png";
import Image from "next/image";
import Titulo from "@/components/titulo/Titulo";

interface ItemPageProps {
	params: { itemSlug: string };
}

const ItemPage: FC<ItemPageProps> = ({ params }) => {
	return (
		<main className="p-2 flex w-full flex-col items-center gap-2">
			<Image
				src={testeImagem}
				alt="teste"
				className="w-full h-[30rem] rounded-luand overflow-hidden object-none"
			/>
			<Titulo>{params.itemSlug}</Titulo>
			<p className="self-start">
				T-Shirts de material Menegotti 100% algodão.
				<br />
				Oferece uma variedade de designs exclusivos e confortáveis para os clientes.
			</p>
			<div className="h-32"></div>
			<div className="fixed bottom-0 p-2 w-full bg-white border-t-2 border-tertiary grid grid-cols-2 gap-2">
				<Seletor
					titulo="Cor"
					listaDeOpcoes={["#ef53c5", "#114042", "#35bca4", "#88707e", "#d51229", "#d47c1e", "#df29f4"]}
				/>
				<Seletor titulo="Tamanho" listaDeOpcoes={["P", "M", "G", "GG"]} />
				<input
					placeholder="Quantidade"
					type="number"
					className="p-2 border-2 border-tertiary rounded-luand appearance-none"
				/>
				<button className="px-5 py-1 text-white bg-secundary rounded-luand">Adicionar ao carrinho</button>
			</div>
		</main>
	);
};

export default ItemPage;
