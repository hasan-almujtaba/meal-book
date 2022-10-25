import { Box, Button, Heading, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Meal } from 'types/meal'
import { HiArrowLeft } from 'react-icons/hi'

interface Props {
  meal: Meal
}

const MealDetail = ({ meal }: Props) => {
  return (
    <Box>
      <Heading
        textAlign={['center', 'left']}
        marginBottom="4"
      >
        {meal.strMeal}
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
            alt={meal.strMeal}
            src={meal.strMealThumb}
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
            {meal.ingredients.map((item, index) => (
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

        <Box lineHeight="tall">{meal.strInstructions}</Box>
      </Box>

      <Link
        href={`/category/${meal.strCategory}`}
        passHref
      >
        <Button
          colorScheme="red"
          as="a"
          marginY="5"
          leftIcon={<HiArrowLeft />}
        >
          Back to {meal.strCategory} Meal List
        </Button>
      </Link>
    </Box>
  )
}

export default MealDetail
