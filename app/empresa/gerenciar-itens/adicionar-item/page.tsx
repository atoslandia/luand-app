"use client";

import EmpresaLayout from "@/components/empresa-layout/empresa-layout";
import EstoqueTabela from "@/components/estoque-tabela/estoque-tabela";
import NumeroInput from "@/components/numero-input/numero-input";
import SubmitBotao from "@/components/submit-botao/submit-botao";
import { adicionarItem } from "@/lib/actions/actions";
import { useFormState } from "react-dom";

export default function AdiconarItem() {
	const [state, formAction] = useFormState(adicionarItem, { erro: "" });
	return (
		<EmpresaLayout titulo="Adicionar um item">
			<form action={formAction} className="w-full flex flex-col gap-2">
				<NumeroInput name="referencia" titulo="Número de referência" />
				<EstoqueTabela />
				<SubmitBotao>Adicionar item</SubmitBotao>
				{state.erro && (
					<div className="w-full p-2 text-center text-white border-2 border-tertiary bg-erro rounded-luand">
						{state.erro}
					</div>
				)}
			</form>
		</EmpresaLayout>
	);
}
