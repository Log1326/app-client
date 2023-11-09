import './globals.css'

import { Open_Sans } from 'next/font/google'
import { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import { StoreProvider } from '@/providers/store/StoreProvider'
import { ReactNode } from 'react'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Video | Chat',
	description: 'Video & Audio & Application',
	icons: [
		{
			fetchPriority: 'auto',
			url: '/icon.jpg',
			rel: 'icon',
			sizes: '32x32',
			type: 'image/jpg'
		}
	]
}
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NextTopLoader
					color='#29d'
					initialPosition={0.2}
					crawlSpeed={200}
					height={4}
					crawl={true}
					showSpinner={true}
					easing='ease'
					speed={400}
					shadow='0 0 10px #2299DD,0 0 5px #2299DD'
				/>
				<StoreProvider>
					<div className='bg-neutral-100 flex flex-row min-h-screen max-h-screen'>
						{children}
					</div>
				</StoreProvider>
			</body>
		</html>
	)
}
