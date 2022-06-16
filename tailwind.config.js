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
				// purple: '#F5EBFF',
				// primary: 'var(--primary)',
				// lightgrey: '#393e46',
				// linkedIn: '#0076b5',
				// darkgrey: 'var(--darkgray)',
				// text: 'var(--text)',
				// orange: '#b55400',
				// yellow: 'var(--yellow)',
				// secondary: 'var(--secondary)',
				// lightpurple: 'var(--lightpurple)',
			},
			keyframes: {
				'title-part1': {
					'0%, 100%': { color: 'var(--text)' },
					'50%': { color: 'var(--primary)' },
				},
				'title-part2': {
					'0%, 100%': { color: 'var(--text)' },
					'50%': { color: 'var(--yellow)' },
				},
				'title-part3': {
					'0%, 100%': { color: 'var(--text)' },
					'50%': { color: 'var(--blue)' },
				},
			},
			animation: {
				'title-part1': 'title-part1 3s ease-in-out infinite',
				'title-part2': 'title-part2 3s ease-in-out 1s infinite',
				'title-part3': 'title-part3 3s ease-in-out 2s infinite',
			},
			rotate: {
				135: '135deg',
				'-135': '-135deg',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
