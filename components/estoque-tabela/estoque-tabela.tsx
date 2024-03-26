"use client";

import { useState } from "react";
import Botao from "../botao/botao";
import Linha from "./linha/linha";

export default function EstoqueTabela() {
	const [linhas, setLinhas] = useState([<Linha />]);

	function adicionarLinha() {
		setLinhas((prevLinhas) => [...prevLinhas, <Linha />]);
	}

	function removerLinha() {
		if (linhas.length > 1) {
			setLinhas((prevLinhas) => {
				const linhasAtualizadas = [...prevLinhas];
				linhasAtualizadas.pop();
				return linhasAtualizadas;
			});
		}
	}

	return (
		<div className="flex flex-col items-center border-2 border-tertiary overflow-hidden rounded-luand">
			<table className="w-full border-b-2 border-tertiary">
				<thead className="bg-tertiary">
					<tr>
						<th>Cor</th>
						<th>P</th>
						<th>M</th>
						<th>G</th>
					</tr>
				</thead>
				<tbody>{...linhas}</tbody>
			</table>
			<div className="p-2 w-full flex gap-2">
				<Botao onClick={adicionarLinha} estilo="w-full">
					Adicionar
				</Botao>
				<Botao onClick={removerLinha} estilo="w-full">
					Remover
				</Botao>
			</div>
		</div>
	);
}
