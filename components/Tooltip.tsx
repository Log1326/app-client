'use client'

import { twMerge } from 'tailwind-merge'

export type Side = 'left' | 'right' | 'top' | 'bottom'
interface TooltipProps {
	side?: Side
	children: React.ReactNode
	content: string
	onClick?: () => void
	className?: string
}

export const Tooltip: React.FC<TooltipProps> = props => {
	const { side = 'top', children, className, content, onClick } = props
	const tooltipSide: Record<Side, string> = {
		top: 'bottom-full left-1/2 -ml-[60px]',
		right: 'top-0 left-full',
		left: 'top-0 right-full',
		bottom: 'top-full left-1/2 my-3 -ml-[60px] '
	}
	const triangleSide: Record<Side, string> = {
		bottom: 'ml-[40%] mt-[1px] w-6 absolute -top-3',
		top: 'ml-[40%] mb-[1px] w-6 rotate-180 absolute -bottom-3  ',
		right: '-mb-6 mt-2 -ml-[17px] w-6 h-auto -rotate-90 ',
		left: '-mb-4 mt-2.5 -mr-[5px] absolute -right-3 top-2 w-6 h-auto rotate-90'
	}
	const handleClick = () => onClick?.()
	return (
		<div className='group z-40 relative inline-block'>
			<div className='px-1 z-50' onClick={handleClick}>
				{children}
			</div>

			<div
				className={twMerge(
					`hidden animate-fade absolute group-hover:flex flex-col`,
					tooltipSide[side],
					className
				)}
			>
				<div
					className={twMerge(
						'inline-block overflow-hidden',
						triangleSide[side]
					)}
				>
					<div className='h-3 w-3 origin-bottom-left rotate-45 transform border border-neutral-500 bg-neutral-100' />
				</div>
				<div className='min-w-max rounded-md border border-neutral-500 bg-neutral-100 px-3 py-2'>
					{content}
				</div>
			</div>
		</div>
	)
}
