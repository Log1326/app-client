'use client'
import { Icon } from '@components/Icon'

import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import { ChatChooseImg } from './ChatChooseImg'
import { ChatInput } from './ChatInput'

interface ChatInputProps {}
export const ChatMessageBar: React.FC<ChatInputProps> = props => {
	const {} = props
	return (
		<div className='h-footer min-h-[80px] flex flex-row items-center justify-between px-6 border-t-[1px] border-neutral-400 shadow-lg'>
			<ChatChooseImg />
			<ChatInput />
			<Icon
				onClick={() => alert('click right arrow')}
				Svg={BsFillArrowRightCircleFill}
				className='h-10 w-10 fill-sky-500 cursor-pointer hover:fill-gray-400 p-1 rounded-lg'
			/>
		</div>
	)
}
