import React, { lazy, Suspense } from 'react'
import Loader from './components/Loader'
const Layout = lazy(() => import('./Layout'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    </div>
  )
}

export default App