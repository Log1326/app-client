'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { InputField } from '@components/Input'
import { Button } from '@components/Button'
import { Tooltip } from '@components/Tooltip'

const phoneRegex = new RegExp(
	/^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/
)

const schema = z
	.object({
		email: z.string().email(),
		fullname: z.string(),
		phone: z
			.string()
			.regex(phoneRegex, 'Phone is not correct, +972 or 05* *** ** **'),
		password: z.string().min(6),
		confirm: z.string().min(6)
	})
	.refine(data => data.password === data.confirm, {
		message: 'Password don`t match',
		path: ['confirm']
	})
export const SignUp = () => {
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
		console.log(values)
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
					{...register('fullname')}
					label='Full name'
					errors={errors.fullname}
					type='text'
				/>
				<InputField
					{...register('phone')}
					label='Phone number (+972 55 555 55 55)'
					errors={errors.phone}
					type='text'
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
			<div className='w-full flex justify-end'>
				<Tooltip content='Register' side='left'>
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
		</form>
	)
}
