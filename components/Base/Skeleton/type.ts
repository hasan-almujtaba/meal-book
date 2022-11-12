export type SkeletonProps = {
  width?: string | number
  height?: string | number
  borderRadius?: string | number
  className?: string
}

export type SkeletonTextProps = {
  noOfLines?: number
  spacing?: string | number
} & SkeletonProps
