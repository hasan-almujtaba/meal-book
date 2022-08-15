import axios from 'axios'
import {
  Meal,
  MealByCategory,
  MealByFilterParams,
  MealCategory,
} from 'types/meal'

interface MealResponse {
  data: {
    meals: Meal[]
  }
}

interface MealCategoriesResponse {
  data: {
    categories: MealCategory[]
  }
}

interface MealByFilterResponse {
  data: {
    meals: MealByCategory[]
  }
}

/**
 * Create a new instance of the axios client
 * @returns {AxiosInstance}
 */
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

/**
 * Get random meals
 * @returns API data or error
 */
export const getRandomMeal = async () => {
  try {
    const { data }: MealResponse = await instance.get('/random.php')

    return data.meals
  } catch (error) {
    return Promise.reject('Unexpected error')
  }
}

/**
 * Get meal categories
 * @returns API data or error
 */
export const getMealCategories = async () => {
  try {
    const { data }: MealCategoriesResponse = await instance.get(
      '/categories.php'
    )
    return data.categories
  } catch (error) {
    return Promise.reject('Unexpected error')
  }
}

/**
 * Get meal details by id
 * @param id meal id
 * @returns API data or error
 */
export const getMeal = async (id: string) => {
  try {
    const { data }: MealResponse = await instance.get(`/lookup.php?i=${id}`)

    return data.meals
  } catch (error) {
    return Promise.reject('Unexpected error')
  }
}

/**
 * Get meals by category
 * @param
 * @returns API data or error
 */
export const getMealByFilter = async ({
  filter,
  value,
}: MealByFilterParams) => {
  try {
    const { data }: MealByFilterResponse = await instance.get(
      `/filter.php?${filter}=${value}`
    )

    return data.meals
  } catch (error) {
    return Promise.reject('Unexpected error')
  }
}

export default instance
