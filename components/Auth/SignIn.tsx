'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { InputField } from '@components/Input'
import { Button } from '@components/Button'
import { Tooltip } from '@components/Tooltip'

const schema = z
	.object({
		email: z.string().email(),
		password: z.string().min(6),
		confirm: z.string().min(6)
	})
	.refine(data => data.password === data.confirm, {
		message: 'Password don`t match',
		path: ['confirm']
	})
export const SignIn = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isValid }
	} = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: { email: '', password: '', confirm: '' },
		mode: 'onChange'
	})
	const onSubmit = handleSubmit(async (values: z.infer<typeof schema>) => {
		reset()
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
					{...register('password')}
					errors={errors.password}
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
		</form>
	)
}
