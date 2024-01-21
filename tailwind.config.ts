import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: 'Inter',
			serif: 'Cormorant Garamond'
		},
		screens: {
			md: '900px'
		},
		extend: {}
	},
	plugins: []
} satisfies Config
