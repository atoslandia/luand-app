import { transform } from "next/dist/build/swc";
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
		extend: {
			keyframes: {
				"toggle-menu": { "0%": { transform: "translateX(-100vw)" }, "100%": { transform: "translateX(0)" } },
				"fade-in": { "0%": { opacity: "0%" }, "100%": { opacity: "100%" } },
			},
			animation: {
				"toggle-menu": "toggle-menu 1s",
				"fade-in": "fade-in 0.5s",
			},
		},
	},

	plugins: [],
};
export default config;
