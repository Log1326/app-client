import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { apiRtk } from '@store/rtk-api/rtk-api'
import { userSlice } from '@store/userStore'
import { toastSlice } from '@store/toastStore'

const rootReducer = combineReducers({
	[apiRtk.reducerPath]: apiRtk.reducer,
	userSlice: userSlice.reducer,
	toastStore: toastSlice.reducer
})
export const store = (initialState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
		devTools: process.env.MODE_DEVELOP !== 'production',
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(apiRtk.middleware)
	})
}
export type TypeRootState = ReturnType<typeof rootReducer>
