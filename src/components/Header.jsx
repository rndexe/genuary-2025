import { useLocation } from 'wouter'

export default function Header() {
  const [location] = useLocation()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        fontFamily: 'monospace',
        color: 'whitesmoke',
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        maxWidth: '16rem',
      }}>
      <h1
        style={{
          lineHeight: '1',
        }}>
        Jan {location.slice(1)}
      </h1>
      <h2 style={{ fontWeight: 'normal', fontSize: '1rem' }}>{prompts[location]}</h2>
    </div>
  )
}

const prompts = {
  '/1': 'Vertical or horizontal lines only.',
  '/2': 'Layers upon layers upon layers.',
  '/3': 'Exactly 42 lines of code.',
  '/4': 'Black on black.',
  '/5': 'Isometric Art - (No vanishing points).',
  '/6': 'Make a landscape using only primitive shapes.',
  '/7': 'Use software that is not intended to create art or images.',
  '/8': 'Draw one million of something.',
  '/9': 'The textile design patterns of public transport seating.',
  '/10': 'You can only use TAU in your code, no other number allowed.',
  '/11':
    'Impossible day - Try to do something that feels impossible for you to do. Maybe it is impossible. Maybe it’s too ambitious. Maybe it’s something you know nothing about how to accomplish.',
  '/12': 'Subdivision.',
  '/13': 'Triangles and nothing else.',
  '/14': 'Pure black and white. No gray.',
  '/15': 'Design a rug.',
  '/16': 'Generative palette.',
  '/17': 'What happens if pi=4?',
  '/18': 'What does wind look like?',
  '/19': 'Op Art.',
  '/20': 'Generative Architecture.',
  '/21': 'Create a collision detection system (no libraries allowed).',
  '/22': 'Gradients only.',
  '/23': 'Inspired by brutalism.',
  '/24': 'Geometric art - pick either a circle, rectangle, or triangle and use only that geometric shape.',
  '/25': 'One line that may or may not intersect itself.',
  '/26': 'Symmetry.',
  '/27': 'Make something interesting with no randomness or noise or trig',
  '/28': 'Infinite Scroll.',
  '/29': 'Grid-based graphic design.',
  '/30': 'Abstract map.',
  '/31': 'Pixel sorting.',
}
