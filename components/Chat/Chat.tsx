'use client'
import { useState } from 'react'

import { MessageResponse } from '@store/rtk-api/message/types'

import { HeaderChat } from '@components/Header'
import { Drawer } from '@components/Drawer'

import { ChatMessageBar } from './ChatComponents/ChatMessageBar'
import { ChatItem } from './ChatItem'
import { apiRtk } from '@store/rtk-api/rtk-api'
import { conversationRtkApi } from '@store/rtk-api/conversation/conversation-rtk.api'

export const Chat = () => {
	const { data: profile } = apiRtk.useGetProfileQuery(null)
	const { data: conversations } =
		conversationRtkApi.useGetAllConversationWithMessagesQuery(null)
	const messages: MessageResponse[] | undefined = conversations
		?.map(conversation => conversation.messages)
		.flat()
	const [open, setOpen] = useState(false)
	return (
		<section className='grow flex flex-col justify-between relative'>
			<Drawer
				isOpen={open}
				onClose={() => setOpen(false)}
				title='Menu conversation'
				description='list of friends'
			>
				<p>hello</p>
			</Drawer>
			<HeaderChat onOpen={() => setOpen(true)} />
			{messages && (
				<ChatItem messages={messages} userId={String(profile?.id)} />
			)}
			<ChatMessageBar />
		</section>
	)
}
