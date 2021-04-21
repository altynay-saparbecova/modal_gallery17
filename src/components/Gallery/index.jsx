import { useLocation, Link } from 'react-router-dom'
import { Thumbnail } from '../Thumbnail'

export const IMAGES = [
  { id: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
  { id: 1, title: 'Lime Green', color: 'LimeGreen' },
  { id: 2, title: 'Tomato', color: 'Tomato' },
  { id: 3, title: 'Seven Ate Nine', color: '#789' },
  { id: 4, title: 'Crimson', color: 'Crimson' },
]

export function Gallery() {
  let location = useLocation()

  return (
    <div>
      {IMAGES.map((i) => (
        <Link
          key={i.id}
          to={{
            pathname: `/img/${i.id}`,
            state: { background: location },
          }}
        >
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))}
    </div>
  )
}
