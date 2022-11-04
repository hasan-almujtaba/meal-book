import { Box, Button, Heading } from '@chakra-ui/react'
import { useGetMealByFilter } from 'hooks/fetch'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CardGroup from '../CardGroup'
import CardGroupSkeleton from '../CardGroupSkeleton'
import CardItem from '../CardItem'

const MealList = () => {
  /**
   * Get query from next router
   */
  const { query } = useRouter()

  /**
   * React query hooks
   */
  const { data, status } = useGetMealByFilter({
    filter: 'c',
    value: query.category as string,
  })

  /**
   * Content to render
   */
  const content = {
    loading: <CardGroupSkeleton />,
    error: null,
    success: (
      <CardGroup>
        {data?.map((item, index) => (
          <CardItem
            link="meal"
            title={item.strMeal}
            thumbnail={item.strMealThumb}
            id={item.idMeal}
            identifier="id"
            key={index}
          />
        ))}
      </CardGroup>
    ),
  }

  return (
    <Box py="20">
      <Heading
        textAlign="center"
        mb="3"
      >
        {query.category}
      </Heading>

      <Box textAlign="center">
        <Link
          href="/"
          passHref
        >
          <Button
            colorScheme="red"
            variant="link"
            as="a"
          >
            Back to Categories
          </Button>
        </Link>
      </Box>

      {content[status]}
    </Box>
  )
}

export default MealList
