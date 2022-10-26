import { AppPropsWithLayout } from '../types/layout'
import { useState } from 'react'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'config/theme'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  /**
   * React Query Configuration
   */
  const [queryClient] = useState(() => new QueryClient())

  /**
   * Use the layout defined at the page level, if available
   * @see https://nextjs.org/docs/basic-features/layouts
   */
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
