import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const _api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
	endpoints: build => ({
		getProfile: build.query({
			query: () => ''
		})
	})
})
