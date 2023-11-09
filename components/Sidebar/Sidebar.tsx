'use client'
import { useMemo } from 'react'

import { usePathname } from 'next/navigation'

import { IconType } from 'react-icons'
import { BsChatText } from 'react-icons/bs'
import { PiUsersLight } from 'react-icons/pi'
import { CiLogout } from 'react-icons/ci'

import { SidebarItem } from './SidebarItem'
import { Avatar } from '@components/Avatar'

export interface SidebarDetails {
	label: string
	href: string
	icon: IconType
	active?: boolean
	onClick?: () => void
}
export const Sidebar = () => {
	const pathname = usePathname()
	const handleLogOut = () => {}
	const SidebarMenu = useMemo<SidebarDetails[]>(
		() => [
			{
				label: 'Conversation',
				href: '/conversation',
				icon: BsChatText,
				active: pathname === '/conversation'
			},
			{
				label: 'Contact',
				href: '/contact',
				icon: PiUsersLight,
				active: pathname === '/contact'
			},
			{
				label: 'Leave',
				href: '#',
				icon: CiLogout,
				onClick: handleLogOut
			}
		],
		[pathname]
	)
	return (
		<aside className='min-w-[100px] flex flex-col py-4 items-center justify-between min-h-full'>
			<nav>
				{SidebarMenu.map(item => (
					<ul className='flex flex-col gap-4' key={item.label}>
						<SidebarItem item={item} />
					</ul>
				))}
			</nav>
			<nav>
				<Avatar
					href='/profile'
					label={'userName'}
					src={'/icon.jpg'}
					size='medium'
				/>
			</nav>
		</aside>
	)
}
