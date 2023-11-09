'use client'
import { twMerge } from 'tailwind-merge'

interface WrapperChatDirectionProps {
	isSender: boolean
	children: React.ReactNode
}
export const WrapperChatDirection: React.FC<WrapperChatDirectionProps> = ({
	isSender,
	children
}) => {
	return (
		<div
			className={twMerge('flex justify-start', isSender && 'flex justify-end')}
		>
			{children}
		</div>
	)
}
