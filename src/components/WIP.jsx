import { Backdrop, Float, Text3D, Center } from '@react-three/drei'

export default function WIP() {
  return (
    <>
      <ambientLight intensity={Math.PI / 8} />
      <directionalLight position={[-10, 0, -5]} intensity={2 * Math.PI} color="red" />
      <directionalLight position={[-1, -2, -5]} intensity={Math.PI} color="#0c8cbf" />
      <spotLight position={[10, 10, 10]} angle={0.15} castShadow penumbra={1} decay={0} intensity={Math.PI} />

      <Float floatingRange={[0.1, 0.5]} speed={2}>
        <Center>
          <Text3D castShadow={true} font="/DejaVuMono_Bold.json">
            WIP
            <meshStandardMaterial color="white" />
          </Text3D>
        </Center>
      </Float>
      <Backdrop receiveShadow={true} floor={2} position={[0, -0.5, -3]} scale={[50, 10, 4]}>
        <meshStandardMaterial color="#353540" envMapIntensity={0.1} />
      </Backdrop>
    </>
  )
}
