/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"accient-yellow": "#ffbc42",
				"accient-pink": "#d81159"
			}
		},
	},
	plugins: [],
}
