/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background-color))",
				elements: "hsl(var(--elements-color))",
				"color-text": "hsl(var(--text-color))",
				input: "hsl(var(--input-color))",
				"color-placeholder": "hsl(var(--placeholder-color))",
			}
		},
	},
	plugins: [],
}
