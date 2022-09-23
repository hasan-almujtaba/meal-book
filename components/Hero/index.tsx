import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <Box pt="20">
      <Box textAlign="center">
        <Image
          alt="Meal Book"
          src="/assets/abstract-fastfood.png"
          width="256"
          height="192"
        />
      </Box>
      <Heading
        as="h1"
        textAlign="center"
        fontWeight="bold"
      >
        Meal Book
      </Heading>
      <Text
        textAlign="center"
        letterSpacing="widest"
      >
        Over 200+ recipes from around the world
      </Text>

      <Box
        textAlign="center"
        mt="4"
      >
        <Link
          href="/random"
          passHref
        >
          <Button
            as="a"
            colorScheme="red"
          >
            Random Recipe
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default Hero
