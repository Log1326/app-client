'use client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose?: () => void
	title?: string
	children: React.ReactNode
}
export const Modal: React.FC<ModalProps> = props => {
	const { onClose, isOpen, title = 'Modal', children } = props
	const handleClose = () => onClose?.()
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-40' onClose={handleClose}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-black/50' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
								<Dialog.Title
									as='h4'
									className='text-lg font-medium leading-6 text-gray-900'
								>
									{title}
								</Dialog.Title>
								<div className='mt-2'>{children}</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}
