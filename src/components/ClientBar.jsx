import React, { useEffect } from 'react'
import { useStateContext } from '../state/StateContext'

const ClientBar = () => {
    const {
        setIsLooking,
        card1,
        card2,
        card3,
        toPop,
    } = useStateContext()


    return (
        <section className="section pt-0">
            <div className="container" onMouseEnter={() => setIsLooking(true)} onMouseLeave={() => setIsLooking(false)}>
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper row">
                        <div className={`col-sm-4 ani`}>
                            <ReviewCard review={card1} glow={toPop !== 1} />
                        </div>
                        <div className={`col-sm-4 ani`}>
                            <ReviewCard review={card2} glow={toPop !== 2} />
                        </div>
                        <div className={`col-sm-4 ani`}>
                            <ReviewCard review={card3} glow={toPop !== 3} />
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    )
}

export default ClientBar

const ReviewCard = ({ review, glow }) => {
    return <div className="swiper-slide mb-5 p-sm-2">
        <div className={`testimonial-wrap p-3  shadow rounded ${glow ? 'downCard' : 'shadow-lev slideUp'}`}>
            <div className="testimonial">
                <img src={review.img} alt="Image" className="img-fluid" />
                <p>
                    {review.review}
                </p>
                <p>&mdash; {review.mf}</p>
            </div>
        </div>
    </div>
}