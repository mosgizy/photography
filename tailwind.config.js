/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'auction-linear':
					'linear-gradient(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9, 0.49) 111.62%)',
				'auction-image':
					'linear-gradient(0deg, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), linear-gradient(104.57deg, rgba(0, 0, 0, 0) 21.03%, rgba(0, 0, 0, 0.2) 56.5%, rgba(0, 0, 0, 0.2) 93.84%), url(https://images.unsplash.com/photo-1667521452940-0a127d88e345?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8YWxsfDEyN3x8fHx8fDJ8fDE2Njc2NzE3MzU&ixlib=rb-4.0.3&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450)',
				'drops-linear':
					'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(245, 244, 244, 0.24)',
			},
			boxShadow: {
				'3xl': '4px 4px 64px rgba(0,0,0,0.1)',
				'4xl': '0px 0px 9px -1px rgba(0,0,0,0.25)',
				'5xl': '4.68154px 4.68154px 7.02232px rgba(0, 0, 0, 0.15)',
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#333333',
			secondary: '#292929',
			fadeText: '#616161',
			darkText: '#161616',
			notActive: '#BCB7B7',
			notification: '#e31616',
			nameColor: '#006ca2',
			buttonColor: '#3341c1',
			white: '#ffffff',
			black: '#000000',
			transparentWhite: 'rgba(255,255,255,0.4)',
			checkedHeart: '#E31616',
		},
	},
	plugins: [],
};
