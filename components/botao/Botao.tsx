import { FC, MouseEventHandler, ReactNode } from "react";

interface BotaoProps {
	onClick?: MouseEventHandler;
	estilo?: string;
	children: ReactNode;
}

const Botao: FC<BotaoProps> = ({ onClick, estilo, children }) => {
	return (
		<button type="button" onClick={onClick} className={`px-5 py-1 text-white bg-secundary rounded-luand ${estilo}`}>
			{children}
		</button>
	);
};

export default Botao;
