import styled from 'styled-components'
import { motion } from 'framer-motion'
import { space, color, typography, layout } from 'styled-system'
import StyledProps from '@react/props/StyledProps'

export const Paragraph = styled(motion.p) <StyledProps>`
  font-family: 'Primary';
  font-weight: ${props => props.theme.type === 'dark' ? 200 : 300};
  font-size: ${props => props.theme.fontSizes[0]};
  ${typography}
  ${space}
  ${color}
  ${layout}
`
