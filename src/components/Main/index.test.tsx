import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should be able to render heading', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()

    expect(
      screen.getByRole('heading', { name: /next.js boilerplate/i })
    ).toBeInTheDocument()
  })

  it('should be render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
