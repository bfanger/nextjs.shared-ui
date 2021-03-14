import styled from 'styled-components'
import { motion } from 'framer-motion'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from '@react/props/StyledProps'

export const Link = styled(motion.a) <StyledProps>`
  font-family: 'Primary';
  font-weight: ${props => props.theme.type === 'dark' ? 200 : 300};
  font-size: ${props => props.theme.fontSizes[0]};
  color: ${props => props.theme.colors.primary};
  border-radius: 1rem;
  padding: 0 0.5rem;
  transition: 0.25s ease;
  display: inline-block;
  height: 100%;

  :active {
    color: ${props => props.theme.colors.lowlight};
    background-color: ${props => props.theme.colors.primary};
  }

  :link {
    color: ${props => props.theme.colors.primary};
  }

  :visited {
    color: ${props => props.theme.colors.primary};
  }

  :hover {
    color: ${props => props.theme.colors.lowlight};
    background-color: ${props => props.theme.colors.primary};
  }
  
  ${typography}
  ${space}
  ${color}
  ${layout}
`
