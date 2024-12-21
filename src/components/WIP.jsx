import { Backdrop, ContactShadows, Float, Text3D, Environment } from '@react-three/drei'

export default function WIP() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[-10, 0, -5]} intensity={Math.PI} color="red" />
      <directionalLight position={[-1, -2, -5]} intensity={0.2 * Math.PI} color="#0c8cbf" />
      <spotLight position={[5, 0, 5]} intensity={2.5} penumbra={1} angle={0.35} castShadow color="#0c8cbf" />
      <Float floatingRange={[0.1, 0.5]} speed={2}>
        <Text3D
          font="/DejaVuMono_Bold.json"
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}>
          WIP
          <meshStandardMaterial color="grey" />
        </Text3D>
      </Float>
      <Backdrop castShadow floor={2} position={[0, -0.5, -3]} scale={[50, 10, 4]}>
        <meshStandardMaterial color="#353540" envMapIntensity={0.1} />
      </Backdrop>
      <ContactShadows position={[0, -0.485, 0]} scale={5} blur={1.5} far={1} />
      <Environment preset="night" />
    </>
  )
}
