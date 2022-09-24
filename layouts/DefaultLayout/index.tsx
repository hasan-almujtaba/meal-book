import Navbar from 'components/Navbar'
import { DefaultLayout } from 'types/layout'
import { Container, useColorModeValue } from '@chakra-ui/react'
import { ColorContext } from 'contexts/ColorContext'

const DefaultLayout = ({ children }: DefaultLayout) => {
  const color = useColorModeValue('red.500', 'red.200')

  return (
    <ColorContext.Provider value={color}>
      <Container
        maxW={['100%', '640px', '768px', '1024px', '1280px', '1536px']}
      >
        <Navbar />
        {children}
      </Container>
    </ColorContext.Provider>
  )
}

export default DefaultLayout
