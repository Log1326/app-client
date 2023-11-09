'use client'
import Image from 'next/image'
import img from '../../public/robot.gif'

export const ChatBanner = () => {
	return (
		<section className='grow grid place-content-center'>
			<Image
				src={img}
				alt={'image'}
				width={450}
				height={450}
				className='object-contain'
			/>
			<p className='text-3xl text-gray-600 text-center cursor-default select-none'>
				Welcome to this chat!
			</p>
			<p className='text-2xl text-gray-400 text-center cursor-default select-none'>
				Have a good time
			</p>
		</section>
	)
}
