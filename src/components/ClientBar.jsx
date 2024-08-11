import React, { useEffect, useState } from 'react'
import { useStateContext } from '../state/StateContext'
import { BiSolidStar } from 'react-icons/bi'

const ClientBar = () => {
    const {
        setIsLooking,
        clients,
        toPop,
    } = useStateContext()

    return (
        <section className="section pt-0">
            <div className="row justify-content-center text-center mb-4">
                <div className="col-md-5">
                    <h3 className="h3 heading">What My Clients Say</h3>
                    <div>Your review will come as you get mesmorized by the finished product delivered, it might even find a space here.</div>
                </div>
            </div>
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
    const [rtArr, setRtArr] = useState([])

    useEffect(() => {
        const mk = document.getElementById('marquee')
        if (glow) {
            const val = window.innerWidth / 6
            mk.scroll({ left: (toPop * 320) - (val < 90 ? 0 : val), behavior: 'smooth' })
        }
    }, [toPop])

    useEffect(() => {
        const rt = Number(review.rating)
        let arr = []
        for (let i = 0; i < rt; i++) {
            arr.push(i)
        }
        setRtArr(arr)
    }, [])


    return <div className="swiper-slide mb-5 p-sm-2" id={glow ? 'current' : ''}>
        <div className={`testimonial-wrap p-3 shadow rounded  ${glow ? 'downCard' : 'shadow-lev slidecard'}`}>
            <div className="testimonial">
                <p className='' style={{minHeight:'20px'}}>{review.mf && <>~</>} {review.mf} {review.mf && <>~</>} </p>
                <p className='growIn'>
                    {text}
                </p>
                {rtArr.map(_ => (
                    <BiSolidStar className='icon text-warning' style={{
                        textShadow:'2px 2px 2px'
                    }}/>
                ))} <span className="small">({review.rating})</span>
            </div>
        </div>
    </div>
}