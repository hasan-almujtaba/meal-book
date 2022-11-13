import MealDetail from '@/components/MealDetail'
import DefaultLayout from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/types/layout'
import Head from 'next/head'
import { useRouter } from 'next/router'

const MealDetailPage: NextPageWithLayout = () => {
  const { query } = useRouter()

  return (
    <>
      <Head>
        <title>{query.slug}</title>
      </Head>
      <MealDetail />
    </>
  )
}

MealDetailPage.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default MealDetailPage
