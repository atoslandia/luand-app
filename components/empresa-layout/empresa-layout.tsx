import { FC, ReactNode } from "react";
import LinkEstilizado from "../link-estilizado/link-estilizado";
import Titulo from "../titulo/titulo";

interface EmpresaLayoutProps {
	titulo: string;
	children: ReactNode;
}

const EmpresaLayout: FC<EmpresaLayoutProps> = ({ titulo, children }) => {
	return (
		<>
			<div className="w-full flex text-center divide-x-2 divide-tertiary border-2 border-tertiary rounded-luand">
				<LinkEstilizado href="/empresa/relatorios">Relatórios</LinkEstilizado>
				<LinkEstilizado href="/empresa/estoque">Estoque</LinkEstilizado>
				<LinkEstilizado href="/empresa/gerenciar-itens">Gerenciar itens</LinkEstilizado>
				<LinkEstilizado href="/empresa/editar-empresa">Editar empresa</LinkEstilizado>
			</div>
			<Titulo>{titulo}</Titulo>
			{children}
		</>
	);
};

export default EmpresaLayout;
