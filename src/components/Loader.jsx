import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function RotatingBox() {
  const ref = useRef()
  useFrame((s, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta
    ref.current.rotation.z += delta
  })

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial wireframe />
    </mesh>
  )
}

export default RotatingBox
