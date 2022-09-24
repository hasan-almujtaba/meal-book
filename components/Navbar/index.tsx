import { Box, IconButton, useColorMode } from '@chakra-ui/react'
import Link from 'next/link'
import { HiSun, HiMoon } from 'react-icons/hi'

const Navbar = () => {
  /**
   * @description Toggle the color mode of the application
   */
  const { toggleColorMode, colorMode } = useColorMode()
  const toggleIcon = colorMode === 'light' ? <HiMoon /> : <HiSun />

  return (
    <Box
      py="4"
      display="flex"
      justifyContent="space-between"
    >
      <Link
        href="/"
        passHref
      >
        <Box
          fontSize={['lg', 'xl', '2xl']}
          fontWeight="bold"
          as="a"
        >
          Meal Book
        </Box>
      </Link>

      <IconButton
        colorScheme="red"
        onClick={toggleColorMode}
        aria-label="toggle-dark-mode"
        icon={toggleIcon}
      />
    </Box>
  )
}

export default Navbar
