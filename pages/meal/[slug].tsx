import MealDetail from '@/components/MealDetail'
import DefaultLayout from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/types/layout'
import { useGetMeal } from 'hooks/fetch'
import Head from 'next/head'
import { useRouter } from 'next/router'

const MealDetailPage: NextPageWithLayout = () => {
  const router = useRouter()

  const { data, isSuccess } = useGetMeal(router.query.slug as string)

  if (isSuccess)
    return (
      <>
        <Head>
          <title>{data.strMeal}</title>
        </Head>
        <MealDetail meal={data} />
      </>
    )

  return null
}

MealDetailPage.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default MealDetailPage
