import { SkeletonContactList } from '@components/Skeleton'
import { WrapperContacts } from '@components/wrapper'
import { HeaderContacts } from '@components/Header'
import { ContactListItem } from '@components/ContactList/ContactListItem'

export const ChatList = () => {
	return (
		<div className='min-w-[300px] border-x-[1px] border-neutral-400 shadow-lg shadow-gray-300 relative'>
			<HeaderContacts
				title={'Conversation list'}
				content={'Add new conversation'}
				tooltipClassName='left-1'
			/>
			<WrapperContacts>
				<SkeletonContactList />
				<ContactListItem item={{} as any} />
			</WrapperContacts>
		</div>
	)
}
