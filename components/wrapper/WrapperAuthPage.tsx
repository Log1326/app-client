'use client'
import { Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'

export const WrapperAuthPage = ({
	children,
	isMount,
	setIsMount
}: {
	children: React.ReactNode
	isMount: boolean
	setIsMount: (value: boolean) => void
}) => {
	useEffect(() => {
		if (!isMount) {
			setTimeout(() => {
				setIsMount(true)
			}, 300)
		}
	}, [])
	return (
		<>
			<Transition
				appear
				show={isMount}
				as={Fragment}
				enter='transition linear duration-500 transform'
				enterFrom='-translate-x-[150px]'
				enterTo='translate-x-0'
				leave='ease-in duration-500'
				leaveFrom='opacity-100'
				leaveTo='opacity-0'
			>
				<div
					className='max-w-2xl min-w-xl relative
		flex flex-col justify-between items-center flex-wrap
		h-fit p-4 border-gray-400 border-2 bg-zinc-300 rounded-lg'
				>
					{children}
				</div>
			</Transition>
		</>
	)
}
