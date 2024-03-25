import Link from "next/link";

import { FC, MouseEventHandler, ReactNode } from "react";

interface LinkEstilizadoProps {
	href: string;
	children: ReactNode;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const LinkEstilizado: FC<LinkEstilizadoProps> = ({ href, children, onClick }) => {
	return (
		<Link href={href} onClick={onClick} className="p-2 w-full hover:bg-tertiary">
			{children}
		</Link>
	);
};

export default LinkEstilizado;
