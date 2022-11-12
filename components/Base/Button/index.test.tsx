import { render, screen } from '@testing-library/react'
import Button from '.'
import { classes } from './data'

describe('Button', () => {
  it('display correctly', () => {
    render(<Button>Button Text</Button>)

    expect(screen.getByText('Button Text')).toBeInTheDocument()
  })

  it('is polymorphic', () => {
    const { container: component } = render(<Button as="a">Button Text</Button>)
    const polymorphComponent = component.querySelector('a')

    expect(polymorphComponent).toBeInTheDocument()
  })

  it('render variant and color scheme correctly', () => {
    const { container: component } = render(
      <Button
        variant="filled"
        colorScheme="primary"
      >
        Button Text
      </Button>
    )

    const testClasses = classes.filled.primary

    expect(component.firstChild).toHaveClass(testClasses)
  })

  it('render left icon', () => {
    const leftIcon = <div data-testid="left-icon">Left Icon</div>

    const { getByTestId } = render(
      <Button leftIcon={leftIcon}>Button Text</Button>
    )

    expect(getByTestId('left-icon')).toBeInTheDocument()
  })
})
