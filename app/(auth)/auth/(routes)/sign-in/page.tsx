'use client'
import { WrapperAuthPage } from '@components/wrapper'
import { SignIn } from '@components/Auth'
import { Icon } from '@components/Icon'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Tooltip } from '@components/Tooltip'
import Link from 'next/link'
import { useState } from 'react'

export default function pageSignIn() {
	const [isMount, setIsMount] = useState(false)
	return (
		<WrapperAuthPage isMount={isMount} setIsMount={setIsMount}>
			<div className='w-full absolute left-2 top-2'>
				<Tooltip
					className='mb-2'
					side='top'
					content={'go to Sign Up'}
					onClick={() => setIsMount(false)}
				>
					<Link href={'/auth/sign-up'}>
						<Icon
							Svg={BsFillArrowLeftCircleFill}
							className='h-7 w-7 fill-gray-600 cursor-pointer hover:fill-gray-500'
						/>
					</Link>
				</Tooltip>
			</div>
			<p className='text-center w-full my-5 h-fit text-lg text-black'>
				Sign In
			</p>
			<section className='grow'>
				<SignIn />
			</section>
		</WrapperAuthPage>
	)
}
