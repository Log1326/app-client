'use client'
import { twMerge } from 'tailwind-merge'

interface WrapperChatUserDetailsProps {
	isSender?: boolean
	children: React.ReactNode
}
export const WrapperChatUserDetails: React.FC<WrapperChatUserDetailsProps> = ({
	children,
	isSender
}) => {
	return (
		<div
			className={twMerge(
				'flex gap-4 items-end justify-start',
				isSender && 'flex gap-2 flex-row-reverse'
			)}
		>
			{children}
		</div>
	)
}
