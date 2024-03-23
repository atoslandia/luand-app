import { FC, ReactNode } from "react";

interface CorProps {
	children: ReactNode;
}

const Cor: FC<CorProps> = ({ children }) => {
	return <span className={`w-20 h-5 self-center border-2 border-tertiary rounded-luand ${children}`}></span>;
};

export default Cor;
