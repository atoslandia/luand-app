import Item from "@/components/item/Item";

export default function Home() {
	return (
		<>
			{/* <header className="py-1">Todos os itens</header> */}
			<main className="p-2 grid grid-cols-2 gap-2">
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</main>
		</>
	);
}
