import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useMemo } from 'react'
import { MathUtils } from 'three'

export default function Million() {
  return (
    <>
      <Particles count={1000000} />
      <PerspectiveCamera makeDefault position={[0, 0, 200]} />
      <OrbitControls/>
    </>
  )
}

function Particles({ count }) {
  const particlePositions = useMemo(() => {
    const particlePositions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      particlePositions[i3] = MathUtils.randFloatSpread(200)
      particlePositions[i3 + 1] = MathUtils.randFloatSpread(200)
      particlePositions[i3 + 2] = MathUtils.randFloatSpread(200)
    }

    return particlePositions
  }, [count])
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} itemSize={3} array={particlePositions} />
      </bufferGeometry>
      <pointsMaterial size={0.1} sizeAttenuation color={'white'} />
    </points>
  )
}
