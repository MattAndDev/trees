import { h } from 'preact'
import { render } from '@testing-library/preact'
import { Button } from './button'

it('Renders button correctly', () => {
  const { container } = render(<Button id="btn">Oh hi!</Button>)
  const elem = container.firstChild as HTMLButtonElement
  expect(elem).toMatchSnapshot()
  expect(elem.id).toEqual('btn')
  expect(elem.type).toEqual('button')
})

it('Renders loading button by default correctly', () => {
  const { container } = render(
    <Button isLoading id="btn">
      Oh hi!
    </Button>
  )
  const elem = container.firstChild as HTMLButtonElement
  expect(elem).toMatchSnapshot()
  expect(elem.querySelector('span')?.classList.contains('spinner')).toEqual(
    true
  )
})
