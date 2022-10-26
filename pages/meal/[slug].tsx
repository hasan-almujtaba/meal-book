import { getMeal } from '@/apis/index'
import MealDetail from '@/components/MealDetail'
import DefaultLayout from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/types/layout'
import { Meal } from '@/types/meal'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

interface Props {
  meal: Meal
}

const MealDetailPage: NextPageWithLayout<Props> = ({ meal }) => {
  return (
    <>
      <Head>
        <title>{meal.strMeal}</title>
      </Head>
      <MealDetail />
    </>
  )
}

MealDetailPage.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const mealId = params?.slug as string
  const meal = await getMeal(mealId)

  return {
    props: {
      meal: meal[0],
    },
  }
}

export default MealDetailPage
