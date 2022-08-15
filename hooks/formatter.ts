import { Meal } from 'types/meal'

export const useFormatter = () => {
  const meal = (meal: Meal) => {
    const formattedMeal: Meal = { ...meal, ingredients: [] }

    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        formattedMeal.ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        )
      }

      delete formattedMeal[`strIngredient${i}`]
      delete formattedMeal[`strMeasure${i}`]
    }

    return formattedMeal
  }

  return {
    meal,
  }
}
