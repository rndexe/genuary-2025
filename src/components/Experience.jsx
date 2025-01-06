import { Redirect, Route, Switch, useLocation } from 'wouter'
import { OrbitControls, Environment} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'

export default function Experience({ pages }) {
  const [location] = useLocation()

  return (
    <Canvas shadows>
      {import.meta.env.DEV && <Perf />}
      <Switch>
        <Route path="/:d">{pages[parseInt(location.slice(1) - 1)]}</Route>
        <Route>
          <Redirect to="1" replace />
        </Route>
      </Switch>
    </Canvas>
  )
}
