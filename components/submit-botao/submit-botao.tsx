import { FC, ReactNode } from "react";

interface SubmitBotaoProps {
	estilo?: string;
	children: ReactNode;
}

const SubmitBotao: FC<SubmitBotaoProps> = ({ estilo, children }) => {
	return (
		<button type="submit" className={`px-5 py-1 text-white bg-secundary rounded-luand ${estilo}`}>
			{children}
		</button>
	);
};

export default SubmitBotao;
