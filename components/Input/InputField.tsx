'use client'
import { forwardRef, InputHTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { FieldError } from 'react-hook-form'

type inputVariant = 'basic' | 'primary' | 'secondary' | 'outline'
type inputType = 'password' | 'text' | 'email' | 'file'
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	variant?: inputVariant
	type?: inputType
	errors?: FieldError
	label?: string
}
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
	(props, ref) => {
		const {
			className,
			errors,
			label,
			variant = 'basic',
			type = 'text',
			...otherProps
		} = props
		const [openEye, setOpenEye] = useState(false)
		const inputVariant: Record<inputVariant, string> = {
			basic: 'text-zinc-800 hover:text-zinc-900',
			outline: 'outline-2 outline-teal-700 text-black hover:text-zinc-600',
			primary: 'bg-indigo-500 text-white hover:bg-indigo-500/90',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
		}
		return (
			<div className='relative z-0 w-full mb-6 group h-[40px]'>
				<input
					type={openEye ? 'text' : type}
					className={twMerge(
						`block py-1 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
						border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 
						focus:border-zinc-400 peer`,
						inputVariant[variant]
					)}
					placeholder=' '
					ref={ref}
					{...otherProps}
				/>
				<label
					className={`peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
					transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 
					peer-focus:text-black peer-placeholder-shown:scale-100 
					peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
				>
					{label}
				</label>
				{errors && (
					<p className='text-rose-400 mt-1 text-xs text-center'>
						{errors.message}
					</p>
				)}
				{type === 'password' && (
					<>
						{openEye ? (
							<AiOutlineEye
								onClick={() => setOpenEye(false)}
								className='h-6 w-6 absolute right-1 top-[15px] cursor-pointer'
							/>
						) : (
							<AiOutlineEyeInvisible
								onClick={() => setOpenEye(true)}
								className='h-6 w-6 absolute right-1 top-1 cursor-pointer'
							/>
						)}
					</>
				)}
			</div>
		)
	}
)
