import React from 'react'
import {
  A,
} from './styled'
import StyledProps from '@react/props/StyledProps'

export interface Props {}

const Link: React.FC<StyledProps> = ({ children, ...other }) => {
  return <A children={children} {...other} />
}

export default Link;