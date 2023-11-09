'use client'
import Image from 'next/image'

interface ChatImageTypeProps {
	message?: string
}
export const ChatImageType: React.FC<ChatImageTypeProps> = ({ message }) => {
	return (
		<Image
			src={message || ''}
			alt={message || ''}
			height={300}
			width={300}
			className='object-contain rounded-2xl p-2 mt-2 min-w-[300px]'
		/>
	)
}
