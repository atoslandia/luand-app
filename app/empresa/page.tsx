import BotaoLink from "@/components/botao-link/botao-link";
import MainPadrao from "@/components/main-padrao/main-padrao";
import Titulo from "@/components/titulo/titulo";

export default function EmpresaPage() {
	return (
		<MainPadrao>
			<Titulo>Entrar como empresa</Titulo>
			<input placeholder="Email" type="email" required className="p-2 border-2 border-tertiary rounded-luand" />
			<input
				placeholder="Senha"
				type="password"
				required
				className="p-2 border-2 border-tertiary rounded-luand"
			/>
			<BotaoLink href="empresa/relatorios">Entrar</BotaoLink>
		</MainPadrao>
	);
}
