import { Redirect, Route, Switch, useLocation } from 'wouter'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

export default function Experience({ pages }) {
  const [location] = useLocation()

  return (
    <Canvas>
      {import.meta.env.DEV && <Perf minimal />}
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Switch>
        <Route path="/:d">{pages[parseInt(location.slice(1) - 1)]}</Route>
        <Route>
          <Redirect to="1" replace />
        </Route>
      </Switch>
      <OrbitControls />
    </Canvas>
  )
}
