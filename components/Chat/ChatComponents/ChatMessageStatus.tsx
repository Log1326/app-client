'use client'
import { TypeMessageStatus } from '@components/Chat/ChatItem'
import { BsCheck, BsCheckAll } from 'react-icons/bs'
import { Icon } from '@components/Icon'

interface ChatStatusProps {
	status?: TypeMessageStatus
}
export const ChatMessageStatus: React.FC<ChatStatusProps> = ({ status }) => {
	return (
		<div className='z-30'>
			{status === 'read' && (
				<Icon Svg={BsCheckAll} className='h-7 w-7 p-1 fill-sky-500' />
			)}
			{status === 'sent' && (
				<Icon Svg={BsCheck} className='h-7 w-7 p-1 fill-gray-400' />
			)}
			{status === 'delivered' && (
				<Icon Svg={BsCheckAll} className='h-7 w-7 p-1 fill-gray-400' />
			)}
		</div>
	)
}
