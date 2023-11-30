export type MessageType = 'text' | 'audio' | 'image'
export type MessageStatus = 'send' | 'delivered' | 'read'
export interface MessageBody {
	content: string
	type: MessageType
	conversationId: string
	receivedId: string
}
export interface MessageResponse {
	id: string
	createdAt: Date
	content: string
	type: MessageType
	messageStatus: MessageStatus
	conversationRoomsId: string
	senderId: string
	receiveId: string[]
	sender: UserProfile
	received: UserProfile[]
}
