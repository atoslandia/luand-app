import Link from "next/link";
import { FC, ReactNode } from "react";

interface BotaoLinkProps {
	href: string;
	children: ReactNode;
}

const BotaoLink: FC<BotaoLinkProps> = ({ href, children }) => {
	return (
		<Link href={href} className="px-5 py-1 text-white bg-secundary rounded-luand">
			{children}
		</Link>
	);
};

export default BotaoLink;
