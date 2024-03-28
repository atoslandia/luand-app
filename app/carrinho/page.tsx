import Botao from "@/components/botao/botao";
import Footer from "@/components/footer/footer";
import MainPadrao from "@/components/main-padrao/main-padrao";
import Tabela from "@/components/tabela/tabela";

export default function CarrinhoPage() {
	return (
		<>
			<MainPadrao>
				<Tabela colunas={["Cor", "Tamanho", "Quantidade"]}></Tabela>
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
