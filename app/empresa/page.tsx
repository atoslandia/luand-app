import Botao from "@/components/botao/Botao";
import MainPadrao from "@/components/main-padrao/MainPadrao";
import Titulo from "@/components/titulo/Titulo";
import Link from "next/link";

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
			<Link href="empresa/estoque">Entrar</Link>
		</MainPadrao>
	);
}
