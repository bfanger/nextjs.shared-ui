import { DefaultTheme } from 'styled-components'
import baseTheme from './base'

const mainTheme: DefaultTheme = {
  ...baseTheme,
  colors: {
    primary: '#B86F52',
    secondary: '#634133',
    highlight: '#fff',
    lowlight: '#231C07',
  },
}

export default mainTheme
