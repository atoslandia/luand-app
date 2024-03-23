import { FC, ReactNode } from "react";

interface FooterProps {
	children: ReactNode;
}

const Footer: FC<FooterProps> = ({ children }) => {
	return (
		<footer className="fixed bottom-0 p-2 w-full bg-white border-t-2 border-tertiary grid grid-cols-2 gap-2">
			{children}
		</footer>
	);
};

export default Footer;
