import { useFrame } from '@react-three/fiber'

import { Effects as EffectComposer, PerspectiveCamera } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'

import { extend } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { random } from 'maath'
import { MathUtils } from 'three'
import { useResetCamera } from '../utils'

extend({ UnrealBloomPass })

export default function Lines(props) {

  const n = 10
  const lines = Array.from({ length: 2 * n + 1 }, (_, i) => 10 * (i - n))
  return (
    <>
      <ambientLight intensity={0.5 * Math.PI} />

      <group>
        {lines.map((v, i) => {
          if (i % 3 == 0) return <Line color={'fuchsia'} pos={v} key={i} />
          else if (i % 3 == 2) return <Line color={'yellow'} pos={v} key={i} />
          else return <Line color={'cyan'} pos={v} key={i} />
        })}
      </group>
      <EffectComposer disableGammaPass>
        <unrealBloomPass strength={3} radius={1} threshold={0.1} />
      </EffectComposer>
      <PerspectiveCamera makeDefault/>
      <CameraRig />
    </>
  )
}
function Line({ color, pos }) {
  const ref = useRef()
  const intensity = useRef(2)
  const [flash] = useState(
    () =>
      new random.FlashGen({
        count: MathUtils.randInt(5, 10),
        minInterval: 1000,
        maxInterval: 2000,
        minDuration: 400,
        maxDuration: 1000,
      }),
  )

  useFrame((state, delta) => {
    const impulse = flash.update(state.clock.elapsedTime, delta)
    intensity.current = impulse * 1
    if (ref.current) {
      ref.current.material.emissiveIntensity = intensity.current
    }
  })

  return (
    <>
      <mesh ref={ref} rotation-y={Math.PI / 2} position={[pos, 0, -100]}>
        <cylinderGeometry args={[0.5, 0.5, 50, 32, 15]} />
        <meshStandardMaterial emissive={color} color={'black'} emissiveIntensity={2} toneMapped={false} />
      </mesh>
    </>
  )
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.lerp({ x: state.pointer.x * 20, y: 1.5 + state.pointer.y * 20, z: 100 }, 0.1)
  })
}
