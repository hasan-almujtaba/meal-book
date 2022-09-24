import { Box, Button, Heading } from '@chakra-ui/react'
import { ColorContext } from 'contexts/ColorContext'
import { useGetMealByFilter } from 'hooks/fetch'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import CardGroup from '../CardGroup'
import CardGroupSkeleton from '../CardGroupSkeleton'
import CardItem from '../CardItem'

const MealList = () => {
  const { query } = useRouter()
  const { data, isSuccess } = useGetMealByFilter({
    filter: 'c',
    value: query.category as string,
  })
  const color = useContext(ColorContext)

  let content = <CardGroupSkeleton />

  if (isSuccess)
    content = (
      <CardGroup>
        {data.map((item, index) => (
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
    )

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
            colorScheme={color.split('.')[0]}
            variant="link"
            as="a"
          >
            Back to Categories
          </Button>
        </Link>
      </Box>
      {content}
    </Box>
  )
}

export default MealList
