import { userSlice } from '@store/userStore'
import { toastSlice } from '@store/toastStore'

export const rootActions = {
	...userSlice.actions,
	...toastSlice.actions
}
