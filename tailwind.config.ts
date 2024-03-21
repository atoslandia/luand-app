import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			primary: "#3D3D3D",
			secundary: "#9D77DB",
			tertiary: "#333D3D3D",
			white: "#FFFFFF",
		},
		borderRadius: {
			luand: "0.4rem",
		},
	},
	plugins: [],
};
export default config;
