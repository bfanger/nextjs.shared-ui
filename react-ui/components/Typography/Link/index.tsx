import React from 'react'
import {
  Link,
} from './styled'
import StyledProps from '../../../props/StyledProps'

export interface Props {}

const A: React.FC<StyledProps> = ({ children, ...other }) => {
  return <Link children={children} {...other} />
}

export default A;
