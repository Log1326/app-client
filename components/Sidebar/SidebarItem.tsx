'use client'
import { SidebarDetails } from './Sidebar'
import { Icon } from '@components/Icon'
import { Tooltip } from '@components/Tooltip'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

interface SidebarItemProps {
	item: SidebarDetails
}
export const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
	const { active, onClick, href, icon, label } = item
	const handleClick = () => onClick?.()
	return (
		<li onClick={handleClick} className='px-4 pt-4 text-center'>
			<Link href={href}>
				<Tooltip content={label} side='right' className='-mt-1 ml-2'>
					<Icon
						Svg={icon}
						className={twMerge(
							'h-7 w-7 cursor-pointer',
							active && 'fill-white bg-sky-500 rounded-md h-10 w-10 p-2'
						)}
					/>
				</Tooltip>
				<span className='sr-only'>{label}</span>
			</Link>
		</li>
	)
}
