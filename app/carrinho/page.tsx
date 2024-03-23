import Botao from "@/components/botao/Botao";
import Footer from "@/components/footer/Footer";
import MainPadrao from "@/components/main-padrao/MainPadrao";

export default function CarrinhoPage() {
	return (
		<>
			<MainPadrao>
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
			</MainPadrao>
			<Footer>
				<div>
					<p>Total</p>
					<p>R$19.00</p>
				</div>
				<Botao>Enviar pedido</Botao>
			</Footer>
		</>
	);
}
