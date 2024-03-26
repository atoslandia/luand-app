import { FC, ReactNode } from "react";
import Titulo from "../titulo/titulo";
import LinkMenu from "./link-menu/link-menu";

interface EmpresaLayoutProps {
	titulo: string;
	children: ReactNode;
}

const EmpresaLayout: FC<EmpresaLayoutProps> = ({ titulo, children }) => {
	return (
		<>
			<div className="w-full flex text-center divide-x-2 divide-tertiary border-2 border-tertiary rounded-luand">
				<LinkMenu href="/empresa/relatorios">Relatórios</LinkMenu>
				<LinkMenu href="/empresa/estoque">Estoque</LinkMenu>
				<LinkMenu href="/empresa/gerenciar-itens">Gerenciar itens</LinkMenu>
				<LinkMenu href="/empresa/editar-empresa">Editar empresa</LinkMenu>
			</div>
			<Titulo>{titulo}</Titulo>
			{children}
		</>
	);
};

export default EmpresaLayout;
