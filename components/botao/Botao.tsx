import { FC, MouseEventHandler, ReactNode } from "react";

interface BotaoProps {
	onClick?: MouseEventHandler;
	children: ReactNode;
}

const Botao: FC<BotaoProps> = ({ onClick, children }) => {
	return (
		<button onClick={onClick} className="px-5 py-1 text-white bg-secundary rounded-luand">
			{children}
		</button>
	);
};

export default Botao;
