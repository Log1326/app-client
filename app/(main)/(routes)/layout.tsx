import type { Metadata } from 'next'
import { Sidebar } from '@components/Sidebar'

export const metadata: Metadata = {
	title: 'Chat',
	description: 'Chat Desc'
}

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Sidebar />
			{children}
		</>
	)
}
export default Layout
