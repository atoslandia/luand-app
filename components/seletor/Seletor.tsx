"use client";

import { FC, useState } from "react";
import expandirIcon from "@/assets/expandir.svg";
import retrairIcon from "@/assets/retrair.svg";
import Image from "next/image";

interface SeletorProps {
	listaDeOpcoes: string[];
}

const Seletor: FC<SeletorProps> = ({ listaDeOpcoes }) => {
	const [isExpandido, setIsExpandido] = useState(false);

	const [titulo, setTitulo] = useState(listaDeOpcoes[0]);

	function expandir() {
		setIsExpandido(!isExpandido);
	}

	function selecionarOpcao(novoTitulo: string) {
		setTitulo(novoTitulo);
		expandir();
	}

	return (
		<>
			{isExpandido && (
				<ul className="absolute bottom-2 w-full p-2 border-2 border-tertiary bg-white rounded-luand">
					{listaDeOpcoes.map((opcao) => {
						return (
							<li
								onClick={() => selecionarOpcao(opcao)}
								key={opcao}
								className="h-10 flex justify-center items-center cursor-pointer hover:bg-tertiary">
								<span>{opcao}</span>
							</li>
						);
					})}
				</ul>
			)}
			<div className="w-full flex flex-col gap-2 justify-end">
				<button
					onClick={expandir}
					className="p-2 flex justify-between border-2 border-tertiary rounded-luand gap-2">
					{titulo}
					<Image src={isExpandido ? expandirIcon : retrairIcon} alt="icone seletor" />
				</button>
			</div>
		</>
	);
};

export default Seletor;
