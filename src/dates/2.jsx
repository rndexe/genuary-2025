import { Instance, Instances, PerspectiveCamera, useTexture } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import { MathUtils } from 'three'
import { useFrame } from '@react-three/fiber'

export default function Layers(props) {
  return (
    <>
      <Mover />
      <CameraRig />
      <PerspectiveCamera makeDefault />
    </>
  )
}

function Mover() {
  const ref1 = useRef()
  const ref2 = useRef()

  const speed = 2,
    s = 10
  useFrame((state, delta) => {
    ref1.current.position.z += speed * delta
    ref2.current.position.z += speed * delta
    if (ref1.current.position.z > s) ref1.current.position.z = ref2.current.position.z - s
    if (ref2.current.position.z > s) ref2.current.position.z = ref1.current.position.z - s
  })
  return (
    <>
      <group ref={ref1}>
        <Clouds count={1000} />
      </group>
      <group ref={ref2}>
        <Clouds count={1000} />
      </group>
    </>
  )
}

function Clouds({ count }) {
  const texture = useTexture('./cloud10.png')

  const cloudsData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [MathUtils.randFloatSpread(10), MathUtils.randFloat(-4, 2), MathUtils.randFloat(-10, 10)],
      scale: Math.random() * Math.random() * 4,
      rotation: Math.random() * Math.PI,
    }))
  }, [count])

  useFrame((state, delta) => {})
  return (
    <Instances limit={count}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent depthWrite={false} depthTest={false} opacity={0.5} />
      {cloudsData.map((data, i) => (
        <Instance
          key={i}
          position={data.position}
          scale={[data.scale, data.scale, 1]}
          rotation={[0, 0, data.rotation]}
        />
      ))}
    </Instances>
  )
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.lerp({ x: state.pointer.x, y: 1.5 + state.pointer.y / 2, z: 8 }, 0.1)
  })
}
