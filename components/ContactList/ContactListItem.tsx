'use client'

import { AvatarContact } from '@components/Avatar/AvatarContact'
import Link from 'next/link'
import { messageRtkApi } from '@store/rtk-api/message/message-rtk.api'
import { formatData } from '@lib/helpers'
import { LoadingElement } from '@components/Loading'

interface ContactListItemProps {
	item: UserProfile
}
export const ContactListItem: React.FC<ContactListItemProps> = ({ item }) => {
	const { id, picture, firstName, lastName, receiveMessagesId } = item
	const idLastMessage = receiveMessagesId?.at(-1)
	const { data, isLoading } = messageRtkApi.useGetMessageIdQuery(
		String(idLastMessage)
	)
	return (
		<Link href={`/conversation/${id}`}>
			<div className='p-1 cursor-pointer flex flex-row items-center justify-between gap-3 h-fit rounded-lg hover:bg-neutral-200'>
				<AvatarContact
					label={firstName || 'userName'}
					src={picture || '/icon.jpg'}
					size='medium'
					online={false}
				/>
				<div className='flex flex-col items-start w-full'>
					<p className='text-xl capitalize'>{`${firstName} ${lastName}`}</p>
					<div className='text-sm text-zinc-500 text-ellipsis overflow-hidden w-[120px]'>
						<LoadingElement
							isLoading={isLoading}
							content={String(data?.content)}
						/>
					</div>
				</div>
				<div className='text-xs text-neutral-400'>
					<LoadingElement
						isLoading={isLoading}
						content={formatData(String(data?.createdAt))}
					/>
				</div>
			</div>
		</Link>
	)
}
