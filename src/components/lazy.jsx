// import { Html } from '@react-three/drei'
import { lazy, Suspense } from 'react'
import Loader from './Loader.jsx'

const modules = import.meta.glob('../dates/*.jsx')

function LazyImportComponent(action) {
  const LazyComponent = lazy(action)
  return () => {
    return (
      <Suspense fallback={<Loader />}>
        <LazyComponent />
      </Suspense>
    )
  }
}

function lazyImport(path) {
  const MyComponent = LazyImportComponent(modules[path])
  return <MyComponent />
}

export default function getPages() {
  const pages = {}
  for (const sketch in modules) {
    const index = sketch.substring(sketch.lastIndexOf('/') + 1, sketch.lastIndexOf('.'))
    pages[index - 1] = lazyImport(sketch)
  }
  console.log(pages)
  return pages
}
