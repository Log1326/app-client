import { Toaster } from '@components/Toater'

interface ToastProviderProps {
	children: React.ReactNode
}
export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
	return (
		<>
			{children}
			<Toaster />
		</>
	)
}
