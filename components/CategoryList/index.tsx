import { Box, Grid, Heading, Skeleton, SkeletonText } from '@chakra-ui/react'
import { useGetMealCategories } from 'hooks/fetch'
import CategoryItem from '../CategoryItem'

const CategoryList = () => {
  const { data, isSuccess } = useGetMealCategories()

  if (isSuccess) {
    return (
      <Box py="20">
        <Heading textAlign="center">Meal Categories</Heading>
        <Grid
          mt="5"
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)',
          ]}
          gap={6}
        >
          {data.map((item, index) => (
            <CategoryItem
              title={item.strCategory}
              thumbnail={item.strCategoryThumb}
              key={index}
            />
          ))}
        </Grid>
      </Box>
    )
  }

  return (
    <Box py="20">
      <Heading textAlign="center">Meal Categories</Heading>
      <Grid
        mt="5"
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={6}
      >
        {[...Array(12)].map((_, index) => (
          <Box key={index}>
            <Skeleton
              height="270"
              rounded="xl"
            ></Skeleton>
            <SkeletonText
              skeletonHeight="4"
              noOfLines={1}
              mt="2"
            />
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default CategoryList
