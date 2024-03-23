import Botao from "@/components/botao/Botao";
import MainPadrao from "@/components/main-padrao/MainPadrao";
import Tabela from "@/components/tabela/Tabela";
import Titulo from "@/components/titulo/Titulo";

export default function EstoquePage() {
	return (
		<MainPadrao>
			<Titulo>Estoque</Titulo>
			<Tabela colunas={["Ref.", "Cor", "Tamanho", "Quantidade"]} />
			<Botao>Entrar</Botao>
		</MainPadrao>
	);
}
