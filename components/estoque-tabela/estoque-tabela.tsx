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
		<>
			<table className="rounded-luand overflow-hidden ring-2 ring-tertiary">
				<thead className="bg-tertiary">
					<tr>
						<th>Cor</th>
						<th>P</th>
						<th>M</th>
						<th>G</th>
					</tr>
				</thead>
				<tbody>
					{linhas.map((linha, index) => (
						<tr key={index} className="divide-x-2 divide-tertiary text-center">
							{linha}
						</tr>
					))}
				</tbody>
			</table>
			<div className="flex">
				<Botao onClick={adicionarLinha}>Adicionar </Botao>
				<Botao onClick={removerLinha}>Remover </Botao>
			</div>
		</>
	);
}
