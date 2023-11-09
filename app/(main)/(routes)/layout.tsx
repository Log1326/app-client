import type { Metadata } from 'next'
import { Sidebar } from '../../../components/Sidebar/Sidebar'

export const metadata: Metadata = {
	title: 'Chat',
	description: 'Chat Desc'
}

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Sidebar />
			{children}
		</>
	)
}
