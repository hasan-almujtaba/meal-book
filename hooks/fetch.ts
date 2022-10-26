import { MealByFilterParams } from 'types/meal'
import { useQuery } from '@tanstack/react-query'
import {
  getMeal,
  getMealByFilter,
  getMealCategories,
  getRandomMeal,
} from '../apis'
import { useFormatter } from './formatter'

/**
 * Get meal categories
 * @returns list of meal categories
 */
export const useGetMealCategories = () => {
  return useQuery(['mealCategories'], () => getMealCategories())
}

/**
 * Get a random meal from the API
 * @returns collection of random meals with
 */
export const useGetRandomMeal = () => {
  const { meal: mealFormatter } = useFormatter()

  return useQuery(['randomMeal'], () => getRandomMeal(), {
    select: (data) => data.map((meal) => mealFormatter(meal)),
  })
}

/**
 * Get meal details by id
 * @param id meal id
 * @returns meal details
 */
export const useGetMeal = (id: string) => {
  const { meal: mealFormatter } = useFormatter()

  return useQuery(['meal', id], () => getMeal(id), {
    select: (data) => data.map((meal) => mealFormatter(meal))[0],
  })
}

/**
 * Get meals by filter
 * @param object filter params
 * @returns meals by filter
 */
export const useGetMealByFilter = ({ filter, value }: MealByFilterParams) => {
  return useQuery(['mealByFilter', { filter, value }], () =>
    getMealByFilter({ filter, value })
  )
}
