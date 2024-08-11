import React, { useEffect } from 'react'
import { useStateContext } from '../state/StateContext'
import Nav from '../components/Nav'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../axios/api'
import { toast } from 'react-toastify'
import { FaTrash } from 'react-icons/fa'
import { BiChalkboard, BiLink, BiX } from 'react-icons/bi'

const AdminMessages = () => {
    const { messages, setErr, setMessages, setPop, pop } = useStateContext()
    const getMessages = async () => {
        try { 
            const res = await api.get('/rq/messages')
            setMessages(res.data)
        } catch (err) {
            setErr('X ERROR: ' + err.message)
        }
    }

    useEffect(() => {
       setTimeout(() => {
        getMessages()
       }, 100);
    }, [])
    return (
        <main id="main" className='mb-5'>
            {<Nav />}
            <h2 className="text-center mt-4"><BiChalkboard className='icon me-1 fs-1' />Admin</h2>
            <section className="section site-portfolio py-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="d-flex flex-column slideIn mb-4 mb-lg-0" data-aos="fade-up">
                            <h2 className=''>Messages</h2>
                            <div className='col-md-5'>
                                This are messages from clients, a message can be sent to this dashboard from the contact page.
                            </div>
                        </div>
                    </div>
                    <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                        {messages.map(msg => {
                            return <div key={msg.id} className='tem web col-sm-6 col-lg-4 mb-4' >
                                <Link onClick={() => setPop(<Message message={msg} />)} className="item-wrap rounded  growUp" >
                                    <div className='shadow-lg rounded'>
                                        <div className="p-2 ">
                                            <h5 className=''>{msg?.fullname}</h5>
                                            <h6 className="">
                                                {msg?.subject}
                                            </h6>
                                            <pre className="pre" style={{
                                                textOverflow: 'clip',
                                                whiteSpace: 'pre-wrap',
                                                fontFamily: 'inherit'
                                            }}>
                                                {msg.body.split(' ').slice(0, 30).join(' ')}...
                                            </pre>
                                            <div className='text-muted'>
                                                {(new Date(Number(msg?.id)).toDateString())}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </main >
    )
}

export default AdminMessages

const Message = ({ message }) => {
    const { setPop } = useStateContext()
    const navigate = useNavigate()

    return <div className="col-12 col-sm-11 col-md-8 col-lg-6 mb-4 mx-auto mt-3 mt-sm-5">
        <div className="item-wrap rounded shadow growUp bg-light m-3 text-dark">
            <div className="p-2 p-sm-3" style={{
                maxHeight: '80vh',
                overflowY: 'auto'
            }}>
                <h5 className='d-flex'>{message?.fullname} <Link className='readmore custom-navmenu bg-danger text-light growIn ms-auto' onClick={() => {
                    confirm('Delete ?')
                        && (async () => {
                            const tst = toast('deleting...', { autoClose: false })
                            try {
                                const _ = await api.delete('/rq/messages/' + message?.id)
                                navigate(-1, { replace: true })
                                setPop('')
                            } catch (err) {
                                toast.error(`ERROR: ${err.message}`)
                            } finally {
                                toast.dismiss(tst)
                            }
                        })()
                }}>
                    <FaTrash className='fs-6' />
                </Link> <Link className='readmore custom-navmenu bg-primary text-light growIn ms-1' onClick={() => {
                    setPop('')
                }}>
                        <BiX className='fs-5' />
                    </Link></h5>
                <div><a href={`mailto: ${message?.email}`}>{message?.email}</a></div>
                <div className='text-muted'>
                    {(new Date(Number(message?.id)).toDateString())}
                </div>
                <h4 className="text-center">
                    {message?.subject}
                </h4>
                {message?.a && <div>
                    <Link to={`${location.origin}${message?.a}`}>
                        <BiLink className="text-primary fs-5 icon" />  {location.origin}{message?.a}
                    </Link>
                </div>}
                <div>
                    <pre className="pre fs-6 mt-3" style={{
                        textOverflow: 'clip',
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'inherit'
                    }}>
                        {message.body}
                    </pre>
                </div>
            </div>
        </div>
    </div>
}