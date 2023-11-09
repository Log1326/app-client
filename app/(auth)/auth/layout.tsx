import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Authorization | Page',
	description: 'Auth Page'
}

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='h-screen w-screen grid place-content-center'>
			{children}
		</div>
	)
}
