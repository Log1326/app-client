export const storageService = {
	setStorage(key: string, item: string) {
		if (typeof window !== 'undefined') localStorage.setItem(key, item)
	},
	removeStorage(key: string) {
		if (typeof window !== 'undefined') localStorage.removeItem(key)
	},
	getStorage(key: string) {
		if (typeof window !== 'undefined') localStorage.getItem(key)
	},
	clearLocalStorages() {
		if (typeof window !== 'undefined') localStorage.clear()
	}
}
