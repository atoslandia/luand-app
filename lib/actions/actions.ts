"use server";

import Cor from "../model/cor";
import Item from "../model/item";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function adicionarItem(prevState: { erro: string }, formData: FormData) {
	const coresArr: Cor[] = [];
	for (let i = 0; i < formData.getAll("cor").length; i++) {
		const cor = formData.getAll("cor")[i].toString();
		const tamanhoP = Number(formData.getAll("tamanhoP")[i]);
		const tamanhoM = Number(formData.getAll("tamanhoM")[i]);
		const tamanhoG = Number(formData.getAll("tamanhoG")[i]);

		if (!cor || !tamanhoP || !tamanhoM || !tamanhoG) {
			prevState.erro = "Ocorreu algum problema nas cores ou tamanhos.";
			return prevState;
		}

		coresArr[i] = { cor, tamanhoP, tamanhoM, tamanhoG };
	}

	const referencia = formData.get("referencia")?.toString();

	if (!referencia) {
		prevState.erro = "Ocorreu algum problema com a referência.";
		return prevState;
	}

	const item: Item = {
		referencia: referencia,
		cores: coresArr,
	};
	console.log(item);

	revalidatePath("/");
	redirect("/empresa/gerenciar-itens");
}
