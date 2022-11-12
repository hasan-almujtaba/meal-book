import { useGetMealCategories } from 'hooks/fetch'
import Item from '../Item'
import SkeletonList from '../SkeletonList'

const CategoryList = () => {
  /**
   * React query hooks
   */
  const { data, status } = useGetMealCategories()

  /**
   * Content to render
   */
  const content = {
    loading: <SkeletonList />,
    success: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.map((item, index) => (
          <Item
            key={index}
            name={item.strCategory}
            link={`/category/${item.strCategory}`}
            image={item.strCategoryThumb}
          />
        ))}
      </div>
    ),
    error: null,
  }

  return (
    <div className="py-20">
      <h2 className="font-bold text-center text-3xl mb-5">Meal Categories</h2>
      {content[status]}
    </div>
  )
}

export default CategoryList
