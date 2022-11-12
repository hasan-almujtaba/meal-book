import { Meal } from '@/types/meal'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'
import Button from '../Base/Button'

interface Props {
  /**
   * Data of meal fetched from api
   */
  meal: Meal | undefined
}

const MealDetailData = ({ meal }: Props) => {
  return (
    <>
      <h1 className="text-center md:text-left mb-4 text-4xl font-bold">
        {meal?.strMeal}
      </h1>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-1/2 lg:w-[400px] rounded-xl overflow-hidden mb-5">
          <Image
            alt={meal?.strMeal}
            src={meal?.strMealThumb || ''}
            width="250"
            height="250"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>

        <div className="p-0 lg:p-5 flex-grow">
          <h2 className="text-3xl font-bold mb-3 text-center md:text-left">
            Ingredient
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
            {meal?.ingredients.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-3 text-center md:text-left">
          Instruction
        </h2>

        <div className="leading-relaxed">{meal?.strInstructions}</div>
      </div>

      <Link
        href={`/category/${meal?.strCategory}`}
        passHref
      >
        <Button
          className="my-5"
          as="a"
          leftIcon={<HiArrowLeft />}
        >
          {`See other ${meal?.strCategory}`}
        </Button>
      </Link>
    </>
  )
}

export default MealDetailData
