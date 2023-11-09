'use client'
import { ChatMessageStatus } from './ChatComponents/ChatMessageStatus'
import { ChatMessageType } from './ChatMessageType'

import {
	WrapperChatDetails,
	WrapperChatDirection,
	WrapperChatMessageDetails,
	WrapperChatUserDetails
} from '@components/wrapper'
import { AvatarContact } from '@components/Avatar'

type User = {
	fullName: string
	image: string
}
export type TypeMessage = 'text' | 'audio' | 'image'
export type TypeMessageStatus = 'sent' | 'read' | 'delivered'

type Message = {
	user: User
	id: number
	receiverId: number
	senderId: number
	type: TypeMessage
	message: string
	messageStatus: TypeMessageStatus
	createdAt: string
	totalUnreadMessages?: number
}
interface ChatItemProps {
	message: Message[]
}
export const ChatItem: React.FC<ChatItemProps> = ({ message }) => {
	return (
		<div className='grow p-2 my-4 overflow-y-auto overscroll-auto'>
			{message.map(item => {
				const isSender = item.senderId === 1
				return (
					<div key={item.id} className='flex flex-col p-4 px-6'>
						<WrapperChatDirection isSender={isSender}>
							<WrapperChatDetails isSender={isSender}>
								<AvatarContact
									online={true}
									size={'medium'}
									src={item.user.image}
								/>
								<div className='flex flex-col'>
									<WrapperChatUserDetails isSender={isSender}>
										<p className='text-xl'>{item.user.fullName}</p>
										<p className='text-xs text-gray-400'>{item.createdAt}</p>
									</WrapperChatUserDetails>
									<WrapperChatMessageDetails isSender={isSender}>
										<ChatMessageType
											messageType={item.type}
											message={item.message}
										/>
										<ChatMessageStatus status={item.messageStatus} />
									</WrapperChatMessageDetails>
								</div>
							</WrapperChatDetails>
						</WrapperChatDirection>
					</div>
				)
			})}
		</div>
	)
}
