import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

export const GoogleBtn = () => {
	return (
		<div className='border-t w-full my-2 border-neutral-500'>
			<div className='mt-4 pt-2 text-center'>
				<button className='flex w-full justify-center items-center '>
					<Link href={'http://localhost:4200/api/auth/google'}>
						<p className='rounded-full border border-sky-100 bg-neutral-400 px-3 py-1 text-2xl text-white flex items-center gap-2'>
							Google
							<FcGoogle />
						</p>
					</Link>
				</button>
			</div>
		</div>
	)
}
