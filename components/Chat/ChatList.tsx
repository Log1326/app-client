'use client'
import { SkeletonContactList } from '@components/Skeleton'
import { WrapperContacts } from '@components/wrapper'
import { HeaderContacts } from '@components/Header'
import { ContactListItem } from '@components/ContactList/ContactListItem'
import { conversationRtkApi } from '@store/rtk-api/conversation/conversation-rtk.api'

export const ChatList = () => {
	const { data, isLoading } =
		conversationRtkApi.useGetAllConversationWithUsersQuery(null)
	return (
		<div className='min-w-[300px] border-x-[1px] border-neutral-400 shadow-lg shadow-gray-300 relative'>
			<HeaderContacts
				title={'Conversation list'}
				content={'Add new conversation'}
				tooltipClassName='left-1'
			/>
			<WrapperContacts>
				{data?.map(conversation => (
					<>
						{conversation.users.map(user => (
							<div key={user.id}>
								{isLoading ? (
									<SkeletonContactList />
								) : (
									<ContactListItem item={user} />
								)}
							</div>
						))}
					</>
				))}
			</WrapperContacts>
		</div>
	)
}
