"use client";

import { FC, useState } from "react";
import expandirIcon from "@/assets/expandir.svg";
import retrairIcon from "@/assets/retrair.svg";
import Image from "next/image";
import Cor from "@/lib/model/cor";

interface SeletorCorProps {
	listaDeCores: Cor[];
}

const SeletorCor: FC<SeletorCorProps> = ({ listaDeCores }) => {
	const [isExpandido, setIsExpandido] = useState(false);
	const [titulo, setTitulo] = useState(listaDeCores[0].cor);

	function expandir() {
		setIsExpandido(!isExpandido);
	}

	function selecionarCor(novoTitulo: string) {
		setTitulo(novoTitulo);
		expandir();
	}

	return (
		<>
			{isExpandido && (
				<ul className="absolute bottom-2 w-full p-2 border-2 border-tertiary bg-white rounded-luand">
					{listaDeCores.map(({ cor }) => (
						<li
							onClick={() => selecionarCor(cor)}
							key={cor}
							className="h-10 flex justify-center items-center cursor-pointer hover:bg-tertiary">
							<span
								style={{ backgroundColor: cor }}
								className="w-20 h-5 self-center border-2 border-tertiary rounded-luand"></span>
						</li>
					))}
				</ul>
			)}
			<div className="w-full flex flex-col gap-2 justify-end">
				<button
					onClick={expandir}
					className="p-2 flex justify-between border-2 border-tertiary rounded-luand gap-2">
					<span
						style={{ backgroundColor: titulo }}
						className="w-20 h-5 self-center border-2 border-tertiary rounded-luand">
						{""}
					</span>
					<Image src={isExpandido ? expandirIcon : retrairIcon} alt="icone seletor" />
				</button>
			</div>
		</>
	);
};

export default SeletorCor;
