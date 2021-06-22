import { h } from 'preact'
import { render, fireEvent, waitFor, screen } from '@testing-library/preact'
import { Card } from './card'

it('Renders card correctly', () => {
  const { container } = render(
    <Card
      title="Foo"
      subTitle="bar"
      img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
    />
  )
  const elem = container.firstChild as HTMLDivElement
  expect(elem).toMatchSnapshot()
})

it('Toggles image on click', async () => {
  const { container } = render(
    <Card
      title="Foo"
      subTitle="bar"
      btnText={{ showImg: 'show', hideImg: 'hide' }}
      img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
    />
  )
  const elem = container.firstChild as HTMLDivElement
  fireEvent.click(screen.getByText('show'))
  expect(elem).toMatchSnapshot()
  await waitFor(() => {
    expect(elem.querySelectorAll('img')).toHaveLength(1)
    fireEvent.click(screen.getByText('hide'))
    expect(elem.querySelectorAll('img')).toHaveLength(0)
  })
})
