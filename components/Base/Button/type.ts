import { PolymorphicComponentPropWithRef } from '@/types/component'
import { ElementType, ReactElement, ReactNode } from 'react'

export type Variant = 'filled' | 'outlined'

export type ColorScheme = 'primary'

export type Props = {
  variant?: Variant
  colorScheme?: ColorScheme
  leftIcon?: ReactNode
}

export type Classes = {
  [key in Variant]: {
    [key in ColorScheme]: string
  }
}

export type ButtonProps<T extends ElementType> =
  PolymorphicComponentPropWithRef<T, Props>

export type ButtonComponent = <T extends ElementType = 'button'>(
  props: ButtonProps<T>
) => ReactElement | null
