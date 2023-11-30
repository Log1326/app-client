'use client'
import { Tooltip } from '@components/Tooltip'
import { Icon } from '@components/Icon'
import { FiUserPlus } from 'react-icons/fi'
import { useRef, useState } from 'react'
import { Modal } from '@components/modal'
import { Button } from '@components/Button'
import { InputField } from '@components/Input'
import { apiRtk } from '@store/rtk-api/rtk-api'
import { Avatar } from '@components/Avatar'

interface HeaderContactsProps {
	content: string
	title: string
	tooltipClassName?: string
}
export const HeaderContacts: React.FC<HeaderContactsProps> = ({
	content,
	title,
	tooltipClassName
}) => {
	const [findFn, { data }] = apiRtk.useFindUsersByEmailOrPhoneMutation()
	console.log(data)
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLInputElement | null>(null)
	const handleClick = () => setIsOpen(true)
	return (
		<>
			<div className='h-header flex items-center justify-between px-4 '>
				<p>{title}</p>
				<Tooltip content={content} side='bottom' className={tooltipClassName}>
					<Icon
						onClick={handleClick}
						Svg={FiUserPlus}
						className={`h-10 w-10 rounded-full p-1.5 border-2 border-neutral-500
						 hover:border-sky-500 hover:bg-sky-500 hover:stroke-amber-50 cursor-pointer`}
					/>
				</Tooltip>
			</div>
			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title={
					'You can add new people to your list conversation with email or phone number'
				}
			>
				<div className='flex flex-col items-end mt-10 gap-4 justify-center'>
					<InputField
						ref={ref}
						variant='secondary'
						label='Find other people with email or phone'
						placeholder='Find other people'
					/>
					<Button
						onClick={() => {
							if (ref.current?.value.trim()) {
								findFn({ email: ref.current?.value })
							}
						}}
						className='text-left'
						variant='primary'
					>
						Add
					</Button>
					{data?.map(item => (
						<div
							key={item.id}
							className='inline-flex gap-2 p-2 justify-around items-center hover:bg-neutral-200 hover:cursor-pointer w-full rounded-lg'
						>
							<Avatar
								tooltipSide='left'
								size='medium'
								label={item.phone}
								src={item.picture}
								href={`/conversation/${item.id}`}
							/>
							<div>{item.email}</div>
						</div>
					))}
				</div>
			</Modal>
		</>
	)
}
