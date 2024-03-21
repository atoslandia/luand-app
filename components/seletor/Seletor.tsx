"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import expandirIcon from "@/assets/expandir.svg";
import retrairIcon from "@/assets/retrair.svg";
import Image from "next/image";
interface SeletorProps {
	titulo: string;
	listaDeOpcoes: string[];
}

const Seletor: FC<SeletorProps> = ({ titulo, listaDeOpcoes }) => {
	const [isExpandido, setIsExpandido] = useState(false);
	const [tituloSelecionado, setTituloSelecionado] = useState(titulo);

	function expandir() {
		setIsExpandido(!isExpandido);
	}

	function selecionar(novoTitulo: string) {
		setTituloSelecionado(novoTitulo);
		expandir();
	}

	return (
		<div className="w-full flex flex-col gap-2 justify-end">
			{isExpandido && (
				<ul className="p-2 border-2 border-tertiary bg-white rounded-luand">
					{listaDeOpcoes.map((opcao) => {
						return (
							<li
								onClick={() => selecionar(opcao)}
								key={opcao}
								className="h-10 flex justify-center items-center cursor-pointer hover:bg-tertiary">
								<div>{opcao}</div>
							</li>
						);
					})}
				</ul>
			)}
			<button
				onClick={expandir}
				className="p-2 flex justify-between border-2 border-tertiary rounded-luand gap-2">
				<span>{tituloSelecionado}</span>
				<Image src={isExpandido ? expandirIcon : retrairIcon} alt="icone seletor" />
			</button>
		</div>
	);
};

export default Seletor;
