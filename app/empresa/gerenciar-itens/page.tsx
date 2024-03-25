import BotaoLink from "@/components/botao-link/botao-link";
import EmpresaLayout from "@/components/empresa-layout/empresa-layout";

export default function GerenciarItensPage() {
	return (
		<EmpresaLayout titulo="Gerencie seus itens">
			<BotaoLink href="/empresa/gerenciar-itens/ver-meus-itens">Ver meus itens</BotaoLink>
			<BotaoLink href="/empresa/gerenciar-itens/adicionar-item">Adicionar item</BotaoLink>
		</EmpresaLayout>
	);
}
