import { apiRtk } from '@store/rtk-api/rtk-api'
import { MessageBody, MessageResponse } from '@store/rtk-api/message/types'

export const messageRtkApi = apiRtk.injectEndpoints({
	endpoints: build => ({
		createMsg: build.mutation<MessageResponse, MessageBody>({
			query(body) {
				return { url: '/message', method: 'POST', body }
			}
		}),
		getMessageId: build.query<MessageResponse, string>({
			query: id => `/message/${id}`
		}),
		updateMessage: build.mutation({
			query(body) {
				return { url: `/message/${body.id}`, method: 'PATCH', body }
			}
		}),
		deleteMessage: build.query<string, string>({
			query: id => ({
				url: `/message/${id}`,
				method: 'DELETE'
			})
		})
	})
})
