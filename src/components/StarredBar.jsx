import React, { useEffect, useState } from 'react'
import { useStateContext } from '../state/StateContext'
import { ControlBar, Player } from 'video-react'
import { Link } from 'react-router-dom'

const StarredBar = () => {
    const {
        setIsLooking,
        creations,
        toPopst,
    } = useStateContext()

    const [starred, setStarred] = useState(creations.filter(cr => cr?.star))

    useEffect(() => {
        setStarred(creations.filter(cr => cr?.star))
    }, [creations])

    return (
        <div className=" bg-none py-0">
            <div className="container bg-none" onMouseEnter={() => setIsLooking(true)} onMouseLeave={() => setIsLooking(false)}>
                <div className="testimonials-slider bg-none swiper px-0" data-aos="fade-up" data-aos-delay="100">
                    <div id='crmarquee' className="swiper-wrapper bg-none d-flex px-0 inShadePro">
                        {
                            starred.map((cl, i) => {
                                return <p key={i} className={`pe-3 ps-0 ani ${i == 0 && 'px-0 g-0'}`} style={{
                                    minWidth: '320px',
                                    maxWidth: '320px',
                                    paddingLeft: '0px !important'
                                }}>
                                    <StarredCard creation={cl} glow={toPopst !== i} />
                                </p>
                            })
                        }
                        {/* <div className="leftPanel"></div>
                        <div className="rightPanel"></div> */}
                    </div>

                    <div className="swiper-pagination bg-none"></div>
                </div>
            </div>
        </div>
    )
}

export default StarredBar

const StarredCard = ({ creation, glow }) => {
    const [isHovering, setIsHovering] = useState(false)
    const { toPopst } = useStateContext()
    const [swap, setSwap] = useState(false)


    useEffect(() => {
        const mk = document.getElementById('crmarquee')
        if (glow) {
            mk.scroll({ left: (toPopst * 320), behavior: 'smooth' })
        }
    }, [toPopst])

    useEffect(() => {
        if (isHovering) {
            setTimeout(() => {
                setSwap(isHovering)
            }, 2000);
        } else {
            setTimeout(() => {
                setSwap(false)
            }, 2001);
        }

        return () => {

        }
    }, [isHovering])



    return <div className="swiper-slide mb-5 ps-0 p-sm-2" id={glow ? 'current' : ''}>
        <div className={`testimonial-wrap p-0 shadow rounded text-dark ${glow ? 'downCard' : 'shadow-lev slidecard'}`}>
            <div className={`item web mb-4 `} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <Link to={`/creation/${creation.id}`} className="item-wrap rounded shadow growUp" >
                    <div className=''>
                        {!swap ?
                            <img className="img-fluid w-100" src={creation?.thumbnail} />
                            : <Player key={creation?.id} poster={creation?.thumbnail} autoPlay src={creation?.source}>
                                <ControlBar autoHide={false} className="my-class" />
                            </Player>
                        }
                        <div className="p-2 ">
                            <h3 className='text-ligt'>{creation?.name}</h3>
                            <span>{creation?.category}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
}