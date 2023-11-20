import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			height: {
				header: '60px',
				footer: '80px'
			},
			keyframes: {
				fade: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				appearance: {
					'0%': { transform: 'translateX(150px)' },
					'100%': { transform: 'translateX(0px)' }
				}
			},
			animation: {
				fade: 'fade .5s, fade .5s 2s reverse forwards',
				appearance: 'appearance .5s linear'
			},
			transitionProperty: {
				height: 'height',
				Width: 'Width'
			},
			maxWidth: {
				lg: '200px',
				xl: '350px',
				'2xl': '500px'
			},
			minWidth: {
				lg: '200px',
				xl: '350px',
				'2xl': '500px'
			}
		}
	}
}
export default config
