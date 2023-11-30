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
import { MessageResponse } from '@store/rtk-api/message/types'
import { LoadingElement } from '@components/Loading'

interface ChatItemProps {
	messages: MessageResponse[]
	userId:string
}
export const ChatItem: React.FC<ChatItemProps> = ({ messages,userId }) => {
	return (
		<div className='grow p-2 my-4 overflow-y-auto overscroll-auto'>
			{messages?.map(item => {
				const isSender = item.senderId === userId
				return (
					<div key={item.id} className='flex flex-col p-4 px-6'>
						<WrapperChatDirection isSender={isSender}>
							<WrapperChatDetails isSender={isSender}>
								<AvatarContact
									online={true}
									size={'medium'}
									src={item.sender.picture}
								/>
								<div className='flex flex-col'>
									<WrapperChatUserDetails isSender={isSender}>
										<p className='text-xl'>{item.sender.firstName}</p>
										<LoadingElement content={item.content} classname='text-xs text-gray-400'/>
									</WrapperChatUserDetails>
									<WrapperChatMessageDetails isSender={isSender}>
										<ChatMessageType
											messageType={item.type}
											message={item.content}
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
