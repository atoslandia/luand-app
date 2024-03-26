import Tabela from "@/components/tabela/tabela";
import EmpresaLayout from "@/components/empresa-layout/empresa-layout";

export default function EstoquePage() {
	return (
		<EmpresaLayout titulo="Estoque">
			<Tabela colunas={["Ref.", "Cor", "Tamanho", "Quantidade"]} />
		</EmpresaLayout>
	);
}
