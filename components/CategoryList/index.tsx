import { Box, Heading } from '@chakra-ui/react'
import { useGetMealCategories } from 'hooks/fetch'
import CardGroup from '../CardGroup'
import CardGroupSkeleton from '../CardGroupSkeleton'
import CardItem from '../CardItem'

const CategoryList = () => {
  const { data, isLoading, isError } = useGetMealCategories()

  if (isLoading) return <CardGroupSkeleton />

  if (isError) return null

  return (
    <Box py="20">
      <Heading textAlign="center">Meal Categories</Heading>
      <CardGroup>
        {data.map((item, index) => (
          <CardItem
            id={item.idCategory}
            identifier="title"
            link="category"
            title={item.strCategory}
            thumbnail={item.strCategoryThumb}
            key={index}
          />
        ))}
      </CardGroup>
    </Box>
  )
}

export default CategoryList
