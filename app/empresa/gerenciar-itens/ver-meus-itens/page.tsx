import EmpresaLayout from "@/components/empresa-layout/empresa-layout";
import ItemComponent from "@/components/item-component/item-component";

export default function VerMeusItens() {
	return (
		<EmpresaLayout titulo="Meus itens">
			<main className="p-2 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"></main>
		</EmpresaLayout>
	);
}
