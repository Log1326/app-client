import { MessageResponse } from '@store/rtk-api/message/types'

export interface Conversation {
	id: string
	createdAt: Date
	lastMessageAt: Date
	name: string | null
	isGroup: boolean | null
}
export interface ConversationWithUsers extends Conversation {
	userIds: string[]
	users: UserProfile[]
}
export interface ConversationWithMessage extends Conversation {
	messageIds: string[]
	messages: MessageResponse[]
}
