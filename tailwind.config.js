/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(288px, 1fr))',
			},
		},
	},
	plugins: [],
};
