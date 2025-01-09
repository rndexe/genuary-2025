import { BakeShadows, Environment, OrbitControls } from '@react-three/drei'
import { OrthographicCamera } from '@react-three/drei'

export default function Landscape() {
  return (
    <>
      {/* <ambientLight intensity={0.1} /> */}
      {/* <hemisphereLight intensity={0.5}/> */}
      <Base />
      <group position={[-30, 11, -25]} rotation-y={Math.PI / 2}>
        <Mountain pos={[0, 0, 0]} scale={40} />
        <Mountain pos={[10, -3, 20]} scale={30} />
      </group>
      <group position={[2, 0, -2]}>
        <Lake pos={[0, 1.1, 0]} scale={20} />
        <Lake pos={[-10, 1.1, 20]} scale={15} />
      </group>

      <group position={[-20, 2, 0]}>
        <Tree pos={[-2, 0, -2]} scale={1} />
        <Tree pos={[-3, 0, 1]} scale={1} />
        <Tree pos={[1, 0, -1]} scale={1} />
        <Tree pos={[2, 0, 2]} scale={1} />
      </group>
      <group position={[-25, 2, 10]} rotation-y={1}>
        <Tree pos={[-2, 0, -2]} scale={1} />
        <Tree pos={[-3, 0, 1]} scale={1} />
        <Tree pos={[1, 0, -1]} scale={1} />
        <Tree pos={[2, 0, 2]} scale={1} />
      </group>

      <Sun />
      <OrthographicCamera makeDefault position={[50, 43.3, 50]} zoom={8} />
      <Environment preset="forest" />
      <BakeShadows />
      <OrbitControls
        makeDefault
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
    </>
  )
}

function Mountain({ pos, scale = 1 }) {
  return (
    <group position={pos} scale={scale}>
      <mesh scale={0.25} position-y={0.13} castShadow>
        <coneGeometry args={[1, 1, 8, 8, true]} />
        <meshStandardMaterial color={'#e2e8f0'} />
      </mesh>
      <mesh scale={0.5} castShadow>
        <coneGeometry args={[1, 1, 8, 8]} />
        <meshStandardMaterial color={'#7c2d12'} />
      </mesh>
    </group>
  )
}

function Lake({ pos, scale }) {
  return (
    <mesh rotation-x={-Math.PI / 2} position={pos} scale={scale}>
      <circleGeometry />
      <meshStandardMaterial color={'#1e3a8a'} />
    </mesh>
  )
}

function Tree({ pos, scale }) {
  return (
    <group position={pos} scale={scale}>
      <mesh position={[0, 5, 0]} scale={[1, 5, 1]} castShadow>
        <boxGeometry />
        <meshStandardMaterial color={'#84cc16'} />
      </mesh>
      <mesh rotation-y={-Math.PI / 2} position-y={1} scale={[0.3, 3, 0.3]} castShadow>
        <cylinderGeometry />
        <meshStandardMaterial color={'#78350f'} />
      </mesh>
    </group>
  )
}

function Base() {
  return (
    <group position-y={-500}>
      <mesh scale={[100, 1000, 100]}>
        <boxGeometry />
        <meshStandardMaterial color={'#1c1917'} />
      </mesh>
      <mesh scale={[100, 1, 100]} position-y={500 + 0.5} receiveShadow>
        <boxGeometry />
        <meshStandardMaterial color={'#1a2e05'} />
      </mesh>
    </group>
  )
}

function Sun() {
  return (
    <group position={[-50, 50, 50]}>
      <pointLight color={'#facc15'} castShadow intensity={4} decay={0} />
    </group>
  )
}
