'use client'
import { useState } from 'react'

import { HeaderChat } from '@components/Header'
import { Drawer } from '@components/Drawer'

import { ChatMessageBar } from './ChatComponents/ChatMessageBar'
import { ChatItem } from './ChatItem'

export const Chat = () => {
	const [open, setOpen] = useState(false)
	return (
		<section className='grow flex flex-col justify-between relative'>
			<Drawer
				isOpen={open}
				onClose={() => setOpen(false)}
				title='Menu conversation'
				description='list of friends'
			>
				<p>hello</p>
			</Drawer>
			<HeaderChat onOpen={() => setOpen(true)} />
			<ChatItem
				message={[
					{
						user: {
							fullName: 'Sergey',
							image:
								'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png'
						},
						message: 'hello',
						type: 'text',
						messageStatus: 'read',
						id: 1,
						receiverId: 1,
						senderId: 2,
						createdAt: '20.20.12',
						totalUnreadMessages: 1
					},
					{
						user: {
							fullName: 'Andrey',
							image:
								'https://cxl.com/wp-content/uploads/2016/03/samuel_hulick.jpg'
						},
						message:
							'Nice hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey hey ',
						type: 'text',
						messageStatus: 'sent',
						id: 2,
						receiverId: 2,
						senderId: 1,
						createdAt: '10.10.12',
						totalUnreadMessages: 0
					},
					{
						user: {
							fullName: 'Sergey',
							image:
								'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png'
						},
						message: 'how are you',
						type: 'text',
						messageStatus: 'read',
						id: 3,
						receiverId: 1,
						senderId: 2,
						createdAt: '20.20.12',
						totalUnreadMessages: 1
					},
					{
						user: {
							fullName: 'Andrey',
							image:
								'https://cxl.com/wp-content/uploads/2016/03/samuel_hulick.jpg'
						},
						message: 'What are hell?',
						type: 'text',
						messageStatus: 'sent',
						id: 4,
						receiverId: 2,
						senderId: 1,
						createdAt: '10.10.12',
						totalUnreadMessages: 0
					},
					{
						user: {
							fullName: 'Sergey',
							image:
								'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png'
						},
						message:
							'https://cxl.com/wp-content/uploads/2016/03/samuel_hulick.jpg',
						type: 'image',
						messageStatus: 'read',
						id: 5,
						receiverId: 1,
						senderId: 2,
						createdAt: '20.20.12',
						totalUnreadMessages: 1
					},
					{
						user: {
							fullName: 'Andrey',
							image:
								'https://cxl.com/wp-content/uploads/2016/03/samuel_hulick.jpg'
						},
						message: 'Fuck off bitch',
						type: 'text',
						messageStatus: 'delivered',
						id: 6,
						receiverId: 2,
						senderId: 1,
						createdAt: '10.10.12',
						totalUnreadMessages: 0
					},
					{
						user: {
							fullName: 'Sergey',
							image:
								'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png'
						},
						message: 'hello',
						type: 'text',
						messageStatus: 'read',
						id: 7,
						receiverId: 1,
						senderId: 2,
						createdAt: '20.20.12',
						totalUnreadMessages: 1
					},
					{
						user: {
							fullName: 'Andrey',
							image:
								'https://cxl.com/wp-content/uploads/2016/03/samuel_hulick.jpg'
						},
						message:
							'Nice ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
						type: 'text',
						messageStatus: 'sent',
						id: 8,
						receiverId: 2,
						senderId: 1,
						createdAt: '10.10.12',
						totalUnreadMessages: 0
					},
					{
						user: {
							fullName: 'Sergey',
							image:
								'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png'
						},
						message: 'how are you',
						type: 'text',
						messageStatus: 'read',
						id: 9,
						receiverId: 1,
						senderId: 2,
						createdAt: '20.20.12',
						totalUnreadMessages: 1
					},
					{
						user: {
							fullName: 'Andrey',
							image:
								'https://cxl.com/wp-content/uploads/2016/03/samuel_hulick.jpg'
						},
						message: 'What are hell?',
						type: 'text',
						messageStatus: 'sent',
						id: 10,
						receiverId: 2,
						senderId: 1,
						createdAt: '10.10.12',
						totalUnreadMessages: 0
					},
					{
						user: {
							fullName: 'Sergey',
							image:
								'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png'
						},
						message:
							'https://cxl.com/wp-content/uploads/2016/03/samuel_hulick.jpg',
						type: 'image',
						messageStatus: 'read',
						id: 11,
						receiverId: 1,
						senderId: 2,
						createdAt: '20.20.12',
						totalUnreadMessages: 1
					},
					{
						user: {
							fullName: 'Andrey',
							image:
								'https://cxl.com/wp-content/uploads/2016/03/samuel_hulick.jpg'
						},
						message: 'Fuck off bitch',
						type: 'text',
						messageStatus: 'delivered',
						id: 12,
						receiverId: 2,
						senderId: 1,
						createdAt: '10.10.12',
						totalUnreadMessages: 0
					}
				]}
			/>
			<ChatMessageBar />
		</section>
	)
}
