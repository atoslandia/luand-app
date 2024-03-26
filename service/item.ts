import Item from "@/lib/model/item";
import { MongoClient } from "mongodb";

const cliente = new MongoClient(
	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@luand-app.49nfi6q.mongodb.net/?retryWrites=true&w=majority&appName=luand-app`
);

export async function salvarItem(item: Item) {
	const db = cliente.db();

	const itensCollection = db.collection("itens");
	const resultado = await itensCollection.insertOne(item);

	console.log(resultado);

	cliente.close();
}
