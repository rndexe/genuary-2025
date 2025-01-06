import { Link } from 'wouter'

export default function Nav({ pages }) {
  return (
    <div
      style={{
        position: 'absolute',
        display: 'none',
        gap: '0.5rem',
        width: '100%',
        paddingInline: '0.5rem',
        bottom: '0.5rem',
        fontSize: '2rem',
        overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
      {Object.keys(pages).map((v, i) => {
        return (
          <Link to={parseInt(v) + 1} key={i} style={{ textDecoration: 'none' }}>
            <div
              style={{
                aspectRatio: 16 / 9,
                background: 'black',
                color: 'white',
                width: '10rem',
                display: 'grid',
                border: '1px solid white',
              }}>
              <span style={{ placeSelf: 'center', fontFamily: 'monospace', fontStyle: 'normal', fontSize: '1.25rem' }}>
                {parseInt(v) + 1}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
