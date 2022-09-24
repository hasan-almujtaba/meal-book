import { Box, GridItem, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { ColorContext } from 'contexts/ColorContext'
import Image from 'next/image'
import NextLink from 'next/link'
import { useContext } from 'react'

interface Props {
  title: string
  thumbnail: string
  link: string
  id: string
  identifier: string
}

const CardItem = ({ title, thumbnail, link, id, identifier }: Props) => {
  const color = useContext(ColorContext)

  return (
    <LinkBox role="group">
      <GridItem w="full">
        <Box
          bg={color}
          textAlign="center"
          rounded="xl"
          overflow="hidden"
        >
          <Image
            alt={`${title} ${id}`}
            src={thumbnail}
            width="250"
            height="250"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </Box>
        <NextLink
          href={`/${link}/${eval(identifier)}`}
          passHref
        >
          <LinkOverlay
            transition="color 0.15s ease"
            _groupHover={{
              color,
            }}
          >
            <Heading
              mt="2"
              as="h3"
              fontSize="xl"
              textAlign="center"
              noOfLines={1}
            >
              {title}
            </Heading>
          </LinkOverlay>
        </NextLink>
      </GridItem>
    </LinkBox>
  )
}

export default CardItem
