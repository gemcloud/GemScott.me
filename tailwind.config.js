// const { colors } = require('tailwindcss/defaultTheme')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Be Vietnam Pro', 'system-ui', 'sans'],
		},
		extend: {
			colors: {
				dark: '#000',
				white: '#fff',
				lightText: '#76797d',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
