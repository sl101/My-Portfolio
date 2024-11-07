
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./(pages)/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"GeistVF"', '"Roboto-regular"', '"Roboto-medium"'],
			},
			backgroundImage: {
				"contact-image": "url('/img/bg/webdev.jpg')",
				"about-image": "url('/img/bg/matrix3.jpg')"
			},
		},
		colors: {
			'white': '#fff',
			'black': '#000',
			'original-tean': '#092930',
			'accent-orange': '#ff7849',
			//'green': '#13ce66',
			//'gray-dark': '#273444',
			//'gray': '#8492a6',
			//'gray-light': '#d3dce6',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '0.5rem',
				sm: '1rem',
			},
		},
		screens: {
			'fullhd': '1920px',
		},
	},
	plugins: [],
};