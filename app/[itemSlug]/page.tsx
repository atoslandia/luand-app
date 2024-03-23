import React, { FC } from "react";

import testeImagem from "@/public/teste.png";
import Image from "next/image";
import Titulo from "@/components/titulo/Titulo";
import Botao from "@/components/botao/Botao";
import MainPadrao from "@/components/main-padrao/MainPadrao";
import Footer from "@/components/footer/Footer";
import Seletor from "@/components/seletor/Seletor";
import SeletorCor from "@/components/seletor/seletor-cor/SeletorCor";

interface ItemPageProps {
	params: { itemSlug: string };
}

const ItemPage: FC<ItemPageProps> = ({ params }) => {
	return (
		<>
			<MainPadrao>
				<Image
					src={testeImagem}
					alt="teste"
					className="w-full h-[30rem] rounded-luand overflow-hidden object-none"
				/>
				<Titulo>Referencia: {params.itemSlug}</Titulo>
				<p className="self-start">
					T-Shirts de material Menegotti 100% algodão.
					<br />
					Oferece uma variedade de designs exclusivos e confortáveis para os clientes.
				</p>
				<div className="h-32"></div>
			</MainPadrao>
			<Footer>
				<SeletorCor
					listaDeCores={[
						"bg-[#ef53c5]",
						"bg-[#114042]",
						"bg-[#35bca4]",
						"bg-[#88707e]",
						"bg-[#d51229]",
						"bg-[#d47c1e]",
						"bg-[#df29f4]",
					]}
				/>
				<Seletor listaDeOpcoes={["P", "M", "G", "GG"]} />
				<input
					placeholder="Quantidade"
					type="number"
					className="p-2 border-2 border-tertiary rounded-luand appearance-none"
				/>
				<Botao>Adicionar ao carrinho</Botao>
			</Footer>
		</>
	);
};

export default ItemPage;
