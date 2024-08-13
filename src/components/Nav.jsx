import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const [hasPop, setHasPop] = useState(props.hasPop)
    return (
        <div className={!props?.hov && 'sticky-top'}>
            {hasPop &&
                <nav className="navbar text-light custom-navmenu pt-0 growIn">
                    <div className="container py-4 ">
                        {/* <div className='col-5 small'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, iste corrupti blanditiis nostrum perspiciatis minus labore ullam dolores reiciendis nesciunt ab ipsum repellendus, laudantium atque quia dicta quisquam, inventore voluptatibus.
                        </div> */}
                        <div className="ms-auto me-2 ">
                            <Link to={'/'} className='me-1 rounded btn' onClick={() => window.scroll({ top: 0 })}>Home</Link>
                            <Link to={'/creations'} className='me-1 rounded btn'>Creations</Link>
                            <Link to={'/#services'} className='me-1 rounded btn' onClick={() => setTimeout(() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }), 300)}>Services</Link>
                            <Link to={'/contact'} className='me-1 rounded btn'>Contact</Link>
                        </div>
                    </div>
                </nav>
            }
            <nav className={`navbar navbar-light custom-navbar  pt-0 ${!props.hasBg && 'bg-light'} shadow-sm`}>
                <div className="container py-3 pb-2 px-2">
                    <h2 className='m-0'>
                        <Link to={'/'} onClick={() => window.scroll({ top: 0 })}>
                            <img src="https://res.cloudinary.com/dqbgai7xd/image/upload/e_improve,e_sharpen/v1723495167/WhatsApp_Image_2024-08-12_at_18.23.41_1_ezuolb.jpg" alt="CollinsCuts Logo" about='CollinsCuts logo image. CollinsCuts makes facinating and captivating videos for his clients. CollinsCuts delivers from animation to video editing to motion graphic, you name it' width={'80px'}  className='rounded'/> <span className='m-0' style={{position:'relative',top:'5px'}}>CollinsCuts</span>
                        </Link>
                    </h2>
                    {!hasPop &&
                        <div className="ms-auto me-2 d-none d-md-block">
                            <Link to={'/'} className='me-1 rounded btn' onClick={() => window.scroll({ top: 0 })}>Home</Link>
                            <Link to={'/creations'} className='me-1 rounded btn'>Creations</Link>
                            <Link to={'/#services'} className='me-1 rounded btn' onClick={() => setTimeout(() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }), 300)}>Services</Link>
                            <Link to={'/contact'} className='me-1 rounded btn'>Contact</Link>
                        </div>
                    }
                    <a className={`burger ${hasPop && 'active'}`} data-bs-toggle="collapse" data-bs-target="#main-navbar" onClick={() => {
                        setHasPop(prev => !prev)
                    }}>
                        <span></span>
                    </a>
                </div>
            </nav >
        </div >
    )
}

export default Nav