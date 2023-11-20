import { Toast } from './Toast'
import { useSelector } from 'react-redux'
import { getToasters } from '@store/toastStore'
import { useActions } from '@hooks/useActions'

export const Toaster = () => {
	const toaster = useSelector(getToasters)
	const { removeToast } = useActions()
	return (
		<div className='relative z-40'>
			<div className='fixed bottom-10 right-10'>
				{toaster.length > 0 &&
					toaster.map(item => (
						<Toast key={item.id} toast={item} deleteToast={removeToast} />
					))}
			</div>
		</div>
	)
}
