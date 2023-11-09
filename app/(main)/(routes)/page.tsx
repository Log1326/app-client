import { ChatBanner } from '@components/Chat'
import { ContactList } from '@components/ContactList'

export default function Home() {
	return (
		<>
			<ContactList />
			<ChatBanner />
		</>
	)
}
