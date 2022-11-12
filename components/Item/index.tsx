import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  name: string
  link: string
  image: string
}

const Item = (props: Props) => {
  const { name, link, image } = props

  return (
    <Link
      href={link}
      passHref
    >
      <a className="group">
        <div>
          <div className="bg-red-600 dark:bg-red-400 rounded-xl overflow-hidden">
            <Image
              alt={name}
              src={image}
              width="250"
              height="250"
              layout="responsive"
              objectFit="contain"
              priority
            />
          </div>

          <h3 className="mt-2 text-xl text-center group-hover:text-red-600 dark:group-hover:text-red-400 font-semibold transition-colors dark:text-white line-clamp-1">
            {name}
          </h3>
        </div>
      </a>
    </Link>
  )
}

export default Item
