import { Environment, OrbitControls, Sphere, MeshDistortMaterial, Torus } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useMemo, useEffect } from 'react'
import { useResetCamera } from '../utils'
import { Vector3 } from 'three'

export default function Black(props) {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()

  useResetCamera(new Vector3(-Math.PI, 1, -Math.PI))
  useFrame((state, delta)=>{
    ref1.current.rotateZ(delta*0.01)
    ref2.current.rotateZ(delta*0.02)
    ref2.current.rotateZ(delta*0.03)
    // console.log(state.camera.position)
  })
  return (
    <>
      <Torus position-z={-1} ref={ref1}>
        <MeshDistortMaterial roughness={0} color={'#121212'} metalness={1} distort={0.5} />
      </Torus>
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
    </>
  )
}
