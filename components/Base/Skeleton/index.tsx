import clsx from 'clsx'
import React from 'react'
import { SkeletonProps, SkeletonTextProps } from './type'

const Skeleton = (props: SkeletonProps) => {
  const {
    width = '100%',
    height = '20px',
    borderRadius = '0.5rem',
    className,
  } = props

  return (
    <div
      className={clsx(
        'bg-gray-600 animate-pulse',
        className ? className : null
      )}
      style={{ width, height, borderRadius }}
    ></div>
  )
}

const Text = (props: SkeletonTextProps) => {
  const {
    width = '100%',
    height = '20px',
    borderRadius = '0.5rem',
    className,
    noOfLines = 4,
    spacing = '6px',
  } = props

  const lastIndex = (index: number) => index === noOfLines - 1

  return (
    <div
      className="flex flex-col"
      style={{ gap: spacing }}
    >
      {[...Array(noOfLines)].map((_, index) => (
        <div
          key={index}
          className={clsx(
            'bg-gray-600 animate-pulse',
            className ? className : null
          )}
          style={{
            width: lastIndex(index) ? '80%' : width,
            height,
            borderRadius,
          }}
        ></div>
      ))}
    </div>
  )
}

Skeleton.Text = Text

export default Skeleton
