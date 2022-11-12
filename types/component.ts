import { ComponentPropsWithRef, ElementType, PropsWithChildren } from 'react'

type AsProp<C extends ElementType> = {
  as?: C
}

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P)

export type PolymorphicRef<C extends ElementType> =
  React.ComponentPropsWithRef<C>['ref']

export type PolymorphicComponentProp<
  C extends ElementType,
  Props = Record<string, unknown>
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithRef<C>, PropsToOmit<C, Props>>

export type PolymorphicComponentPropWithRef<
  C extends ElementType,
  Props = Record<string, unknown>
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> }
