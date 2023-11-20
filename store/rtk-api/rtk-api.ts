import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError
} from '@reduxjs/toolkit/query/react'
import { authService, baseUrl, RoutePathAuth } from '@lib/api'
import { storageService } from '@lib/storageService'

const baseQuery = fetchBaseQuery({
	baseUrl,
	credentials: 'include',
	prepareHeaders: headers => {
		const accessToken = storageService.getStorage('token')
		if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`)
		return headers
	}
})
const baseQueryWithRedux: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions)
	if (result.error?.status === 401) {
		const getUpdateTokens = await baseQuery(
			{
				url: RoutePathAuth.REFRESH_TOKEN,
				method: 'GET',
				credentials: 'include'
			},
			api,
			extraOptions
		)
		if (getUpdateTokens.data) {
			const token = getUpdateTokens.data as { accessToken: string }
			storageService.setStorage('token', token.accessToken)
			result = await baseQuery(args, api, extraOptions)
		} else await authService.logout()
	}
	return result
}
export const apiRtk = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithRedux,
	endpoints: build => ({
		getProfile: build.query<UserProfile, null>({
			query: () => '/user/profile'
		})
	})
})
