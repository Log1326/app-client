'use client'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Side, Tooltip } from '@components/Tooltip'
import { FC } from 'react'

type Size = 'tiny' | 'small' | 'medium' | 'large' | 'extraLarge'

interface AvatarProps {
	size: Size
	src: string
	className?: string
	label?: string
	href: string
	tooltipSide?: Side
}
export const Avatar: FC<AvatarProps> = props => {
	const {
		className,
		src,
		href,
		size = 'small',
		label,
		tooltipSide = 'right'
	} = props
	const pathname = usePathname()
	const imgSize: Record<Size, string> = {
		tiny: 'w-[20px] h-[20px]',
		small: 'w-[40px] h-[40px]',
		medium: 'w-[60px] h-[60px]',
		large: 'w-[80px] h-[80px]',
		extraLarge: 'w-[120px] h-[120px]'
	}
	return (
		<Link href={href}>
			<Tooltip
				content={label || 'avatar'}
				side={tooltipSide}
				className='mt-3 ml-1'
			>
				<div
					className={twMerge(
						'relative',
						imgSize[size],
						className,
						pathname === '/profile' && 'bg-sky-300 p-2 rounded-full'
					)}
				>
					<Image
						src={src}
						alt={label || 'imageAvatar'}
						className='rounded-full p-1 cursor-pointer object-cover'
						fill
					/>
				</div>
			</Tooltip>
		</Link>
	)
}
