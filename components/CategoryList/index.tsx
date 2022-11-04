import { Box, Heading } from '@chakra-ui/react'
import { useGetMealCategories } from 'hooks/fetch'
import CardGroup from '../CardGroup'
import CardGroupSkeleton from '../CardGroupSkeleton'
import CardItem from '../CardItem'

const CategoryList = () => {
  /**
   * React query hooks
   */
  const { data, status } = useGetMealCategories()

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
            id={item.idCategory}
            identifier="title"
            link="category"
            title={item.strCategory}
            thumbnail={item.strCategoryThumb}
            key={index}
          />
        ))}
      </CardGroup>
    ),
  }

  return (
    <Box py="20">
      <Heading textAlign="center">Meal Categories</Heading>
      {content[status]}
    </Box>
  )
}

export default CategoryList
