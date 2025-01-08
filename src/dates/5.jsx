// import WIP from '../components/WIP'

import { Addition, Base, Geometry, Subtraction } from '@react-three/csg'
import { OrbitControls, OrthographicCamera, Sphere } from '@react-three/drei'
import { BakeShadows, SoftShadows, Environment } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

const colorPallette = { dark: '#64748b', light: '#cbd5e1' }

export default function Isometric() {
  const light = useRef()
  useFrame((state, delta) => {
    light.current.intensity = Math.PI * (1 + Math.abs(Math.sin(2* state.clock.getElapsedTime())))
  })
  return (
    <>
      <ambientLight intensity={0.01} />
      <directionalLight castShadow position={[10, 10, -10]} intensity={Math.PI} color={'red'} />

      <Building position={[2, 0, -1.75]} />
      <Building position={[0, -0.5, 2]} />
      <Spire position={[3, -1.5, -1.5]} />
      <Spire position={[-1.5, -1.5, -0.5]} />
      <Spire position={[1.5, -2.5, 0]} scale={[0.5, 1, 0.5]} />
      <group position={[1.5, -1.3, 0]}>
        <Sphere scale={0.1}>
          <meshBasicMaterial color={'lightyellow'} />
        </Sphere>
        <pointLight castShadow ref={light} color={'orange'} decay={1} intensity={Math.PI} />
      </group>

      <Pathway />
      <MainBuilding />
      <Platform />

      <OrthographicCamera makeDefault zoom={100} position={[10, 10, 10]} />

      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        enableZoom={true}
        enablePan={false}
      />

      <Environment preset="city" environmentIntensity={0.2} />
    </>
  )
}

function Platform() {
  return (
    <group position={[2, -22.5, 4]}>
      <mesh scale={[5, 40, 4]}>
        <boxGeometry />
        <meshStandardMaterial color={colorPallette.light} />
      </mesh>
      <mesh scale={[5.2, 0.1, 4.2]} position-y={20}>
        <boxGeometry />
        <meshStandardMaterial color={colorPallette.dark} />
      </mesh>
    </group>
  )
}

function Pathway() {
  return (
    <>
      <mesh castShadow scale={[3, 40, 0.25]} position={[2.5, -21, -0.9]}>
        <boxGeometry />
        <meshStandardMaterial color={colorPallette.light} />
      </mesh>
      <mesh castShadow>
        <Geometry>
          <Base scale={[5, 40, 0.25]} position={[3.9, -21, 1.5]} rotation-y={Math.PI / 2}>
            <boxGeometry />
          </Base>
          <Subtraction scale={6} position={[4, 1.5, 3]} rotation-x={Math.PI / 6}>
            <boxGeometry />
          </Subtraction>
        </Geometry>

        <meshStandardMaterial color={colorPallette.light} />
      </mesh>
    </>
  )
}

function Spire(props) {
  return (
    <group {...props} >
      <mesh receiveShadow scale={[0.5, 40, 0.5]}  position-y={-20 + 0.5}>
        <boxGeometry />
        <meshStandardMaterial color={colorPallette.light} />
      </mesh>
      <mesh receiveShadow scale={[0.65, 0.05, 0.65]} position-y={0.75}>
        <boxGeometry />
        <meshStandardMaterial color={colorPallette.dark} />
      </mesh>
      <mesh receiveShadow scale={[0.5, 0.5, 0.5]} position-y={0.75}>
        <boxGeometry />
        <meshStandardMaterial color={colorPallette.dark} />
      </mesh>
    </group>
  )
}
function Building(props) {
  return (
    <group {...props}>
      <mesh receiveShadow>
        <Geometry>
          <Base scale-y={40} position-y={-20 + 0.5}>
            <boxGeometry />
          </Base>

          <Subtraction scale={[1.2, 0.8, 0.8]} position-y={-0.05}>
            <boxGeometry />
          </Subtraction>
          <Subtraction scale={[0.8, 0.8, 1.2]} position-y={-0.05}>
            <boxGeometry />
          </Subtraction>
        </Geometry>
        <meshStandardMaterial color={colorPallette.light} />
      </mesh>

      <Dome />
    </group>
  )
}

function MainBuilding(props) {
  return (
    <group {...props}>
      <mesh castShadow scale={[2, 40, 2]} position-y={-20 + 0.5}>
        <boxGeometry />
        <meshStandardMaterial color={colorPallette.light} />
      </mesh>
      <mesh position={[-0.15, 1.25, -0.15]} scale={1.5}>
        <Geometry>
          <Base>
            <boxGeometry />
          </Base>
          <Subtraction scale={[0.1, 0.3, 1.2]} position={[0.25, 0, 0]}>
            <boxGeometry />
          </Subtraction>
          <Subtraction scale={[0.1, 0.3, 1.2]} position={[-0.25, 0, 0]}>
            <boxGeometry />
          </Subtraction>
          <Subtraction scale={[1.2, 0.3, 0.1]} position={[0, 0, 0.25]}>
            <boxGeometry />
          </Subtraction>
          <Subtraction scale={[1.2, 0.3, 0.1]} position={[0, 0, -0.25]}>
            <boxGeometry />
          </Subtraction>
        </Geometry>

        <meshStandardMaterial color={colorPallette.light} />
      </mesh>
      <Dome position={[-0.15, 1.55, -0.15]} />
    </group>
  )
}

function Dome(props) {
  return (
    <group {...props}>
      <mesh receiveShadow scale={[1.2, 0.1, 1.2]} position-y={0.5}>
        <boxGeometry />
        <meshStandardMaterial color={colorPallette.dark} />
      </mesh>
      <mesh receiveShadow position-y={0.5} rotation-y={Math.PI / 4}>
        <sphereGeometry args={[0.7, 4, 8, 0, 2 * Math.PI, 0, Math.PI / 2]} />
        <meshStandardMaterial color={colorPallette.dark} />
      </mesh>
      <mesh position-y={1.2} scale={0.1}>
        <octahedronGeometry />
        <meshStandardMaterial color={colorPallette.dark} />
      </mesh>
    </group>
  )
}
