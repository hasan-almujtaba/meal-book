import React from 'react'
import Skeleton from '../Base/Skeleton'

interface Props {
  number?: number
}

const SkeletonList = (props: Props) => {
  const { number = 12 } = props

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(number)].map((_, index) => (
        <div key={index}>
          <Skeleton
            height="294px"
            borderRadius="12px"
          />
          <Skeleton
            height="16px"
            className="mt-3"
            borderRadius="4px"
          />
        </div>
      ))}
    </div>
  )
}

export default SkeletonList
