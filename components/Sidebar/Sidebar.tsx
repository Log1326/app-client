'use client'
import { useMemo } from 'react'

import { usePathname } from 'next/navigation'

import { IconType } from 'react-icons'
import { BsChatText } from 'react-icons/bs'
import { PiUsersLight } from 'react-icons/pi'
import { CiLogout } from 'react-icons/ci'

import { SidebarItem } from './SidebarItem'
import { Avatar } from '@components/Avatar'
import { authService } from '@lib/api'
import { apiRtk } from '@store/rtk-api/rtk-api'

export interface SidebarDetails {
	label: string
	href: string
	icon: IconType
	active?: boolean
	onClick?: () => void
}
export const Sidebar = () => {
	const pathname = usePathname()
	const { data, isLoading } = apiRtk.useGetProfileQuery(null)

	const handleLogOut = async () => await authService.logout()
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
				href: '/auth/sign-in',
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
				{isLoading ? null:  (
					<Avatar
						href='/profile'
						label={`${data?.firstName} ${data?.lastName}`}
						src={data?.picture || '/icon.jpg'}
						size='medium'
					/>
				)}
			</nav>
		</aside>
	)
}
