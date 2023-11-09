'use client'
import { Icon } from '@components/Icon'
import { AiFillPicture } from 'react-icons/ai'

interface ChatChooseImgProps {}
export const ChatChooseImg: React.FC<ChatChooseImgProps> = props => {
	const {} = props
	return (
		<>
			<label htmlFor='file-input'>
				<Icon
					Svg={AiFillPicture}
					className='h-10 w-10 fill-sky-500 cursor-pointer hover:fill-gray-400 p-1 rounded-lg'
				/>
			</label>
			<input type='file' id='file-input' className='hidden w-0 h-0' />
		</>
	)
}
