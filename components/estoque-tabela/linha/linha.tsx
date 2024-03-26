import NumeroInput from "@/components/numero-input/numero-input";
import { FC } from "react";

interface LinhaProps {}

const Linha: FC<LinhaProps> = () => {
	return (
		<tr className="divide-x-2 divide-tertiary text-center">
			<td className="p-2 ">
				<input required placeholder="Cor" name="cor" type="color" className="size-10" />
			</td>
			<td className="p-2">
				<NumeroInput name="tamanhoP" titulo="Quantidade P" />
			</td>
			<td className="p-2">
				<NumeroInput name="tamanhoM" titulo="Quantidade M" />
			</td>
			<td className="p-2">
				<NumeroInput name="tamanhoG" titulo="Quantidade G" />
			</td>
		</tr>
	);
};

export default Linha;
