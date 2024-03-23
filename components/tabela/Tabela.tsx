import { FC } from "react";

interface TabelaProps {
	colunas: string[];
}

const Tabela: FC<TabelaProps> = ({ colunas }) => {
	return (
		<table className="w-full border-collapse border-spacing-9 rounded-luand overflow-hidden ring-2 m-1 ring-tertiary">
			<thead className="bg-tertiary">
				<tr className="text-center">
					{colunas.map((coluna) => (
						<th key={coluna} className="py-1">
							{coluna}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				<tr className="divide-x-2 divide-tertiary text-center">
					<td className="py-2">#123</td>
					<td>Verde</td>
					<td>M</td>
					<td>3</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Tabela;
