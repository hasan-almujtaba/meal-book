import { Box, IconButton, useColorMode } from '@chakra-ui/react'
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
      <Box
        fontSize={['lg', 'xl', '2xl']}
        fontWeight="bold"
      >
        Meal Book
      </Box>

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
