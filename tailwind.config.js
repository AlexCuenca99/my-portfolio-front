/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		container: {
			padding: {
				DEFAULT: '15px',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		extend: {
			colors: {
				primary: '#131424',
				secondary: '#393A47',
				primaryText: '#F7FAFC',
				secondaryText: '#E2E8F0',
				accent: '#F13024',
				primaryLight: '#FFFFFF',
				secondaryLight: '#EDF2f7',
				primaryTextLight: '#2D3748',
				secondaryTextLight: '#4A5568',
				accentLight: '#2b6cb0',
			},
			backgroundImage: {
				explosion: 'url("/bg-explosion.png")',
				circles: 'url("/bg-circles.png")',
				circleStar: 'url("/circle-star.svg")',
				circleStarLight: 'url("/circle-star-light.svg")',
				site: 'url("/site-bg.svg")',
			},
			animation: {
				'spin-slow': 'spin 6s linear infinite',
			},
			fontFamily: {
				poppins: [`var(--font-poppins)`, 'sans-serif'],
				sora: [`var(--font-sora)`, 'sans-serif'],
			},
		},
	},
	container: {
		padding: {
			DEFAULT: '15px',
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
