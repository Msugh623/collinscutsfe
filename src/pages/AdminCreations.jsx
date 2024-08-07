import React, { useEffect, useState } from 'react'
import { useStateContext } from '../state/StateContext'
import { Link } from 'react-router-dom'
import { ControlBar, Player } from 'video-react'
import { BsPlusLg } from 'react-icons/bs'
import api from '../../axios/api'
import { toast } from 'react-toastify'
import { FaTrash } from 'react-icons/fa'

const AdminCreations = () => {
    const { creations, fetchRsc, filters } = useStateContext()

    const [prs, setPrs] = useState(creations)
    const [filter, setFilter] = useState('All')


    useEffect(() => {
        filter == 'All' ?
            setPrs(creations)
            : setPrs(creations.filter(cr => cr.category == filter))
    }, [filter, creations])

    useEffect(() => {
        fetchRsc()
    }, [])

    return (
        <main id="main">
            <section className="section site-portfolio py-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="d-flex slideIn mb-4 mb-lg-0" data-aos="fade-up">
                            <h2 className=''>My Creations</h2>
                            <div className="ms-auto">
                                <Link to={`/admin/creation/add`} className="rounded shadow-lg p-3 py-2 border border-dashed readmore custom-navmenu text-light"  >
                                    <BsPlusLg className='fs-4' />
                                </Link>
                            </div>
                        </div>
                        <div className="text-start text-lg-end mt-3" data-aos="fade-up" data-aos-delay="100">
                            {filters.length ? <div id="filters" className="ms-auto filters slideLeft">
                                <a href="#All" data-filter="*" className={'' + (filter == 'All' && 'active shadow rounded')} onClick={() => setFilter('All')}>All </a>
                                {
                                    filters.map(flt => {
                                        return <a key={flt.id} href={`#${flt.name}`} data-flt={`.${flt.name}`} className={`${flt.name == filter && 'active shadow rounded'}`} onClick={() => setFilter(flt.name)}>{flt.name} <FaTrash className='fs-5 ms-2 icon text-danger' onClick={() => {
                                            confirm('Please verify you want to delete category of name ' + '"' + flt?.name + '"')
                                                && (async () => {
                                                    const tst = toast('Processing...', { autoClose: false })
                                                    try {
                                                        const _ = await api.delete('/categories/' + flt?.id)
                                                        fetchRsc()
                                                    } catch (err) {
                                                        toast.error('ERROR: ' + err.message)
                                                    } finally {
                                                        toast.dismiss(tst)
                                                    }
                                                })()
                                        }} /></a>
                                    })
                                }
                                <div className="rounded shadow p-2 py-0 border border-dashed readmore ms-1 icon" onClick={() => {
                                    confirm('Please verify you want to create a new category')
                                        && (async () => {
                                            const tst = toast('Processing...', { autoClose: false })
                                            try {
                                                const catName = prompt('What is the name of the new category?')
                                                if (!catName) {
                                                    throw new Error('New categories must have a name')
                                                }
                                                const _ = await api.post('/categories', {
                                                    name: catName,
                                                    id: 'ctgr' + Date.now()
                                                })
                                                fetchRsc()
                                            } catch (err) {
                                                toast.error('ERROR: ' + err.message)
                                            } finally {
                                                toast.dismiss(tst)
                                            }
                                        })()
                                }}>
                                    <BsPlusLg className='fs-4' />
                                </div>
                            </div> : ''}
                        </div>
                    </div>
                    <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                        {prs.map(cr => {
                            return <CreationCard key={cr.id} creation={cr} />
                        })}
                    </div>
                </div>
            </section>
        </main >
    )
}

export default AdminCreations

const CreationCard = ({ creation }) => {
    const [isHovering, setIsHovering] = useState(false)
    const [swap, setSwap] = useState(false)

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


    return <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <Link to={`/admin/creation/${creation.id}`} className="item-wrap rounded shadow growUp" >
            <div className=''>
                {!swap ?
                    <img className="img-fluid w-100" src={creation?.thumbnail} />
                    : <Player poster={creation?.thumbnail} autoPlay src={creation?.source}>
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
}