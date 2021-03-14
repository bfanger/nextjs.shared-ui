import React from 'react'
import {
  Paragraph,
} from './styled'
import StyledProps from '@react/props/StyledProps'

export interface Props { }

const P: React.FC<StyledProps> = ({ children, ...other }) => {
  return <Paragraph children={children} {...other} />
}

export default P;
