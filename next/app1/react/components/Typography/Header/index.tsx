import React from 'react'
import {
  H1, H2, H3, H4, H5, H6,
} from './styled'
import StyledProps from '@react/props/StyledProps'

export interface HeaderProps extends StyledProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
}

const H: React.FC<HeaderProps> = ({ variant, children, ...other }) => {
  switch (variant) {
    default:
    case 'h1':
      return <H1 children={children} {...other} />
    case 'h2':
      return <H2 children={children} {...other} />
    case 'h3':
      return <H3 children={children} {...other} />
    case 'h4':
      return <H4 children={children} {...other} />
    case 'h5':
      return <H5 children={children} {...other} />
    case 'h6':
      return <H6 children={children} {...other} />
  }
}

export default H;