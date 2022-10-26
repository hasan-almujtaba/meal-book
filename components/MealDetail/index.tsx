import { Box, Button, Heading, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { useGetMeal } from '@/hooks/fetch'

const MealDetail = () => {
  const router = useRouter()
  const slug = router.query.slug as string
  const { data, isLoading, isError } = useGetMeal(slug)

  if (isLoading) return null

  if (isError) return null

  return (
    <Box>
      <Heading
        textAlign={['center', 'left']}
        marginBottom="4"
      >
        {data.strMeal}
      </Heading>

      <Box
        display={'flex'}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Box
          width={['full', '50%', 400]}
          rounded="xl"
          overflow="hidden"
          marginBottom={'5'}
        >
          <Image
            alt={data.strMeal}
            src={data.strMealThumb}
            width="250"
            height="250"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </Box>

        <Box
          padding={[0, '5']}
          flexGrow="1"
        >
          <Heading
            as={'h2'}
            size="lg"
            marginBottom="3"
            textAlign={['center', 'left']}
          >
            Ingredient
          </Heading>

          <SimpleGrid
            columns={[1, 3]}
            spacing={[2, 5]}
          >
            {data.ingredients.map((item, index) => (
              <Box key={index}>{item}</Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <Box marginTop="10">
        <Heading
          as={'h2'}
          size="lg"
          marginBottom="3"
          textAlign={['center', 'left']}
        >
          Instruction
        </Heading>

        <Box lineHeight="tall">{data.strInstructions}</Box>
      </Box>

      <Link
        href={`/category/${data.strCategory}`}
        passHref
      >
        <Button
          colorScheme="red"
          as="a"
          marginY="5"
          leftIcon={<HiArrowLeft />}
        >
          Back to {data.strCategory} Meal List
        </Button>
      </Link>
    </Box>
  )
}

export default MealDetail
