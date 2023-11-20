import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IToasterStore, IToastMessage } from '@store/toastStore/toast.types'

const initialState: IToasterStore = {
	messages: []
}
export const toastSlice = createSlice({
	initialState,
	name: 'toastSlice',
	reducers: {
		addToast: (state, action: PayloadAction<IToastMessage>) => {
			action.payload.id = new Date().getMilliseconds()
			state.messages = [...state.messages, action.payload]
		},
		removeToast: (state, action: PayloadAction<number>) => {
			state.messages = state.messages.filter(item => item.id !== action.payload)
		},
		clearToasters: state => {
			state.messages = []
		}
	}
})
