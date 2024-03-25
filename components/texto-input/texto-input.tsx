import { FC } from "react";

interface TextoInputProps {
	titulo: string;
}

const TextoInput: FC<TextoInputProps> = ({ titulo }) => {
	return <input type="text" placeholder={titulo} className="p-2 border-2 border-tertiary rounded-luand" />;
};

export default TextoInput;
