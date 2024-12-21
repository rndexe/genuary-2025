import { useLocation } from 'wouter'
import { useState, useEffect } from 'react'

export default function Header() {
  const [location] = useLocation()

  const dateText = useTypewriter(`Jan ${location.slice(1)}`, 0, 50)
  const description = useTypewriter(prompts[location], 500, 50)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(0.25rem, 0.0526rem + 0.7895vw, 1rem)',
        fontFamily: 'monospace',
        color: 'whitesmoke',
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        maxWidth: '24rem',
        zIndex: '1000',
        // maxWidth: '16rem',
      }}>
      <h1
        style={{
          fontSize: 'clamp(1.25rem, 1.0526rem + 0.7895vw, 2rem)',
          lineHeight: '1',
        }}>
        {dateText}
      </h1>
      <h2 style={{ fontWeight: 'normal', fontSize: '1rem' }}>{description}</h2>
    </div>
  )
}

const useTypewriter = (text, delay = 0, speed = 50) => {
  const [displayText, setDisplayText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    setStarted(false)
    setDisplayText('')

    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)
    return () => clearTimeout(startTimeout)
  }, [delay, text])

  useEffect(() => {
    if (!started) return

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substr(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, speed)

    return () => {
      clearInterval(typingInterval)
    }
  }, [text, speed, started])

  return displayText
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
  '/11': 'Impossible day - Try to do something that feels impossible for you to do.',
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
