import { extendTheme, theme as baseTheme } from '@chakra-ui/react'

import { globalStyles as styles } from './styles'

export const theme = extendTheme({
  colors: {
    neutral: baseTheme.colors.gray[50],
    text: baseTheme.colors.gray[700]
  },
  fonts: {
    body: 'Open Sans',
    heading: 'Open Sans'
  },
  styles
})
