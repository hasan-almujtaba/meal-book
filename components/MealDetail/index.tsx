import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useGetMeal } from '@/hooks/fetch'
import MealDetailSkeleton from '../MealDetailSkeleton'
import MealDetailData from '../MealDetailData'

const MealDetail = () => {
  /**
   * Next router hooks
   */
  const router = useRouter()

  /**
   * Get slug from router
   */
  const slug = router.query.slug as string

  /**
   * React query hook
   * Get meal detail based on active slug
   */
  const { data, status } = useGetMeal(slug)

  /**
   * Content to render
   */
  const content = {
    loading: <MealDetailSkeleton />,
    error: null,
    success: <MealDetailData meal={data} />,
  }

  return <Box>{content[status]}</Box>
}

export default MealDetail
