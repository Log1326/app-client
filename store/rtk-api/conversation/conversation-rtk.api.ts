import { apiRtk } from '@store/rtk-api/rtk-api'
import {
	Conversation,
	ConversationWithMessage,
	ConversationWithUsers
} from '@store/rtk-api/conversation/types'

export const conversationRtkApi = apiRtk.injectEndpoints({
	endpoints: build => ({
		createConversation: build.mutation<Conversation, { userId: string }>({
			query(body) {
				return {
					url: '/conversation',
					method: 'POST',
					body
				}
			}
		}),
		updateConversation: build.mutation<any, { id: string; data: any }>({
			query(body) {
				const { id, data } = body
				return {
					url: `/conversation/${id}`,
					method: 'PATCH',
					body: data
				}
			}
		}),
		getConversationId: build.query<Conversation, string>({
			query: id => `/conversation/id/${id}`
		}),
		getAllConversationWithUsers: build.query<ConversationWithUsers[], null>({
			query: () => `/conversation/users`
		}),
		getAllConversationWithMessages: build.query<
			ConversationWithMessage[],
			null
		>({
			query: () => `/conversation/messages`
		}),
		removeConversation: build.query({
			query: id => ({
				url: `/conversation/${id}`,
				method: 'DELETE'
			})
		})
	})
	// overrideExisting: false,
})
