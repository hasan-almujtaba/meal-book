import { NextPageWithLayout } from '@/types/layout'
import DefaultLayout from 'layouts/DefaultLayout'
import { ReactElement } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getRandomMeal } from '../apis'
import { Meal } from '@/types/meal'
import MealDetail from '@/components/MealDetail'

interface Props {
  meal: Meal
}

const Random: NextPageWithLayout<Props> = ({ meal }) => {
  return (
    <>
      <Head>
        <title>{meal.strMeal}</title>
      </Head>
      <MealDetail mealId={meal.idMeal} />
    </>
  )
}

Random.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const meal = await getRandomMeal()

  return {
    props: {
      meal: meal[0],
    },
  }
}

export default Random
