import React, { useEffect, useState } from 'react'
import { useStateContext } from '../state/StateContext'

const ClientBar = () => {
    const {
        setIsLooking,
        clients,
        toPop,
    } = useStateContext()

    return (
        <section className="section pt-0">
            <div className="container" onMouseEnter={() => setIsLooking(true)} onMouseLeave={() => setIsLooking(false)}>
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div id='marquee' className="swiper-wrapper  d-flex">
                        {
                            clients.map((cl, i) => {
                                return <p key={i} className={`col-sm-4 px-3 ani`} style={{
                                    minWidth: '320px',
                                    maxWidth: '320px'
                                }}>
                                    <ReviewCard review={cl} glow={toPop !== i} i={i} clients={clients} />
                                </p>
                            })
                        }
                        {/* <div className="leftPanel"></div>
                        <div className="rightPanel"></div> */}
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    )
}

export default ClientBar

const ReviewCard = ({ review, glow, i }) => {
    const [text, _] = useState(review.review)
    const { toPop } = useStateContext()

    useEffect(() => {
        const mk = document.getElementById('marquee')
        if (glow) {
            const val = window.innerWidth / 6
            mk.scroll({ left: (toPop * 320) - (val < 90 ? 12 : val), behavior: 'smooth' })
        }
    }, [toPop])

    return <div className="swiper-slide mb-5 p-sm-2" id={glow ? 'current' : ''}>
        <div className={`testimonial-wrap p-3 shadow rounded ${glow ? 'downCard' : 'shadow-lev slidecard'}`}>
            <div className="testimonial">
                <img src={review.img} alt="Image" className="img-fluid" />
                <p className='growIn'>
                    {text}
                </p>
                <p>&mdash; {review.mf}</p>
            </div>
        </div>
    </div>
}