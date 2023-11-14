import { Success } from '@components/Success'

type Params = {
	searchParams: {
		token: string
		exist: boolean
	}
}
export default function SuccessPage({
	searchParams: { token, exist }
}: Params) {
	return <Success token={token} exist={exist} />
}
