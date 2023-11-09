'use client'

import { AvatarContact } from '@components/Avatar/AvatarContact'
import Link from 'next/link'

type ContactUser = {
	fullName: string
	id: string
	image: string
	message: ''
	time: ''
	online?: boolean
}
interface ContactListItemProps {
	item: ContactUser
}
export const ContactListItem: React.FC<ContactListItemProps> = ({ item }) => {
	const {
		id,
		message = 'message',
		time = '20.02.2014',
		image,
		fullName = 'fullname',
		online = true
	} = item
	return (
		<Link href={`/conversation/${id}`}>
			<div className='p-1 cursor-pointer flex flex-row items-center justify-between gap-3 h-fit rounded-lg hover:bg-neutral-200'>
				<AvatarContact
					label={fullName || 'userName'}
					src={image || '/icon.jpg'}
					size='medium'
					online={online}
				/>
				<div className='flex flex-col items-start w-full'>
					<p className='text-xl capitalize'>{fullName}</p>
					<p className='text-sm text-zinc-500 text-ellipsis overflow-hidden w-[120px]'>
						{message}
						ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
					</p>
				</div>

				<p className='text-xs text-neutral-400'>{time}</p>
			</div>
		</Link>
	)
}
