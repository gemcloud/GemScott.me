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
		},
		inset: {
			// timelineCircle: 'calc(50% - 0.5em)',
		},
		boxShadow: {
			// case: '0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24)',
			// 'case-hover': '0 10px 28px rgba(0,0,0,.25), 0 8px 10px rgba(0,0,0,.22)',
			// link: 'inset 0 -4px 0 #6c63ff',
			// 'link-hover': 'inset 0 -18px 0 #6c63ff',
			// 'link-dark': 'inset 0 -4px 0 #b55400',
			// 'link-dark-hover': 'inset 0 -18px 0 #b55400',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
