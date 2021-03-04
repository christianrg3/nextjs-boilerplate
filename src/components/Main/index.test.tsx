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
})
