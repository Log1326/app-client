import { TypeRootState } from '@store/store'

export const getToasters = (store: TypeRootState) =>
	store.toastStore.messages ?? []
