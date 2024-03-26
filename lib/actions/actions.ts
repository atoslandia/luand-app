"use server";

import { salvarItem } from "@/service/item";
import Cor from "../model/cor";
import Item from "../model/item";

export async function adicionarItem(formData: FormData) {
	const cores: Cor[] = [];
	for (let i = 0; i < formData.getAll("cor").length; i++) {
		cores[i] = {
			cor: String(formData.getAll("cor")[i]),
			tamanhoP: Number(formData.getAll("tamanhoP")[i]),
			tamanhoM: Number(formData.getAll("tamanhoM")[i]),
			tamanhoG: Number(formData.getAll("tamanhoG")[i]),
		};
	}

	const item: Item = {
		referencia: Number(formData.get("referencia")),
		cores: cores,
	};
	salvarItem(item);
}
