import Botao from "@/components/botao/botao";
import NumeroInput from "@/components/numero-input/numero-input";
import { FC } from "react";

interface LinhaProps {}

const Linha: FC<LinhaProps> = () => {
	return (
		<>
			<td className="p-2 ">
				<input placeholder="Cor" type="color" className="w-24 h-10" />
			</td>
			<td className="p-2">
				<NumeroInput titulo="Quantidade P" />
			</td>
			<td className="p-2">
				<NumeroInput titulo="Quantidade M" />
			</td>
			<td className="p-2">
				<NumeroInput titulo="Quantidade G" />
			</td>
		</>
	);
};

export default Linha;
