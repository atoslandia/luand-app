import Tabela from "@/components/tabela/Tabela";
import EmpresaLayout from "@/components/empresa-layout/EmpresaLayout";

export default function EstoquePage() {
	return (
		<EmpresaLayout>
			<Tabela colunas={["Ref.", "Cor", "Tamanho", "Quantidade"]} />
		</EmpresaLayout>
	);
}
