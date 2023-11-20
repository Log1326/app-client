'use client'

import { apiRtk } from '@store/rtk-api/rtk-api'
import { AvatarContact } from '@components/Avatar'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useActions } from '@hooks/useActions'
import { InputField } from '@components/Input'
import { Tooltip } from '@components/Tooltip'
import { Button } from '@components/Button'

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = [
	'image/jpeg',
	'image/jpg',
	'image/png',
	'image/webp'
]

const schema = z.object({
	email: z.string().email(),
	firstName: z.string(),
	lastName: z.string(),
	picture: z
		.any()
		.refine(file => file?.size >= MAX_FILE_SIZE, `Max image size is 5MB.`)
		.refine(
			file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
			'Only .jpg, .jpeg, .png and .webp formats are supported.'
		)
})
export const Profile = () => {
	const { data, isLoading } = apiRtk.useGetProfileQuery(null)
	const { addToast } = useActions()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isValid },
		getValues
	} = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: data?.email ?? '',
			firstName: data?.firstName ?? '',
			lastName: data?.lastName ?? '',
			picture: data?.picture ?? ''
		},
		mode: 'onChange'
	})
	const onSubmit = handleSubmit(async (values: z.infer<typeof schema>) => {
		console.log(values)
		reset()
		addToast({ status: 'success', message: 'You are success change.' })
	})
	return (
		<div className='border-l-[2px] grow'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<AvatarContact
					size='extraLarge'
					src={getValues('picture') || '/icon.jpg'}
					className={'flex'}
				/>
				<form onSubmit={onSubmit} className='flex flex-col space-y-5 mt-10'>
					<div className='w-[300px] space-y-5'>
						<InputField
							{...register('email')}
							label='Email address'
							errors={errors.email}
							type='email'
						/>
						<InputField
							{...register('firstName')}
							errors={errors.firstName}
							label='First name'
							type='text'
						/>
						<InputField
							{...register('lastName')}
							errors={errors.lastName}
							label='Last name'
							type='text'
						/>
						<InputField
							{...register('picture')}
							// errors={errors.picture?.message}
							label='Picture'
							type='file'
						/>
					</div>
					<div className='flex justify-end w-full'>
						<Tooltip side='right' content='Button change'>
							<Button
								disabled={!isValid}
								isLoading={isSubmitting}
								type='submit'
								className='text-xl'
							>
								Change
							</Button>
						</Tooltip>
					</div>
				</form>
			</div>
		</div>
	)
}
