'use client'
import { ButtonHTMLAttributes } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Icon } from '@components/Icon'
import { twMerge } from 'tailwind-merge'

type ButtonVariant = 'basic' | 'primary' | 'secondary' | 'outline'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	children: string
	variant?: ButtonVariant
	className?: string
}
export const Button: React.FC<ButtonProps> = props => {
	const {
		isLoading = false,
		children,
		variant = 'basic',
		className,
		...otherProps
	} = props
	const buttonVariant: Record<ButtonVariant, string> = {
		basic:
			'font-semibold text-black outline-none py-1 px-4 rounded-full active:opacity-80',
		outline:
			'outline-2 focus:ring-4 focus:outline-none focus:ring-indigo-300 text-black hover:text-zinc-600',
		primary:
			'bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 rounded-full py-1 px-5 text-white hover:bg-indigo-500/90',
		secondary:
			'bg-secondary rounded-full focus:ring-4 focus:outline-none focus:ring-gray-300 py-1 px-5 text-secondary-foreground hover:bg-secondary/80'
	}
	return (
		<div className='flex items-center'>
			<button
				className={twMerge(
					`font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
					disabled:opacity-50 disabled:cursor-default`,
					className,
					buttonVariant[variant]
				)}
				{...otherProps}
			>
				{children}
			</button>
			{isLoading && (
				<Icon
					Svg={AiOutlineLoading3Quarters}
					className='w-5 h-5 animate-spin'
				/>
			)}
		</div>
	)
}
