import ItemComponent from "@/components/item-component/item-component";

export default async function CatalogoPage() {
	return (
		<>
			<main className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
				{/* {itens.map((item) => {
					const id = item._id.toString();
					return (
						<ItemComponent key={id} id={id} numCoresDisponiveis={item.cores.length} cores={item.cores} />
					);
				})} */}
			</main>
		</>
	);
}
