'use client'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type Size = 'tiny' | 'small' | 'medium' | 'large' | 'extraLarge'
interface AvatarProps {
	size: Size
	src: string
	className?: string
	label?: string
	online?: boolean
}
export const AvatarContact: React.FC<AvatarProps> = props => {
	const { className, src, size = 'small', label, online } = props
	const imgSize: Record<Size, string> = {
		tiny: 'w-[20px] h-[20px]',
		small: 'w-[40px] h-[40px]',
		medium: 'w-[60px] h-[60px]',
		large: 'w-[80px] h-[80px]',
		extraLarge: 'w-[120px] h-[120px]'
	}
	const statusSize: Record<Size, string> = {
		tiny: 'w-2 h-2',
		small: 'w-3 h-3',
		medium: 'w-4 h-4',
		large: 'w-5 h-5',
		extraLarge: 'w-6 h-6'
	}
	return (
		<div>
			<div className={twMerge('relative', imgSize[size], className)}>
				{online && (
					<span
						className={twMerge(
							'absolute top-0 right-1 z-30 border-2 rounded-full bg-green-500',
							statusSize[size]
						)}
					/>
				)}
				<Image
					src={src}
					alt={label || 'imageAvatar'}
					className='rounded-full p-1 cursor-pointer object-cover'
					fill
				/>
			</div>
		</div>
	)
}
