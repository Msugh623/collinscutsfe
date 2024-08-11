import React, { useEffect, useState } from 'react'
import Creations from './Creations'
import { BiEnvelope, BiHome, BiStopwatch, BiUser, BiVideo } from 'react-icons/bi'
import { BsMotherboard, BsViewStacked } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import ClientBar from '../components/ClientBar'
import { PiInstagramLogo, PiTiktokLogoBold, PiXLogo } from 'react-icons/pi'
import { FaGem, FaWhatsapp } from 'react-icons/fa'
import { useStateContext } from '../state/StateContext'
import { TbPremiumRights } from 'react-icons/tb'
import { MdChangeCircle } from 'react-icons/md'
// import StarredBar from '../components/StarredBar'

const Index = () => {
    const [sh, setSh] = useState(scrollY)

    useEffect(() => {
        onscroll = () => {
            setSh(scrollY)
        }
    }, [])
    return (
        <div className="index-page">
            <div className="fixed-top">
                {
                    sh > 550 &&
                    <div className="slideIn">
                        <Nav />
                    </div>
                }
            </div>
            <header id="header" className="header d-flex flex-column justify-content-center">
                {
                    sh < 550 &&
                    <nav id="navmenu" className="navmenu ">
                        <ul>
                            <li>
                                <Delay inline={true} delay={800}>
                                    <Link to="/#hero" className="active"><i className="bi bi-house navicon slideRight"><BiHome className='icon' /></i><span>Home</span></Link>
                                </Delay>
                            </li>
                            <li>
                                <Delay inline={true} delay={900}>
                                    <Link to="/creations"><i className="bi bi-images navicon slideRight"><BiVideo className='icon' /></i><span>Creations</span></Link>
                                </Delay>
                            </li>
                            <li>
                                <Delay inline={true} delay={1000}>
                                    <a href="#services"><i className="bi bi-hdd-stack navicon slideRight"><BsViewStacked className='icon' /></i><span>Services</span></a>
                                </Delay>
                            </li>
                            <li>
                                <Delay inline={true} delay={1100}>
                                    <Link to="/contact"><i className="bi bi-envelope navicon slideRight"><BiEnvelope className='icon' /></i><span>Contact</span></Link>
                                </Delay>
                            </li>
                        </ul>
                    </nav>
                }
            </header>

            <main className="main">
                <section id="hero" className="hero section dark-background">

                    <img src="/media/hero.jpg" alt="" />

                    <div className="container " data-aos="zoom-out">
                        <div className='ms-sm-5 ps-sm-5 ps-lg-0 ms-lg-0'>
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <h2 className='slideIn'>Chia Collins</h2>
                                    <p>I'm a <Replacer arr={['Video Editor', 'Motion Graphics Designer']} /></p>
                                    <div className="social-links slideUp">
                                        <Delay inline={true} delay={1500}>
                                            <a className='slideIn' target='_blank' href="https://x.com/ChiaCollin34870?t=L4TBnTrV0yJPHvw8ciPYDQ&s=09"><PiXLogo /></a>
                                        </Delay>
                                        <Delay inline={true} delay={1600}>
                                            <a className='slideIn' target='_blank' href="https://wa.me/2347052172789">< FaWhatsapp /></a>
                                        </Delay>
                                        <Delay inline={true} delay={1700}>
                                            <a className='slideIn' target='_blank' href="https://www.instagram.com/collins_cutss?igsh=bXBlb3BpcnNlbWZ6"><PiInstagramLogo className='fs-4' /></a>
                                        </Delay>
                                        <Delay inline={true} delay={1800}>
                                            <a className='slideIn' target='_blank' href="https://www.tiktok.com/@collinscuts?_t=8omOEFxDeUw&_r=1"><PiTiktokLogoBold /></a>
                                        </Delay>
                                    </div>
                                    {/* <Delay inline={true} delay={3000}>
                                        <div className="slideUp p-0 mt-3">
                                            <StarredBar />
                                        </div>
                                    </Delay> */}
                                </div>

                            </div>
                        </div>
                    </div>

                </section>

            </main>
            <div className="mt-4">
                <Creations limit={6} />
            </div>
            <section id='services' className="section services">
                <div className="container">
                    <div className="row justify-content-center text-center mb-4">
                        <div className="col-md-5">
                            <h3 className="h3 heading">What You'll Get</h3>
                            <p>Elevate your YouTube channel: Engaging, unique, and unforgettable videos every time.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                            <i className="bi bi-calendar4-week"><FaGem /></i>
                            <h4 className="h4 mb-2">Premium Quality Visuals</h4>
                            <p> I inject high-energy, captivating edits into your content that will keep your audience glued to the screen. Your vision, combined with my editing skills, equals viral potential.</p>
                            {/* <ul className="list-unstyled list-line">
                                <li>Crisp, clear visuals </li>
                                <li>Expertly crafted graphics</li>
                                <li>Cohesive visual elements </li>
                            </ul> */}
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                            <i className="bi bi-binoculars"><BiStopwatch /></i>
                            <h4 className="h4 mb-2">Time-Saving</h4>
                            <p>delivering high-quality videos in record time. You'll have more time to focus on what you love, creating amazing content and growing your audience.</p>
                            {/* <ul className="list-unstyled list-line">
                                <li>Streamlined processes</li>
                                <li>Near immediate product availability</li>
                                <li>Easy access to and management</li>
                            </ul> */}
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                            <i className="bi bi-brightness-high"><BsMotherboard /></i>
                            <h4 className="h4 mb-2">Management</h4>
                            <p>Enjoy complete peace of mind as i manage every aspect of the process. You have full control over your level of involvement.</p>
                            {/* <ul className="list-unstyled list-line">
                                <li>Customized features to fit your needs</li>
                                <li>Quickly bring your ideas and opinions into the project</li>
                                <li>Magnam soluta quod</li>
                                <li>Lorem ipsum dolor</li>
                                <li>Cumque quae aliquam</li>
                            </ul> */}
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                            <i className="bi bi-calendar4-week"><MdChangeCircle /></i>
                            <h4 className="h4 mb-2">Uniqueness</h4>
                            <p>Each video we put out there will be will be authentic and unique and you will completely stand out from all your competetion.</p>
                            {/* <ul className="list-unstyled list-line">
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                                <li>Non pariatur nisi</li>
                                <li>Magnam soluta quod</li>
                                <li>Lorem ipsum dolor</li>
                                <li>Cumque quae aliquam</li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </section>

            <ClientBar />
        </div >
    )
}

export default Index


const Delay = ({ delay, children, inline }) => {
    const [arch, setArch] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setArch(true)
        }, delay || 700);
    }, [])

    return arch ? children : <div className={inline ? 'd-inline' : ''} style={{ opacity: 0 }}>
        {children}
    </div>
}

const Replacer = ({ arr }) => {
    const { toPop } = useStateContext()
    const [i, setI] = useState(0)
    const [show, setShow] = useState(false)
    useEffect(() => {
        setShow(false)
        setI(prev => {
            const next = prev + 1
            return prev > arr.length - 2 ? 0 : next
        })
        setTimeout(() => setShow(true), 100)
    }, [toPop])
    return show ? <span className="typed slideUp">{arr[i]} </span> : ''
}