type StorageType = 'token' | 'userId'
export const storageService = {
	setStorage(key: StorageType, item: string) {
		if (typeof window !== 'undefined') localStorage.setItem(key, item)
	},
	removeStorage(key: StorageType) {
		if (typeof window !== 'undefined') localStorage.removeItem(key)
	},
	getStorage(key: StorageType) {
		if (typeof window !== 'undefined') return localStorage.getItem(key)
	},
	clearLocalStorages() {
		if (typeof window !== 'undefined') localStorage.clear()
	}
}
