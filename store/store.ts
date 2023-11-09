import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { _api } from '@store/rtk-api/rtk-api'
import { userSlice } from '@store/userStore'

const rootReducer = combineReducers({
	[_api.reducerPath]: _api.reducer,
	userSlice: userSlice.reducer
})
export const store = (initialState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
		devTools: process.env.MODE_DEVELOP !== 'production'
	})
}
export type TypeRootState = ReturnType<typeof rootReducer>
