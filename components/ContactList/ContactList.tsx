'use client'
import { SkeletonContactList } from '@components/Skeleton'
import { WrapperContacts } from '@components/wrapper'
import { conversationRtkApi } from '@store/rtk-api/conversation/conversation-rtk.api'
import { HeaderContacts } from '@components/Header'
import { ContactListItem } from '@components/ContactList/ContactListItem'

export const ContactList = () => {
	const { data, isLoading } =
		conversationRtkApi.useGetAllConversationWithUsersQuery(null)
	return (
		<div className='min-w-[300px] border-x-[1px] border-neutral-400 relative'>
			<HeaderContacts title={'Contact list'} content={'Add new user'} />
			<WrapperContacts>
				{data?.map(users => (
					<div key={users.id}>
						{isLoading ? (
							<SkeletonContactList />
						) : (
							<>
								{users?.users.map(user => (
									<ContactListItem key={user.id} item={user} />
								))}
							</>
						)}
					</div>
				))}
			</WrapperContacts>
		</div>
	)
}
