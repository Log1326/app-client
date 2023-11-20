export function Wait(cb: () => void, ms: number) {
	setTimeout(() => cb(), ms)
}
