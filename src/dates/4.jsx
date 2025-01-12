import { Environment, MeshDistortMaterial, PerspectiveCamera, Torus } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { dampE } from 'maath/easing'

export default function Black(props) {
  const ref = useRef()
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()

  const { camera } = useThree()
  useEffect(() => {
    camera.lookAt(0, 0, 0)
  }, [camera])
  
  useFrame((state, delta) => {
    ref1.current.rotateZ(delta * 0.01)
    ref2.current.rotateZ(delta * 0.02)
    ref3.current.rotateZ(delta * 0.03)
    dampE(ref.current.rotation, [state.pointer.y / 10, state.pointer.x / 10, 0], 0.25, delta)
  })
  return (
    <>
      <group ref={ref}>
        <mesh position-z={0} ref={ref1}>
          <sphereGeometry/>
          <MeshDistortMaterial roughness={0} color={'#121212'} metalness={1} distort={0.5} />
        </mesh>
        <Torus scale={2.5} position-z={0} ref={ref2}>
          <MeshDistortMaterial roughness={0} color={'#121212'} metalness={1} distort={0.5} />
        </Torus>
        <Torus scale={4} position-z={1} ref={ref3}>
          <MeshDistortMaterial roughness={0} color={'#121212'} metalness={1} distort={0.5} />
        </Torus>
        <Environment
          preset="night"
          background
          backgroundBlurriness={0.9}
          backgroundIntensity={0.01}
          backgroundRotation={0.5}
        />
      </group>
      <PerspectiveCamera makeDefault position={[-Math.PI, 1, -Math.PI]} />
    </>
  )
}
