import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Sphere(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.position.y = 0.5 * Math.sin(state.clock.getElapsedTime())
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <sphereGeometry />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'green'} />
    </mesh>
  )
}
