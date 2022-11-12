import React from 'react'
import Skeleton from '../Base/Skeleton'

const SkeletonDetail = () => {
  return (
    <div>
      <div className="w-full lg:w-1/2 mb-4">
        <Skeleton height="43px" />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-1/2 lg:w-[400px] mb-5">
          <Skeleton height="400px" />
        </div>

        <div className="flex-grow p-0 lg:p-5">
          <div className="w-full md:w-2/3 lg:w-1/2 mb-3">
            <Skeleton height="36px" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
            {[...Array(16)].map((item, index) => (
              <div
                key={index}
                className="h-3 lg:h-6"
              >
                <Skeleton height="100%" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 mb-3">
        <div className="w-full lg:w-1/2 mb-3">
          <Skeleton height="36px" />
        </div>

        <Skeleton.Text
          height="12px"
          noOfLines={10}
        />

        <div className="w-full lg:w-[250px] mt-5">
          <Skeleton height="40px" />
        </div>
      </div>
    </div>
  )
}

export default SkeletonDetail
