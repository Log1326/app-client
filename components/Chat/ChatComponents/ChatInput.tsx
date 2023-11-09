'use client'

import { InputMessage } from '@components/Input'

interface ChatInputProps {}
export const ChatInput: React.FC<ChatInputProps> = props => {
	const {} = props
	return (
		<div className='w-full px-4'>
			<InputMessage />
		</div>
	)
}
