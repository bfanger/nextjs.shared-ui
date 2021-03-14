import { MainCont } from './styled'
import StyledProps from '@react/props/StyledProps'

export interface ContainerProps extends StyledProps { }

const Container: React.FC<StyledProps> = ({ children, ...other }) => {
  return <MainCont {...other}>{children}</MainCont>
}

export default Container;