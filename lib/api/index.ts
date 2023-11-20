import axios, { AxiosResponse } from 'axios'
import { storageService } from '@lib/storageService'

type RegisterType = {
	firstName: string
	lastName: string
	email: string
	hashedPassword: string
	picture: string
}
type ResponseType = {
	user: { email: string; id: string }
	accessToken: string
}
export enum RoutePathAuth {
	LOGIN = '/auth/login',
	REGISTER = '/auth/register',
	LOGOUT = '/auth/logout',
	REFRESH_TOKEN = '/auth/access-token'
}
export const baseUrl = process.env.API_URL
export const _axiosInstance = axios.create({
	baseURL: baseUrl,
	withCredentials: true
})
export const authService = {
	async login(
		values: Pick<RegisterType, 'email' | 'hashedPassword'>
	): Promise<AxiosResponse<ResponseType> | undefined> {
		try {
			const res = await _axiosInstance.post<
				string,
				AxiosResponse<ResponseType>
			>(RoutePathAuth.LOGIN, values)
			storageService.setStorage('token', res.data.accessToken)
			storageService.setStorage('userId', res.data.user.id)
			return res
		} catch (err) {
			console.log(err)
		}
	},
	async register(
		values: RegisterType
	): Promise<AxiosResponse<ResponseType> | undefined> {
		try {
			const res = await _axiosInstance.post<
				string,
				AxiosResponse<ResponseType>
			>(RoutePathAuth.REGISTER, { values })
			storageService.setStorage('token', res.data.accessToken)
			storageService.setStorage('userId', res.data.user.id)
			return res
		} catch (err) {
			console.log(err)
		}
	},
	async logout(): Promise<AxiosResponse | undefined> {
		try {
			storageService.clearLocalStorages()
			return _axiosInstance.get<string>(RoutePathAuth.LOGOUT)
		} catch (err) {
			console.log(err)
		}
	}
}
