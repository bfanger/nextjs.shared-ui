import { DefaultTheme } from 'styled-components'
import baseTheme from './base'

const mainTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    primary: '#00A6FB',
    secondary: '#006494',
    highlight: '#fff',
    lowlight: '#051923',
  },
}

export default mainTheme
