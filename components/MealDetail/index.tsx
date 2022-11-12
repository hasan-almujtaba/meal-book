import { useRouter } from 'next/router'
import { useGetMeal } from '@/hooks/fetch'
import MealDetailData from '../MealDetailData'
import SkeletonDetail from '../SkeletonDetail'

interface Props {
  mealId?: string
}

const MealDetail = ({ mealId }: Props) => {
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
  const { data, status } = useGetMeal(slug ?? mealId)

  /**
   * Content to render
   */
  const content = {
    loading: <SkeletonDetail />,
    error: null,
    success: <MealDetailData meal={data} />,
  }

  return <div>{content[status]}</div>
}

export default MealDetail
