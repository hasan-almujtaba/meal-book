import { render } from '@testing-library/react'
import Skeleton from '.'

describe('Skeleton', () => {
  it('display correctly', () => {
    const { container } = render(
      <Skeleton
        height={20}
        borderRadius={4}
      />
    )

    expect(container.firstChild).toHaveStyle({
      height: '20px',
      borderRadius: '4px',
    })
  })

  it('display text skeleton correctly', () => {
    const { container } = render(<Skeleton.Text noOfLines={10} />)

    expect(container.firstChild?.childNodes.length).toBe(10)
  })
})
