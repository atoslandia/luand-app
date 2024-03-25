import { FC } from "react";

interface NumeroInputProps {
	titulo: string;
}

const NumeroInput: FC<NumeroInputProps> = ({ titulo }) => {
	return <input type="number" placeholder={titulo} className="p-2 border-2 border-tertiary rounded-luand" />;
};

export default NumeroInput;
