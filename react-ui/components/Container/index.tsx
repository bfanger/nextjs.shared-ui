import * as React from 'react'
import { MainCont } from './styled'
import StyledProps from '../../props/StyledProps'

export interface ContainerProps extends StyledProps { }

const Container: React.FC<StyledProps> = ({ children, ...other }) => {
  return <MainCont {...other}>{children}</MainCont>
}

export default Container;