import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Torus(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => (event.stopPropagation(), hover(true))}
        onPointerOut={(event) => hover(false)}>
        <torusGeometry />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'grey'} />
      </mesh>
    </>
  )
}
