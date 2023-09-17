/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			width: {
				102: '30rem',
			},
			fontFamily: {
				inter: ["'Inter', sans-serif"],
			},
			colors: {
				// primary: {
				// 	100: '#4EA5A5',
				// 	200: '#398D8D',
				// 	300: '#305861',
				// },
				// badge: '#58D7FF',
				// foreground: '#EDEDED',

				background: '#e3eef9',
				primary: {
					100: '#1874CF',
					200: '#034687',
				},
				yellow: '#f7df05',
				red: '#e12d35',
				green: '#02c881',
			},
		},
	},
	plugins: [],
};
