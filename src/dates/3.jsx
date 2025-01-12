import { MeshDistortMaterial, PerspectiveCamera, Stage } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useMemo } from 'react'
import { dampE } from 'maath/easing'
import { MeshStandardMaterial, SphereGeometry } from 'three'

export default function _42(props) {
  const sg = useMemo(() => new SphereGeometry(), [])
  const msm = useMemo(() => new MeshStandardMaterial({ color: 'black', roughness: 0.1 }), [])

  useEffect(() => {
    return () => {
      sg.dispose()
      msm.dispose()
    }
  }, [])
  return (
    <>
      <Stage adjustCamera={false} preset={'rembrandt'}>
        <Face sg={sg} msm={msm} />
      </Stage>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
    </>
  )
}

function Face({ sg, msm }) {
  const ref = useRef()
  const eyes = useRef()
  useFrame((state, delta) => {
    dampE(ref.current.rotation, [-state.pointer.y, state.pointer.x, 0], 0.25, delta)
  })

  return (
    <group
      ref={ref}
      onPointerOver={() => {
        eyes.current.scale.set(0.1, 0.05, 0.1)
      }}
      onPointerLeave={() => {
        eyes.current.scale.set(0.1, 0.1, 0.1)
      }}>
      <mesh geometry={sg}>
        <MeshDistortMaterial distort={0.4} speed={2} />
      </mesh>
      <group ref={eyes} position={[0, 0.25, 1]} scale={0.1}>
        <mesh position={[-3, 0, 0]} geometry={sg} material={msm} />
        <mesh position={[3, 0, 0]} geometry={sg} material={msm} />
      </group>
    </group>
  )
}
