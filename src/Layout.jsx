import React from 'react'
import StateContext, { useStateContext } from './state/StateContext'
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import AppBody from './components/AppBody'
import Creations from './pages/Creations'
import Creation from './pages/Creation'
import Contact from './pages/Contact'
import Admin from './pages/Admin'

const AppLayout = () => {
    const { err } = useStateContext()
    return (
        <main>
            <header>

            </header>
            <section className='pt-0'>
                <ToastContainer progressStyle={{
                    display: 'none'
                }} />
                <Routes>
                    <Route path='/' element={<AppBody />}>
                        <Route index element={<Index />} />
                        <Route path='/creations' element={<Creations />} />
                        <Route path='/creation/:id' element={<Creation />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/Admin' element={<Admin />} />
                    </Route>
                </Routes>
                <div className="custom-navmenu text-center text-light fixed-bottom">
                    {err}
                </div>
            </section>
        </main>
    )
}

const Layout = () => {
    return <StateContext>
        <AppLayout />
    </StateContext>
}

export default Layout