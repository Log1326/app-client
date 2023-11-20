import { SkeletonContactList } from '@components/Skeleton'
import { WrapperContacts } from '@components/wrapper'
import { HeaderContacts } from '@components/Header'
import { ContactListItem } from './ContactListItem'

export const ContactList = () => {
	return (
		<div className='min-w-[300px] border-x-[1px] border-neutral-400 relative'>
			<HeaderContacts title={'Contact list'} content={'Add new user'} />
			<WrapperContacts>
				<SkeletonContactList />
				<ContactListItem item={{} as any} />
			</WrapperContacts>
		</div>
	)
}
