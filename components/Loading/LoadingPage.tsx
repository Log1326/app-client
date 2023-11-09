import { AiOutlineLoading } from 'react-icons/ai'

export const LoadingPage = () => {
	return (
		<div className='h-screen w-screen grid place-content-center gap-4 text-3xl text-zinc-400'>
			<div className='flex items-center gap-2'>
				<p>Loading</p>
				<AiOutlineLoading className='animate-spin' />
			</div>
		</div>
	)
}
