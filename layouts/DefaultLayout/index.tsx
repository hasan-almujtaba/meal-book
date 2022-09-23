import Navbar from 'components/Navbar'
import { DefaultLayout } from 'types/layout'
import { Container } from '@chakra-ui/react'

const DefaultLayout = ({ children }: DefaultLayout) => {
  return (
    <Container maxW={['100%', '640px', '768px', '1024px', '1280px', '1536px']}>
      <Navbar />
      {children}
    </Container>
  )
}

export default DefaultLayout
