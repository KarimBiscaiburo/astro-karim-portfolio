/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"sans": ["Libre Caslon Text", "sans-serif"]
			},
		},
		colors: {
			"nav_background": "rgba(0, 0, 0, 0.06)",
			"black": "#0B0B0B",
			"dark-gray": "#1C1C1D",
			"light-dark-gray": "#1C1C1C",
			"light-gray": "#909090",
			"extra-light-gray": "#C1C1C1",
			"white": "#DDDDDD",
			"cian": "#09aa8c",
			"darken-cian": "#072621"
		},
	},
	plugins: [],
}
