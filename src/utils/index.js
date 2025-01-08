import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

export function useResetCamera(startPos) {
  const camera = useThree((state) => state.camera)

  useEffect(() => {
    if (!startPos) camera.position.set(0, 0, 5)
    else camera.position.set(startPos.x, startPos.y, startPos.z)
    camera.lookAt(0, 0, 0)

    return () => {
      camera.position.set(0, 0, 5)
      camera.lookAt(0, 0, 0)
    }
  }, [])
}
