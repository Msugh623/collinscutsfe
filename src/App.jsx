import React, { lazy, Suspense } from 'react'
const Layout = lazy(() => import('./Layout'))

const App = () => {
  return (
    <div>
      <Suspense fallback={'loading'}>
        <Layout />
      </Suspense>
    </div>
  )
}

export default App