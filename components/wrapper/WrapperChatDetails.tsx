'use client'
import { twMerge } from 'tailwind-merge'

interface WrapperChatDetailsProps {
	isSender?: boolean
	children: React.ReactNode
}
export const WrapperChatDetails: React.FC<WrapperChatDetailsProps> = ({
	children,
	isSender
}) => {
	return (
		<div
			className={twMerge(
				'flex gap-2',
				isSender && 'flex flex-row-reverse gap-2'
			)}
		>
			{children}
		</div>
	)
}
