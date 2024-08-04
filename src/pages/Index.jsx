import React, { useEffect, useState } from 'react'
import Creations from './Creations'
import { BiEnvelope, BiHome, BiUser, BiVideo } from 'react-icons/bi'
import { BsViewStacked } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import ClientBar from '../components/ClientBar'

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
                    <nav id="navmenu" className="navmenu slideIn">
                        <ul>
                            <li><Link to="/#hero" className="active"><i className="bi bi-house navicon"><BiHome className='icon' /></i><span>Home</span></Link></li>
                            <li><Link to="/creations"><i className="bi bi-images navicon"><BiVideo className='icon' /></i><span>Creations</span></Link></li>
                            <li><a href="#services"><i className="bi bi-hdd-stack navicon"><BsViewStacked className='icon' /></i><span>Services</span></a></li>
                            <li><Link to="/contact"><i className="bi bi-envelope navicon"><BiEnvelope className='icon' /></i><span>Contact</span></Link></li>
                        </ul>
                    </nav>
                }
            </header>

            <main className="main">
                <section id="hero" className="hero section dark-background">

                    <img src="/media/hero.jpg" alt="" />

                    <div className="container" data-aos="zoom-out">
                        <div className='ms-sm-5 ps-sm-5 ps-lg-0 ms-lg-0'>
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <h2 className='slideIn'>Chia Collins</h2>
                                    <p>I'm <span className="typed slideUp" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
                                    <div className="social-links slideUp">
                                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
            <div className="mt-4">
                <Creations limit={6} />
            </div>
            <section className="section">
                <div className="container ">
                    <div className="row justify-content-center text-center mb-4">
                        <div className="col-5">
                            <h3 className="h3 heading">My Clients</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-2">
                            <a href="#" className="client-logo"><img src="assets/img/logo-adobe.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2">
                            <a href="#" className="client-logo"><img src="assets/img/logo-uber.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2">
                            <a href="#" className="client-logo"><img src="assets/img/logo-apple.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2">
                            <a href="#" className="client-logo"><img src="assets/img/logo-netflix.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2">
                            <a href="#" className="client-logo"><img src="assets/img/logo-nike.png" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="col-4 col-sm-4 col-md-2">
                            <a href="#" className="client-logo"><img src="assets/img/logo-google.png" alt="Image" className="img-fluid" /></a>
                        </div>

                    </div>
                </div>
            </section>
            <section id='services' className="section services">
                <div className="container">
                    <div className="row justify-content-center text-center mb-4">
                        <div className="col-5">
                            <h3 className="h3 heading">My Services</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                            <i className="bi bi-card-checklist"></i>
                            <h4 className="h4 mb-2">Web Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                            <ul className="list-unstyled list-line">
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                                <li>Non pariatur nisi</li>
                                <li>Magnam soluta quod</li>
                                <li>Lorem ipsum dolor</li>
                                <li>Cumque quae aliquam</li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                            <i className="bi bi-binoculars"></i>
                            <h4 className="h4 mb-2">Mobile Applications</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                            <ul className="list-unstyled list-line">
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                                <li>Non pariatur nisi</li>
                                <li>Magnam soluta quod</li>
                                <li>Lorem ipsum dolor</li>
                                <li>Cumque quae aliquam</li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                            <i className="bi bi-brightness-high"></i>
                            <h4 className="h4 mb-2">Graphic Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                            <ul className="list-unstyled list-line">
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                                <li>Non pariatur nisi</li>
                                <li>Magnam soluta quod</li>
                                <li>Lorem ipsum dolor</li>
                                <li>Cumque quae aliquam</li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                            <i className="bi bi-calendar4-week"></i>
                            <h4 className="h4 mb-2">SEO</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                            <ul className="list-unstyled list-line">
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                                <li>Non pariatur nisi</li>
                                <li>Magnam soluta quod</li>
                                <li>Lorem ipsum dolor</li>
                                <li>Cumque quae aliquam</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ClientBar />
        </div >
    )
}

export default Index