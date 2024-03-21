import lixeiraIcon from "@/assets/lixeira.svg";
import Image from "next/image";

export default function CarrinhoPage() {
	return (
		<>
			<main className="p-2 w-full flex flex-col items-center justify-between gap-2">
				<table className="w-full border-collapse border-spacing-9 rounded-luand overflow-hidden ring-2 m-1 ring-tertiary">
					<thead className="bg-tertiary">
						<tr className="text-center">
							<th className="py-1">Ref.</th>
							<th>Cor</th>
							<th>Tamanho</th>
							<th>Quantidade</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr className="divide-x-2 divide-tertiary text-center">
							<td className="py-2">#123</td>
							<td>Verde</td>
							<td>M</td>
							<td>3</td>
							<td>
								<button className="text-secundary">Remover</button>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="h-32"></div>
			</main>
			<div className="fixed bottom-0 p-2 w-full bg-white border-t-2 border-tertiary flex justify-between">
				<div>
					<p>Total</p>
					<p>R$19.00</p>
				</div>
				<button className="px-5 py-1 text-white bg-secundary rounded-luand">Enviar pedido</button>
			</div>
		</>
	);
}
