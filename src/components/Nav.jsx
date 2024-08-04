import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const [hasPop, setHasPop] = useState(props.hasPop)
    return (
        <div className={!props?.hov && 'sticky-top'}>
            {hasPop &&
                <nav className="navbar text-light custom-navmenu  pt-0 growIn">
                    <div className="container py-4 ">
                        <div className="ms-auto me-2 ">
                            <Link to={'/'} className='me-1 rounded btn'>Home</Link>
                            <Link to={'/creations'} className='me-1 rounded btn'>Creations</Link>
                            <Link to={'/#services'} className='me-1 rounded btn' onClick={() => setTimeout(() => window.scroll(0, 1300), 200)}>Services</Link>
                            <Link to={'/contact'} className='me-1 rounded btn'>Contact</Link>
                        </div>
                    </div>
                </nav>
            }
            <nav className={`navbar navbar-light custom-navbar  pt-0 ${!props.hasBg && 'bg-light'} shadow-sm`}>
                <div className="container py-3 pb-2 px-2">
                    <h2 className='m-0'><Link to={'/'}>Collins Cuts</Link></h2>
                    {!hasPop &&
                        <div className="ms-auto me-2 d-none d-md-block">
                            <Link to={'/'} className='me-1 rounded btn'>Home</Link>
                            <Link to={'/creations'} className='me-1 rounded btn'>Creations</Link>
                            <Link to={'/#services'} className='me-1 rounded btn' onClick={() => setTimeout(() => window.scroll(0, 1300), 200)}>Services</Link>
                            <Link to={'/contact'} className='me-1 rounded btn'>Contact</Link>
                        </div>
                    }
                    <a className={`burger ${hasPop && 'active'}`} data-bs-toggle="collapse" data-bs-target="#main-navbar" onClick={() => {
                        setHasPop(prev => !prev)
                    }}>
                        <span></span>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Nav