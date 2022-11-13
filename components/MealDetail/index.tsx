import { useRouter } from 'next/router'
import { useGetMeal, useGetRandomMeal } from '@/hooks/fetch'
import MealDetailData from '../MealDetailData'
import SkeletonDetail from '../SkeletonDetail'

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
  const meal = useGetMeal(slug, slug !== undefined)

  /**
   * Get random meal
   */
  const randomMeal = useGetRandomMeal()

  /**
   * Content to render
   */
  const content = {
    loading: <SkeletonDetail />,
    error: null,
    success: <MealDetailData meal={slug ? meal.data : randomMeal.data?.[0]} />,
  }

  return <div>{content[slug ? meal.status : randomMeal.status]}</div>
}

export default MealDetail
