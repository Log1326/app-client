export type StatusToaster = 'success' | 'reject' | 'info'

export interface IToastMessage {
	id?: number
	message: string
	status: StatusToaster
}

export interface IToasterStore {
	messages: IToastMessage[]
}
