import Botao from "@/components/botao/botao";
import EmpresaLayout from "@/components/empresa-layout/empresa-layout";
import EstoqueTabela from "@/components/estoque-tabela/estoque-tabela";
import NumeroInput from "@/components/numero-input/numero-input";
import TextoInput from "@/components/texto-input/texto-input";

export default function AdiconarItem() {
	return (
		<EmpresaLayout titulo="Adicionar um item">
			<form className="flex flex-col gap-2">
				<TextoInput titulo="Estampa" />
				<NumeroInput titulo="Número de referência" />
				<Botao>Adicionar item</Botao>
			</form>
			<EstoqueTabela />
		</EmpresaLayout>
	);
}
