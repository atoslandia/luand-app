import { FC, ReactNode } from "react";

interface BotaoProps {
	children: ReactNode;
}

const Botao: FC<BotaoProps> = ({ children }) => {
	return <button className="px-5 py-1 text-white bg-secundary rounded-luand">{children}</button>;
};

export default Botao;
