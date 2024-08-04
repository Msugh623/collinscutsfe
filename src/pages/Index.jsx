import React from 'react'
import Creations from './Creations'

const Index = () => {
    return (
        <div className="index-page">

            <header id="header" className="header d-flex flex-column justify-content-center">

                <i className="header-toggle d-xl-none bi bi-list"></i>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i><span>Home</span></a></li>
                        <li><a href="#about"><i className="bi bi-person navicon"></i><span>About</span></a></li>
                        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
                        <li><a href="#portfolio"><i className="bi bi-images navicon"></i><span>Portfolio</span></a></li>
                        <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i><span>Services</span></a></li>
                        <li><a href="#contact"><i className="bi bi-envelope navicon"></i><span>Contact</span></a></li>
                    </ul>
                </nav>

            </header>

            <main className="main">
                <section id="hero" className="hero section light-background">

                    <img src="assets/img/hero-bg.jpg" alt="" />

                    <div className="container" data-aos="zoom-out">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <h2>Brandon Johnson</h2>
                                <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
                                <div className="social-links">
                                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
            <Creations limit={6} />
            <section className="section">
                <div className="container">
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
            <section className="section services">
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

            <section className="section pt-0">
                <div className="container">

                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">

                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial">
                                        <img src="assets/img/person_1.jpg" alt="Image" className="img-fluid" />
                                        <blockquote>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis
                                                explicabo inventore.</p>
                                        </blockquote>
                                        <p>&mdash; Jean Hicks</p>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-wrap">
                                    <div className="testimonial">
                                        <img src="assets/img/person_2.jpg" alt="Image" className="img-fluid" />
                                        <blockquote>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis
                                                explicabo inventore.</p>
                                        </blockquote>
                                        <p>&mdash; Chris Stanworth</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                </div>
            </section>
        </div >
    )
}

export default Index