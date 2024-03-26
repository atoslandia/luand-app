import EmpresaLayout from "@/components/empresa-layout/empresa-layout";
import EstoqueTabela from "@/components/estoque-tabela/estoque-tabela";
import NumeroInput from "@/components/numero-input/numero-input";
import { adicionarItem } from "@/lib/actions/actions";

export default function AdiconarItem() {
	return (
		<EmpresaLayout titulo="Adicionar um item">
			<form action={adicionarItem} className="flex flex-col gap-2">
				<NumeroInput name="referencia" titulo="Número de referência" />
				<EstoqueTabela />
				<input type="submit" value="Adicionar item" />
			</form>
		</EmpresaLayout>
	);
}
