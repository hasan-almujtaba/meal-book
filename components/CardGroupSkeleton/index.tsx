import React from 'react'
import { Grid, Box, Skeleton, SkeletonText } from '@chakra-ui/react'

const CardGroupSkeleton = () => {
  return (
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
  )
}

export default CardGroupSkeleton
