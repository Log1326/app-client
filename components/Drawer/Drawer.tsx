'use client'
import { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'

import { Icon } from '@components/Icon'
import { AiFillCloseCircle } from 'react-icons/ai'

type DrawerProps = {
	title?: string
	description?: string
	children: React.ReactNode
	isOpen: boolean
	onClose?: () => void
}

export const Drawer: React.FC<DrawerProps> = props => {
	const { isOpen, onClose, children, title, description } = props
	const handleClose = () => onClose?.()
	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog
				unmount={false}
				onClose={handleClose}
				className='fixed z-50 right-0 top-0 overflow-y-auto w-[350px]'
			>
				<div className='flex w-full h-screen'>
					<Transition.Child
						as={Fragment}
						enter='transition-opacity linear duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-50'
						leave='transition-opacity linear duration-300'
						leaveFrom='opacity-50'
						leaveTo='opacity-0'
					>
						<Dialog.Overlay className='z-40 w-screen h-screen fixed right-0 top-0 bg-black bg-opacity-50' />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter='transition linear duration-700 transform'
						enterFrom='translate-x-[350px]'
						enterTo='-translate-x-0'
						leave='transition linear duration-300 transform'
						leaveFrom='-translate-x-0'
						leaveTo='translate-x-[350px]'
					>
						<div className='z-50 flex flex-col justify-between bg-gray-100 w-full max-w-sm p-6 overflow-hidden shadow-xl'>
							<div className='absolute right-1 top-2'>
								<Icon
									onClick={handleClose}
									Svg={AiFillCloseCircle}
									className='h-7 w-7 cursor-pointer hover:fill-gray-400'
								/>
							</div>
							<div>
								<Dialog.Title className='font-bold text-2xl md:text-4xl'>
									{title}
								</Dialog.Title>
								<Dialog.Description>{description}</Dialog.Description>
								{children}
							</div>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	)
}
