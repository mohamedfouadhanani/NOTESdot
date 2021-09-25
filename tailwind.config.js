const { gray, violet } = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			colors: { gray, violet },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
