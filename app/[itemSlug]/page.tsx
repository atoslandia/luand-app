import React, { FC } from "react";

import testeImagem from "@/public/teste.png";
import Image from "next/image";
import Titulo from "@/components/titulo/titulo";
import Botao from "@/components/botao/botao";
import MainPadrao from "@/components/main-padrao/main-padrao";
import Footer from "@/components/footer/footer";
import Seletor from "@/components/seletor/seletor";
import SeletorCor from "@/components/seletor/seletor-cor/seletor-cor";
import NumeroInput from "@/components/numero-input/numero-input";

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
				<NumeroInput titulo="Quantidade" />
				<Botao>Adicionar ao carrinho</Botao>
			</Footer>
		</>
	);
};

export default ItemPage;
