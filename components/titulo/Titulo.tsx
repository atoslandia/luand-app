import { Be_Vietnam_Pro } from "next/font/google";
import { FC, ReactNode } from "react";

const beVietnamProFont = Be_Vietnam_Pro({ weight: "800", subsets: ["latin"] });

interface TituloProps {
	children: ReactNode;
}

const Titulo: FC<TituloProps> = ({ children }) => {
	return <h1 className={`${beVietnamProFont.className} text-lg font-bold`}>{children}</h1>;
};

export default Titulo;
