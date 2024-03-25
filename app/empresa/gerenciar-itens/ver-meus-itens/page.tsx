import EmpresaLayout from "@/components/empresa-layout/empresa-layout";
import Item from "@/components/item/item";

export default function VerMeusItens() {
	return (
		<EmpresaLayout titulo="Meus itens">
			<main className="p-2 grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
				<Item referencia="42ee108e-4932-54a8-9245-f65396e77366" />
				<Item referencia="96d440c0-2f64-5319-ba62-e645637a3e5f" />
				<Item referencia="7d1cf7be-0626-502d-b47b-564e398b2bcb" />
			</main>
		</EmpresaLayout>
	);
}
