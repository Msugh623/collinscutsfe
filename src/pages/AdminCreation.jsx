import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { useStateContext } from '../state/StateContext'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';
import { FaTrash } from 'react-icons/fa';
import { BiPencil, BiStar, BiSync, BiX } from 'react-icons/bi';
import { toast } from 'react-toastify';
import api from '../../axios/api';
import { BsStarFill } from 'react-icons/bs';

const AdminCreation = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { creations, fetchRsc } = useStateContext()
    const theCreation = creations?.find(cr => cr?.id == id)
    const [isEdit, setIsEdit] = useState('')

    const [editData, setEditData] = useState({
        description: theCreation?.description || '',
        name: theCreation?.name || '',
        star: false
    })

    const handleSubmit = async () => {
        const tst = toast('updating...', { autoClose: false })
        try {
            const _ = await api.put('/rq/creations/' + id, {
                ...editData,
            })
            fetchRsc()
            setIsEdit('')
        } catch (err) {
            toast.error(`ERROR: ${err.message}`)
        } finally {
            toast.dismiss(tst)
        }
    }

    const handleInput = ({ target }) => {
        setEditData(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    useEffect(() => {
        fetchRsc()
    }, [])

    useEffect(() => {
        setEditData({
            description: theCreation?.description || '',
            name: theCreation?.name || ''
        })
    }, [theCreation])

    useEffect(() => {
        setTimeout(() => {
            handleSubmit()
        }, 500);
    }, [editData.star])

    return (
        <main id="main">
            <Nav />
            <section className="section pt-sm-5 p-3">
                <div className="container">
                    <div className="row mb-4 align-items-center">
                        <div className="col-md-6 growIn" data-aos="fade-up">
                            <h2>My Creations</h2>
                        </div>
                    </div>
                </div>
                <div className="site-section pb-0">
                    <div className="container">
                        <div className="row align-items-stretch">
                            <div className="col-md-8 slideUp" data-aos="fade-up">
                                <Player poster={theCreation?.thumbnail} preload='auto' src={theCreation?.source}>
                                    <ControlBar autoHide={false} className="my-class" />
                                </Player>
                            </div>
                            <div className="col-md-4 ml-auto mt-3 mt-sm-0" data-aos="fade-up" data-aos-delay="100">
                                <div className="sticky-content">
                                    <h3 className="h3 rounded p-2 shadow" >
                                        {isEdit == 'name' ?
                                            <div>
                                                <input type="text" className="form-control" autoFocus value={editData.name} name='name' onChange={handleInput} />
                                                <button className="shadow-sm ms-auto fs-4 border-0" onClick={() => setIsEdit(prev => prev == 'name' ? '' : 'name')}><BiX /></button>
                                                <button className=" shadow-sm ms-auto bg-primary border-0 text-light" onClick={handleSubmit}><BiSync className='fs-4 icon' /></button>
                                            </div>
                                            : <div className='d-flex'>{theCreation?.name} <button className="btn shadow-sm ms-auto" onClick={() => setIsEdit(prev => prev == 'name' ? '' : 'name')}><BiPencil /></button></div>}
                                    </h3>

                                    <p className="mb-4 -sm " >
                                        <span className="text-muted">
                                            {theCreation?.category}
                                        </span>
                                    </p>

                                    <div className="mb-5">
                                        <p className='slideUp shadow rounded p-2' onDoubleClick={() => setIsEdit(prev => prev == 'description' ? '' : 'description')}>
                                            {isEdit == 'description' ?
                                                <div>
                                                    <textarea type="text" className="form-control" value={editData.description} rows="6" name='description' autoFocus onChange={handleInput} ></textarea>
                                                    <button className="shadow-sm ms-auto fs-4 border-0" onClick={() => setIsEdit(prev => prev == 'description' ? '' : 'description')}><BiX /></button>
                                                    <button className=" shadow-sm ms-auto bg-primary border-0 text-light" onClick={handleSubmit}><BiSync className='fs-4 icon' /></button>
                                                </div>
                                                : <div className='d-flex'> {theCreation?.description} <button className="btn shadow-sm ms-auto" onClick={() => setIsEdit(prev => prev == 'description' ? '' : 'description')}><BiPencil /></button></div>}
                                        </p>
                                        <Link className={`text-dark bg-none text-light growIn me-3 `} onClick={() => {
                                            setEditData(prev => {
                                                return {
                                                    ...prev,
                                                    star: !prev.star
                                                }
                                            })
                                        }}>
                                            {editData?.star ? <BsStarFill className='fs-3 text-warning' /> : <BiStar className='fs-3' />}
                                        </Link>
                                        <Link className='readmore custom-navmenu bg-danger text-light growIn' onClick={() => {
                                            confirm('You are about to delete this creation, this irreversible action will tracelessy remove this creation! proceed?')
                                                && (async () => {
                                                    const tst = toast('updating...', { autoClose: false })
                                                    try {
                                                        const _ = await api.delete('/rq/creations/' + id)
                                                        navigate(-1, { replace: true })
                                                        fetchRsc()
                                                    } catch (err) {
                                                        toast.error(`ERROR: ${err.message}`)
                                                    } finally {
                                                        toast.dismiss(tst)
                                                    }
                                                })()
                                        }}>
                                            <FaTrash className='fs-5' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >

    )
}

export default AdminCreation