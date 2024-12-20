import { Link } from 'wouter'

export default function Nav({ pages }) {
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        gap: '0.5rem',
        width: '100%',
        margin: 'auto',
        justifyContent: 'center',
        bottom: '0.5rem',
        fontSize: '2rem',
      }}>
      {Array.from({ length: pages.length }).map((v, i) => {
        return (
          <Link to={i + 1} key={i} style={{ textDecoration: 'none' }}>
            <div
              style={{
                aspectRatio: 16 / 9,
                background: 'black',
                color: 'white',
                width: '10rem',
                display: 'grid',
                border: '1px solid white',
              }}>
              <span style={{ placeSelf: 'center', fontFamily: 'monospace', fontStyle:'normal', fontSize:'1.25rem' }}>{i + 1}</span>{' '}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
