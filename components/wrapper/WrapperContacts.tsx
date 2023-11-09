export const WrapperContacts = ({
	children
}: {
	children: React.ReactNode
}) => {
	return (
		<div className='flex flex-col px-2 gap-2 overflow-auto h-[94%] pr-2 overscroll-contain fixed -ml-[3px] min-w-[300px]'>
			{children}
		</div>
	)
}
