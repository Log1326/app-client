'use client'
import { AiOutlineLoading } from 'react-icons/ai'

interface LoadingElementProps {
	isLoading?: boolean
	classname?: string
	content?: string
}
export const LoadingElement: React.FC<LoadingElementProps> = props => {
	const { isLoading, content, classname } = props
	return (
		<div>
			{isLoading ? (
				<AiOutlineLoading className='animate-spin h-5 w-5' />
			) : (
				<div className={classname}>{content}</div>
			)}
		</div>
	)
}
