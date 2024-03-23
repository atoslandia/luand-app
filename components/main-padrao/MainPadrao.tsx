import { FC, ReactNode } from "react";

interface MainPadraoProps {
	children: ReactNode;
}

const MainPadrao: FC<MainPadraoProps> = ({ children }) => {
	return <main className="p-2 flex w-full flex-col items-center gap-2">{children}</main>;
};

export default MainPadrao;
