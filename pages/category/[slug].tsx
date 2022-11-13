import MealList from '@/components/MealList'
import DefaultLayout from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/types/layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const Category: NextPageWithLayout = () => {
  const { query } = useRouter()

  return (
    <>
      <Head>
        <title>{query.slug}</title>
      </Head>
      <MealList />
    </>
  )
}

Category.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Category
