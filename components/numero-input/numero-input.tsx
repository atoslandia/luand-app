import { FC } from "react";

interface NumeroInputProps {
	titulo: string;
	name: string;
}

const NumeroInput: FC<NumeroInputProps> = ({ titulo, name }) => {
	return (
		<input
			required
			type="number"
			name={name}
			placeholder={titulo}
			className="p-2 border-2 border-tertiary rounded-luand"
		/>
	);
};

export default NumeroInput;
