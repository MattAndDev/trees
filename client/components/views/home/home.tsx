import { h, FunctionalComponent } from 'preact'
import { useTrees } from '@client/components/providers/trees'
import { Heading, Masonry } from '@client/components/atoms'
import { Card, CardLoading } from '@client/components/molecules'
import s from './home.css'

const placeHolderArray = new Array(4).fill(null)

export const Home: FunctionalComponent = () => {
  const { loading, trees } = useTrees()
  return (
    <div className={s.wrap}>
      <Heading level={1}>Trees 🌲🌳🌴</Heading>
      {!loading && (
        <Masonry>
          {trees.map(({ name, species_name, image }) => (
            <div key={name}>
              <Card title={name} subTitle={species_name} img={image}>
                {name}
              </Card>
            </div>
          ))}
        </Masonry>
      )}
      {loading && (
        <Masonry>
          {placeHolderArray.map((_, i) => (
            <div key={i}>
              <CardLoading key={i} />
            </div>
          ))}
        </Masonry>
      )}
    </div>
  )
}
