import Image from 'next/image'
import Link from 'next/link'
import Button from '../Base/Button'

const Hero = () => {
  return (
    <div className="pt-20">
      <div className="text-center">
        <Image
          alt="Meal Book"
          src="/assets/abstract-fastfood.png"
          width="256"
          height="192"
        />
      </div>

      <h1 className="text-center font-bold text-4xl">Meal Book</h1>
      <p className="text-center tracking-widest">
        Over 200+ recipes from around the world
      </p>

      <div className="flex justify-center">
        <Link
          href="/random"
          passHref
        >
          <Button
            as="a"
            className="mt-4"
          >
            Random Recipe
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
