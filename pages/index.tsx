import { NextPageWithLayout } from '@/types/layout'
import DefaultLayout from 'layouts/DefaultLayout'
import { ReactElement } from 'react'
import Head from 'next/head'
import Hero from 'components/Hero'
import CategoryList from '@/components/CategoryList'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <CategoryList />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout>
      <Head>
        <title>Home</title>
      </Head>
      {page}
    </DefaultLayout>
  )
}
export default Home
