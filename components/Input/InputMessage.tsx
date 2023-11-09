'use client'
interface InputMessageProps {}
export const InputMessage: React.FC<InputMessageProps> = props => {
	const {} = props
	return (
		<input
			type='text'
			className='outline-none w-full rounded-full bg-gray-200 px-4 py-2 text-neutral-600'
		/>
	)
}
