'use client'
import { useRouter } from 'next/navigation'

export const ErrorPage = () => {
	const router = useRouter()
	const onClick = () => {
		router.refresh()
		router.push('/')
	}
	return (
		<div className='h-screen w-screen bg-white grid place-content-center gap-4 text-3xl text-zinc-600'>
			<p className='cursor-default'>Something went wrong...</p>
			<div className='flex items-center'>
				<p className='text-lg cursor-default'>You might restart this app!</p>
				<button
					onClick={onClick}
					className='text-xl text-zinc-700 ml-2 underline'
				>
					Restart
				</button>
				<p className='text-lg cursor-default ml-2'>Page</p>
			</div>
		</div>
	)
}
