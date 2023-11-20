import { IToastMessage, StatusToaster } from '@store/toastStore/toast.types'
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { IconType } from 'react-icons'
import { FaInfoCircle, FaRegCheckCircle } from 'react-icons/fa'
import { MdFmdBad } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Icon } from '@components/Icon'
import { twMerge } from 'tailwind-merge'
import { Transition } from '@headlessui/react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { Wait } from '@lib/helpers'

interface ToastProps {
	toast: IToastMessage
	deleteToast: ActionCreatorWithPayload<number>
}
export const Toast: React.FC<ToastProps> = ({ toast, deleteToast }) => {
	const [isShow, setIsShow] = useState(false)
	const StatusViewIcon: Record<StatusToaster, IconType> = useMemo(
		() => ({
			info: FaInfoCircle,
			success: FaRegCheckCircle,
			reject: MdFmdBad
		}),
		[toast.status]
	)
	const StyleIcon: Record<StatusToaster, string> = {
		info: 'fill-blue-600 stroke-blue-900',
		success: 'fill-green-600 stroke-green-900',
		reject: 'fill-rose-600 stroke-rose-900'
	}
	const IconView = StatusViewIcon[toast.status]
	useEffect(() => {
		if (toast) setIsShow(true)
	}, [toast])
	const handleRemoveToast = useCallback(() => {
		deleteToast(Number(toast.id))
		setIsShow(false)
	}, [toast.id])
	useEffect(() => {
		Wait(handleRemoveToast, 5000)
	}, [])
	return (
		<Transition
			show={isShow}
			as={Fragment}
			enter='transition linear duration-700 transform'
			enterFrom='translate-x-[350px]'
			enterTo='-translate-x-0'
			leave='transition linear duration-300 transform'
			leaveFrom='-translate-x-0'
			leaveTo='translate-x-[350px]'
		>
			<div className='flex relative gap-4 mt-2 justify-between items-center bg-white shadow-lg border-b border-neutral-400 py-6 px-10 w-full max-w-xs rounded-xl text-gray-500'>
				<div className='w-[150px] break-all'>{toast.message}</div>
				<IconView
					className={twMerge(
						'min-w-[25px] min-h-[25] w-[25px] h-[25px] rounded-full',
						StyleIcon[toast.status]
					)}
				/>
				<div className='absolute right-1 top-2'>
					<Icon
						onClick={handleRemoveToast}
						Svg={AiFillCloseCircle}
						className='h-7 w-7 cursor-pointer hover:fill-gray-400'
					/>
				</div>
			</div>
		</Transition>
	)
}
