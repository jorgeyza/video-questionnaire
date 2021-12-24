import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from '@chakra-ui/react'

import { theme } from '../theme'

import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/700.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        alignItems='center'
        as='section'
        bgGradient='linear(116.82deg, #2F2C67 0%, #7D73C0 31.25%, #41329A 60.42%, #795CEE 100%)'
        flexDirection='column'
        justifyContent='center'
        minH='100vh'>
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
