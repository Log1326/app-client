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

const schema = z
	.object({
		email: z.string().email(),
		hashedPassword: z.string().min(6),
		confirm: z.string().min(6)
	})
	.refine(data => data.hashedPassword === data.confirm, {
		message: 'Password don`t match',
		path: ['confirm']
	})
export const SignIn = () => {
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
			confirm: ''
		},
		mode: 'onChange'
	})
	const onSubmit = handleSubmit(async (values: z.infer<typeof schema>) => {
		const result = await authService.login(values)
		reset()
		if (result?.status === 200) {
			addToast({ status: 'success', message: 'You are success authorized' })
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
			<div className='flex justify-end w-full'>
				<Tooltip content='Login'>
					<Button
						disabled={!isValid}
						isLoading={isSubmitting}
						type='submit'
						className='text-xl'
					>
						Login
					</Button>
				</Tooltip>
			</div>
			<GoogleBtn />
		</form>
	)
}
