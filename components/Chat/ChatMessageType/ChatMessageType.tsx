'use client'
import { TypeMessage } from '@components/Chat/ChatItem'
import React from 'react'
import { ChatTextType } from './ChatTextType'
import { ChatAudioType } from './ChatAudioType'
import { ChatImageType } from './ChatImageType'

interface ChatMessageTypeProps {
	messageType: TypeMessage
	message: string
}
const ViewMessage: Record<
	TypeMessage,
	React.ComponentType<{ message?: string }>
> = {
	text: ChatTextType,
	image: ChatImageType,
	audio: ChatAudioType
}
export const ChatMessageType: React.FC<ChatMessageTypeProps> = props => {
	const View = ViewMessage[props.messageType]
	return <View {...props} />
}
