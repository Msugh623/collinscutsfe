import React from 'react'
import StateContext, { useStateContext } from './state/StateContext'
import { ToastContainer } from 'react-toastify'
import { Link, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import AppBody from './components/AppBody'
import Creations from './pages/Creations'
import Creation from './pages/Creation'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import { PiChartLineUp, PiInstagramLogo, PiTiktokLogoBold, PiXLogo } from 'react-icons/pi'
import { FaWhatsapp } from 'react-icons/fa'
import Login from './pages/Login'
import AdminIndex from './pages/AdminIndex'
import AdminCreation from './pages/AdminCreation'
import CreateCreation from './pages/CreateCreation'

const AppLayout = () => {
    const { err, pop } = useStateContext()

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
                        <Route path='/login' element={<Login />} />
                    </Route>
                    <Route path='/admin' element={<Admin />} >
                        <Route index element={<AdminIndex />} />
                        <Route path='/admin/creation/:id' element={<AdminCreation />} />
                        <Route path='/admin/creation/add' element={<CreateCreation />} />
                    </Route>
                    <Route path='*' element={[{ message: 'ERROR: Path not Found' }]} />
                </Routes>
                {err && <div className="custom-navmenu text-center text-light fixed-bottom ">
                    <div className='growIn slideUp'>
                        {err}
                    </div>
                </div>}
            </section>
            <footer className="pb-5" role="contentinfo">
                <div className="container">
                    <div className="row panContainer">
                        <div className="col-sm-6">
                            <div className="mb-3 d-flex rounded col-9 col-sm-12 p-0">
                                <div className="gradShift hovShade p-2  border-bottom">
                                    <Link to={'/contact'} className='text-dark '>Make your videos the best they can be! <PiChartLineUp className='fs-5 border' /></Link>
                                </div>
                            </div>
                            <p className="mb-1">© Copyright Collinscuts. All Rights Reserved</p>
                            <div className="credits">
                                {/* <!--
                                All the links in the footer should remain intact.
                                You can delete the links only if you purchased the pro version.
                                Licensing information: https://bootstrapmade.com/license/
                                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=MyPortfolio
          --> */}
                                Designed by <a href="mailto:iternenge469@gmail.com">Chia Ernest</a>
                            </div>
                        </div>
                        <div className="col-sm-6 social text-sm-end panContainer">
                            <a target='_blank' className='shadow hovShade' href="https://x.com/ChiaCollin34870?t=L4TBnTrV0yJPHvw8ciPYDQ&s=09"><span className="bi bi-twitter"> <PiXLogo className='icon fs-4' /></span></a>
                            <a target='_blank' className='shadow hovShade' href="https://wa.me/2347052172789"><span className="bi bi-facebook"> < FaWhatsapp className='icon fs-4' /></span></a>
                            <a target='_blank' className='shadow hovShade' href="https://www.instagram.com/collins_cutss?igsh=bXBlb3BpcnNlbWZ6"><span className="bi bi-instagram"><PiInstagramLogo className='fs-4 icon' /></span></a>
                            <a target='_blank' className='shadow hovShade' href="https://www.tiktok.com/@collinscuts?_t=8omOEFxDeUw&_r=1"><span className="bi bi-linkedin"><PiTiktokLogoBold className='icon fs-4' /></span></a>
                        </div>
                    </div>
                </div>
            </footer>
            {pop && <div className='d-flex w-100' style={{
                position: 'fixed',
                top: '0px',
                bottom: '0px',
                right: '10px',
                leftt: '0px',
                backgroundColor: '#0e0e0e30',
                zIndex: '10000'
            }}>
                {pop}
            </div>}
        </main>
    )
}

const Layout = () => {
    return <StateContext>
        <AppLayout />
    </StateContext>
}

export default Layout