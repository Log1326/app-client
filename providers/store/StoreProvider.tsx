'use client'
import { Provider } from 'react-redux'
import { store } from '@store/store'

const storeFn = store()

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
	return <Provider store={storeFn}>{children}</Provider>
}
