import { useGetMealByFilter } from 'hooks/fetch'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiArrowLeft } from 'react-icons/hi'
import Button from '../Base/Button'
import Item from '../Item'
import SkeletonList from '../SkeletonList'

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
    value: query.slug as string,
  })

  /**
   * Content to render
   */
  const content = {
    loading: <SkeletonList />,
    error: null,
    success: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.map((item, index) => (
          <Item
            key={index}
            name={item.strMeal}
            link={`/meal/${item.idMeal}`}
            image={item.strMealThumb}
          />
        ))}
      </div>
    ),
  }

  return (
    <div className="py-20">
      <h1 className="text-center text-4xl font-bold mb-5">{query.category}</h1>

      {content[status]}

      <div className="text-center mt-5">
        <Link
          href="/"
          passHref
        >
          <Button
            as="a"
            leftIcon={<HiArrowLeft />}
          >
            Back to Categories
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default MealList
