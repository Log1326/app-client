'use client'
import { usePathname, useRouter } from 'next/navigation'
import { apiRtk } from '@store/rtk-api/rtk-api'

interface AuthProviderProps {
	children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const { replace } = useRouter()
	const pathname = usePathname()
	const { data, isLoading, status, error } = apiRtk.useGetProfileQuery(null, {
		pollingInterval: 60000
	})
	// if ((data && pathname === '/auth/sign-in') || pathname === '/auth/sign-up')
	// 	replace('/')
	// if (isLoading && status === 'pending') return <LoadingPage />
	// if (error) {
	// 	storageService.clearLocalStorages()
	// 	replace('/auth/sign-in')
	// }
	return <>{children}</>
}
