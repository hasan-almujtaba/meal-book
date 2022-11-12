import { PolymorphicRef } from '@/types/component'
import clsx from 'clsx'
import { ElementType, forwardRef } from 'react'
import { classes } from './data'
import { ButtonComponent, ButtonProps } from './type'

const Button: ButtonComponent = forwardRef(
  <T extends ElementType = 'button'>(
    props: ButtonProps<T>,
    ref: PolymorphicRef<T>
  ) => {
    const {
      as,
      children,
      variant = 'filled',
      colorScheme = 'primary',
      className,
      leftIcon,
      ...rest
    } = props

    const Component = as || 'button'

    const propsClasses = classes[variant][colorScheme]

    return (
      <Component
        ref={ref}
        {...rest}
        className={clsx(
          'inline-flex justify-center items-center font-medium text-sm px-5 py-2.5 transition-colors gap-x-2',
          propsClasses,
          className ? className : null
        )}
      >
        {leftIcon ? leftIcon : null}
        {children}
      </Component>
    )
  }
)

// @ts-expect-error: add component display name for debugging in devtool
Button.displayName = 'Button'

export default Button
