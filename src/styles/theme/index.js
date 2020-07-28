import { Buttons as buttons } from './buttons'
import { Forms as forms } from './forms'
import { Texts as text } from './text'
import { Styles as styles } from './styles'
import { Variants as variants } from './variants'
import colors from './colors'

export default {
  breakpoints: ['40em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 26, 32, 44, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    regular:300
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  sizes: {
    small: 450,
    medium: 550,
    large: 818,
    max: '100%'
  },
  radii: {
    default: 4,
    circle: 9999
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },
  colors,
  buttons,
  forms,
  text,
  variants,
  styles
}