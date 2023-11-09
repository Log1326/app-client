import { AvatarContact } from '@components/Avatar/AvatarContact'
import { Icon } from '@components/Icon'
import { BsThreeDots } from 'react-icons/bs'

interface HeaderChatProps {
	onOpen?: () => void
}
export const HeaderChat: React.FC<HeaderChatProps> = ({ onOpen }) => {
	const handleClose = () => onOpen?.()
	return (
		<div className='h-header min-h-[60px] border-b-[1px] border-neutral-400 px-6 flex items-center justify-between shadow-lg shadow-gray-300'>
			<div className='flex flex-row gap-2'>
				<AvatarContact
					online={true}
					size='small'
					src={'/icon.jpg' || ''}
					className='w-12 h-12'
				/>
				<div className='flex flex-col items-start'>
					<p className='text-lg'>Username</p>
					<p className='text-xs text-gray-400'>status (active or not)</p>
				</div>
			</div>

			<Icon
				onClick={handleClose}
				Svg={BsThreeDots}
				className='h-7 w-7 fill-sky-500 cursor-pointer hover:fill-gray-300'
			/>
		</div>
	)
}
