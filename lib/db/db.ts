import mongoose from "mongoose";

mongoose.set("strictQuery", true);

async function conectar() {
	const URL = process.env.BD_URL;
	if (URL) {
		return await mongoose.connect(URL);
	}
}

async function desconectar() {
	return await mongoose.disconnect();
}

export default { conectar, desconectar };
