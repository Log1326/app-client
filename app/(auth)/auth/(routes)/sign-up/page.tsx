'use client'
import { WrapperAuthPage } from '@components/wrapper'
import { SignUp } from '@components/Auth'
import { Icon } from '@components/Icon'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Tooltip } from '@components/Tooltip'
import { useState } from 'react'

export default function pageSignUp() {
	const [isMount, setIsMount] = useState(false)
	const handleClick = () => {
		window.location.href = '/auth/sign-in'
		setIsMount(false)
	}
	return (
		<WrapperAuthPage isMount={isMount} setIsMount={setIsMount}>
			<div className='w-full absolute left-2 top-2'>
				<Tooltip className='mb-2' content='go to Sign In' onClick={handleClick}>
					<Icon
						Svg={BsFillArrowLeftCircleFill}
						className='h-7 w-7 fill-gray-600 cursor-pointer hover:fill-gray-500'
					/>
				</Tooltip>
			</div>
			<p className='text-center w-full h-fit my-5 text-lg text-black'>
				Sign Up
			</p>
			<section className='grow'>
				<SignUp />
			</section>
		</WrapperAuthPage>
	)
}
