import {
  Box,
  GridItem,
  Heading,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'

interface Props {
  title: string
  thumbnail: string
}

const CategoryItem = ({ title, thumbnail }: Props) => {
  const cardBg = useColorModeValue('red.500', 'red.200')

  return (
    <LinkBox role="group">
      <GridItem w="full">
        <Box
          bg={cardBg}
          textAlign="center"
          rounded="xl"
          overflow="hidden"
        >
          <Image
            alt={title}
            src={thumbnail}
            width="250"
            height="250"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </Box>
        <LinkOverlay
          href={`/category/${title}`}
          transition="color 0.15s ease"
          _groupHover={{
            color: 'red.500',
          }}
        >
          <Heading
            mt="2"
            as="h3"
            fontSize="xl"
            textAlign="center"
          >
            {title}
          </Heading>
        </LinkOverlay>
      </GridItem>
    </LinkBox>
  )
}

export default CategoryItem
