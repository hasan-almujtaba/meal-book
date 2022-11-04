import { Box, SimpleGrid, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const MealDetailSkeleton = () => {
  return (
    <Box>
      <Skeleton
        height="43px"
        width={['full', '50%']}
        marginBottom="4"
      />

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
          <Skeleton height={['300px', '400px']} />
        </Box>

        <Box
          padding={[0, '5']}
          flexGrow="1"
        >
          <Skeleton
            marginBottom="3"
            width={['full', '50%']}
            height="36px"
          />

          <SimpleGrid
            columns={[1, 3]}
            spacing={[2, 5]}
          >
            {[...Array(16)].map((item, index) => (
              <Skeleton
                key={index}
                height="24px"
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <Box marginTop="10">
        <Skeleton
          marginBottom="3"
          width={['full', '50%']}
          height="36px"
        />

        <SkeletonText
          noOfLines={10}
          spacing="4"
        />
      </Box>

      <Skeleton
        height="40px"
        width="250px"
        maxWidth="100%"
        marginY="5"
      />
    </Box>
  )
}

export default MealDetailSkeleton
