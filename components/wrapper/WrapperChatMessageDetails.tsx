'use client'
import { twMerge } from 'tailwind-merge'

interface WrapperChatMessageDetailsProps {
	isSender?: boolean
	children: React.ReactNode
}
export const WrapperChatMessageDetails: React.FC<
	WrapperChatMessageDetailsProps
> = ({ children, isSender }) => {
	return (
		<div
			className={twMerge(
				'flex gap-2 items-end justify-start w-[400px]',
				isSender && 'flex gap-2 flex-row-reverse'
			)}
		>
			{children}
		</div>
	)
}
