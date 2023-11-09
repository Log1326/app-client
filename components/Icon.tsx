import { memo } from 'react'
import { IconBaseProps, IconType } from 'react-icons'

interface IconProps extends IconBaseProps {
	Svg: IconType
}
export const Icon = memo<IconProps>(props => {
	const { Svg, ...otherProps } = props
	return <Svg {...otherProps} />
})
