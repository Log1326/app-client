'use client'
import { Tooltip } from '@components/Tooltip'
import { Icon } from '@components/Icon'
import { FiUserPlus } from 'react-icons/fi'
import { useState } from 'react'
import { Modal } from '@components/modal'

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
	const [isOpen, setIsOpen] = useState(false)
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
				title={'Add other people'}
			>
				<p>hello</p>
				<p>This is modal</p>
			</Modal>
		</>
	)
}
