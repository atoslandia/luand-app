export default function Carrinho() {
	return (
		<main className="p-2 w-full flex flex-col items-center">
			<table className="w-full border-collapse border-spacing-9 rounded-md overflow-hidden ring-2 ring-tertiary">
				<thead className="bg-tertiary">
					<tr>
						<th className="py-1">Referência</th>
						<th className="py-1">Cor</th>
						<th className="py-1">Tamanho</th>
						<th className="py-1">Quantidade</th>
					</tr>
				</thead>
				<tbody>
					<tr className="divide-x-2 divide-tertiary">
						<td className="p-1 text-center">#123</td>
						<td className="p-1 text-center">Verde</td>
						<td className="p-1 text-center">M</td>
						<td className="p-1 text-center">3</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
}
