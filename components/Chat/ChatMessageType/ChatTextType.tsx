'use client'
interface ChatTextTypeProps {
	message?: string
}
export const ChatTextType: React.FC<ChatTextTypeProps> = ({ message }) => {
	return <p className='text-lg text-gray-500'>{message}</p>
}
