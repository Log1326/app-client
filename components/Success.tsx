'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { storageService } from '@lib/storageService'

interface SuccessProps {
	token: string
	exist: boolean
}
export const Success: React.FC<SuccessProps> = ({ token, exist }) => {
	const router = useRouter()
	useEffect(() => {
		storageService.setStorage('token', token)
		if (exist) router.replace('/')
		setTimeout(() => {
			router.replace('/')
		}, 3000)
	}, [])
	if (exist) return null
	return (
		<div>
			<p>You have successfully authenticated</p>
			<div>You will be redirected in few seconds</div>
		</div>
	)
}
