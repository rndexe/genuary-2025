import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

export function useResetCamera() {
  const camera = useThree((state) => state.camera)

  useEffect(() => {
    camera.position.set(0, 0, 5)

    return () => {
      camera.position.set(0, 0, 5)
    }
  }, [])
}
