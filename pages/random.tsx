import { NextPageWithLayout } from '@/types/layout'
import DefaultLayout from 'layouts/DefaultLayout'
import { ReactElement } from 'react'
import Head from 'next/head'
import MealDetail from '@/components/MealDetail'

const Random: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Random Meal</title>
      </Head>
      <MealDetail />
    </>
  )
}

Random.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Random
