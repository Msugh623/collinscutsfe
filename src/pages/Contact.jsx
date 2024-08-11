import React, { useEffect, useState } from 'react'
import { BiEnvelope, BiLink } from 'react-icons/bi'
import { BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs'
import Nav from '../components/Nav'
import { useStateContext } from '../state/StateContext'
import { FaCheckCircle, FaPaperPlane, FaTimesCircle, FaWhatsapp } from 'react-icons/fa'
import api from '../../axios/api'
import { useSearchParams } from 'react-router-dom'

const Contact = () => {
  const { setErr } = useStateContext()
  const [as] = useSearchParams()
  const [newData, setNewData] = useState({
    id: Date.now() + '',
    fullname: '',
    email: '',
    subject: '',
    body: '',
    attachment: as.get('a') || ''
  })
  const [isSending, setIsSending] = useState(false)

  function handleChange({ target }) {
    const { name, value } = target
    setNewData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setIsSending(true)
      const res = await api.post('/rq/messages', {
        ...newData
      })
      setIsSending('sent')
      setErr(<div><span className="text-success icon"><FaCheckCircle /></span> {res?.message || 'Message Sent'}</div>)
    } catch (err) {
      setIsSending(false)
      setErr(<div><span className="text-danger icon"><FaTimesCircle /></span> {err?.message}</div>)
    }
  }

  useEffect(() => {
    scroll(0, 0)
  }, [])

  return (
    <section id="contact" className="contact section pt-0">
      <Nav />

      {/* <!-- Section Title --> */}
      <div className="container section-title mt-4 growIn" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Ready to bring your vision to life? Whether you have a project in mind or just want to discuss ideas, I'm here to help. Drop me a message, and let's create something amazing together!</p>
      </div>
      <div className="container slideUp" data-aos="fade" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-4">
            <a className="info-item d-flex" data-aos="fade-up" href="mailto:payacc092@gmail.com" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"><BiEnvelope /></i>
              <div>
                <h3>Email</h3>
                <p>payacc092@gmail.com</p>
              </div>
            </a>
            <a className="info-item d-flex" data-aos="fade-up" href="https://wa.me/2347052172789" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"><FaWhatsapp className='fs-5' /></i>
              <div>
                <h3>Whatsapp</h3>
                <p>+234 705 217 2789</p>
              </div>
            </a>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300" onClick={() => { setErr('copied +234 706 064 4682'); navigator.clipboard.write('+234 706 064 4682') }}>
              <i className="bi bi-telephone flex-shrink-0"><BsFillTelephoneFill /></i>
              <div>
                <h3>Phone</h3>
                <p>+234 706 064 4682</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            {isSending !== 'sent' ?
              <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">

                  <div className="col-md-6">
                    <input type="text" name="fullname" value={newData.fullname} onChange={handleChange} className="form-control shadow-sm" placeholder="Your Name" required />
                  </div>

                  <div className="col-md-6 ">
                    <input type="email" className="form-control shadow-sm" name="email" value={newData.email} onChange={handleChange} placeholder="Your Email" required />
                  </div>

                  <div className="col-md-12">
                    <input type="text" className="form-control shadow-sm" name="subject" value={newData.subject} onChange={handleChange} placeholder="Subject" required />
                  </div>

                  <div className="col-md-12">
                    <textarea className="form-control shadow-sm" name="body" value={newData.body} onChange={handleChange} rows="6" placeholder="Message" required></textarea>
                    {newData.attachment &&
                      < div className="mt-1">
                        <BiLink className="text-primary fs-5 icon" /> {location.origin}{newData.attachment}
                      </div>
                    }
                  </div>

                  <div className="col-md-12 text-center">

                    {!isSending && <button type="submit">Send Message</button>}
                  </div>

                </div>
              </form>
              : <h3 className='slideIn'><FaPaperPlane className='text-primary me-2 ' /> We have recieved your message and we will get to you as soon as possible. Thank you for contacing us.</h3>
            }
          </div>

        </div>

      </div>

    </section >
  )
}

export default Contact