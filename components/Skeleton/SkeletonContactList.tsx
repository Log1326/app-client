import { memo } from 'react'

export const SkeletonContactList = memo(() => {
	return (
		<div
			className={`max-w-md px-2 py-3 space-y-1 cursor-progress divide-y divide-gray-200 rounded
			 shadow animate-pulse`}
		>
			<div className='flex items-center justify-between'>
				<div className='w-14 h-14 rounded-full bg-gray-400'></div>
				<div>
					<div className='h-3 rounded-full bg-gray-400 w-16 mb-2.5'></div>
					<div className='w-28 h-2.5 rounded-full bg-gray-400'></div>
				</div>
				<div className='h-2.5 rounded-full bg-gray-400 w-12'></div>
			</div>
			<span className='sr-only'>Loading...</span>
		</div>
	)
})
