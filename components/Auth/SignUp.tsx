'use client'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { InputField } from '@components/Input'
import { Button } from '@components/Button'
import { Tooltip } from '@components/Tooltip'

import { GoogleBtn } from './googleBtn'
import { authService } from '@lib/api'
import { useActions } from '@hooks/useActions'

const phoneRegex = new RegExp(
	/^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/
)

const schema = z
	.object({
		email: z.string().email(),
		firstName: z.string(),
		lastName: z.string(),
		picture: z.string(),
		phone: z
			.string()
			.regex(phoneRegex, 'Phone is not correct, +972 or 05* *** ** **'),
		hashedPassword: z.string().min(6),
		confirm: z.string().min(6)
	})
	.refine(data => data.hashedPassword === data.confirm, {
		message: 'Password don`t match',
		path: ['confirm']
	})
export const SignUp = () => {
	const router = useRouter()
	const { addToast } = useActions()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isValid }
	} = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
			hashedPassword: '',
			confirm: '',
			picture: '',
			lastName: '',
			firstName: '',
			phone: ''
		},
		mode: 'onChange'
	})
	const onSubmit = handleSubmit(async (values: z.infer<typeof schema>) => {
		const result = await authService.register(values)
		reset()
		if (result?.status === 200) {
			addToast({
				status: 'success',
				message: 'You are success pass Registration'
			})
			router.push('/')
		}
	})

	return (
		<form
			onSubmit={onSubmit}
			className='flex flex-col items-start w-full gap-3 justify-around h-full'
		>
			<div className='w-[300px] space-y-5'>
				<InputField
					{...register('email')}
					label='Email address'
					errors={errors.email}
					type='email'
				/>
				<InputField
					{...register('firstName')}
					label='First name'
					errors={errors.firstName}
					type='text'
				/>
				<InputField
					{...register('lastName')}
					label='Last name'
					errors={errors.lastName}
					type='text'
				/>
				<InputField
					{...register('phone')}
					label='Phone number (+972 55 555 55 55)'
					errors={errors.phone}
					type='text'
				/>
				<InputField
					{...register('picture')}
					label='Picture'
					errors={errors.picture}
					type='file'
				/>
				<InputField
					{...register('hashedPassword')}
					errors={errors.hashedPassword}
					label='Password'
					type='password'
				/>
				<InputField
					{...register('confirm')}
					errors={errors.confirm}
					label='Confirm password'
					type='password'
				/>
			</div>
			<div className='w-full flex justify-end'>
				<Tooltip content='Register' side='right'>
					<Button
						disabled={!isValid}
						isLoading={isSubmitting}
						type='submit'
						className='text-xl disabled:no-underline underline'
					>
						Register
					</Button>
				</Tooltip>
			</div>
			<GoogleBtn />
		</form>
	)
}
