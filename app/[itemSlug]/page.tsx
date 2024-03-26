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
import Link from "next/link";

interface ItemPageProps {
	params: { itemSlug: string };
}

const ItemPage: FC<ItemPageProps> = async ({ params }) => {
	const { itemSlug } = params;

	return (
		<>
			<MainPadrao>
				<Link href={`/#${itemSlug}`}>Voltar</Link>
				<Image
					src={testeImagem}
					alt="teste"
					className="w-full h-[30rem] rounded-luand overflow-hidden object-none"
				/>
				<Titulo>Referencia: {itemSlug}</Titulo>
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
						{ cor: "white", tamanhoP: 1, tamanhoM: 2, tamanhoG: 3 },
						{ cor: "red", tamanhoP: 1, tamanhoM: 2, tamanhoG: 3 },
						{ cor: "blue", tamanhoP: 1, tamanhoM: 2, tamanhoG: 3 },
						{ cor: "black", tamanhoP: 1, tamanhoM: 2, tamanhoG: 3 },
					]}
				/>
				<Seletor listaDeOpcoes={["P", "M", "G", "GG"]} />
				<NumeroInput name="quantidade" titulo="Quantidade" />
				<Botao>Adicionar ao carrinho</Botao>
			</Footer>
		</>
	);
};

export default ItemPage;
