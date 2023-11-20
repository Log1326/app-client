'use client'
import { Provider } from 'react-redux'
import { store } from '@store/store'
import { ToastProvider } from '@/providers/toast'

const storeFn = store()
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={storeFn}>
			<ToastProvider>{children}</ToastProvider>
		</Provider>
	)
}
