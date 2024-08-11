import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaSpinner, FaTimesCircle } from 'react-icons/fa'
import { useStateContext } from '../state/StateContext'
import Nav from '../components/Nav'
import { toast } from 'react-toastify'
import api from '../../axios/api'
import { useNavigate } from 'react-router-dom'

const CreateCreation = () => {
  const { setErr, fetchRsc, filters } = useStateContext()
  const navigate = useNavigate()
  const [newData, setNewData] = useState({
    id: Date.now() + '',
    name: '',
    thumbnail: '',
    source: '',
    description: '',
    category: '',
  })

  function handleChange({ target }) {
    const { name, value, files } = target
    const fInps = ['thumbnail', 'source']
    setNewData(prev => ({
      ...prev,
      [name]: fInps.includes(name) ? files[0] : value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const tst = toast('Uploading Creation..., Do not Navigate from this page or turn off your screen.', {
      autoClose: false,
      icon: <FaSpinner className='spinner icon' />
    })
    try {
      const fd = new FormData()
      const keys = Object.keys(newData)
      for (let i = 0; i < keys.length; i++) {
        fd.append(keys[i], newData[keys[i]])
      }
      const res = await api.post('/rq/creations', fd)
      setErr(<div><span className="text-success icon"><FaCheckCircle /></span> {res?.message || 'Created'}</div>)
      navigate('/admin', { replace: true })
    } catch (err) {
      setErr(<div><span className="text-danger icon"><FaTimesCircle /></span> {err?.message}</div>)
    } finally {
      toast.dismiss(tst)
    }
  }

  useEffect(() => {
    scroll(0, 0)
    fetchRsc()
  }, [])

  return (
    <section id="contact" className="contact section pt-0">
      <Nav />

      {/* <!-- Section Title --> */}
      <div className="container section-title mt-4 growIn" data-aos="fade-up">
        <h2>Add Creation</h2>
      </div>
      <div className="container slideUp" data-aos="fade" data-aos-delay="100">

        <div className="row gy-4">
          <div className="col-md-8 mx-auto">
            {
              <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">

                  <div className="col-md-12">
                    <input type="text" name="name" value={newData.name} onChange={handleChange} className="form-control shadow-sm " placeholder="Creation Name" required />
                  </div>

                  <div className="col-md-12">
                    Thumbnail
                    <input type="file" className="form-control shadow-sm border" name="thumbnail" accept='image/png' onChange={handleChange} required />
                  </div>

                  <div className="col-md-12">
                    Video
                    <input type="file" className="form-control shadow-sm border" accept='video/mp4' name="source" onChange={handleChange} required />
                  </div>

                  <div className="col-md-12">
                    <select className="form-control shadow-sm border" name="category" value={newData.category} onChange={handleChange} required >
                      <option className='d-none' value={''}>Category</option>
                      {
                        filters.map(flt => (
                          <option key={flt.id} value={flt.name}>{flt.name}</option>
                        ))
                      }
                    </select>
                  </div>

                  <div className="col-md-12">
                    <textarea className="form-control shadow-sm" name="description" value={newData.description} onChange={handleChange} rows="6" placeholder="Description" required></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    {<button type="submit">Add Creation</button>}
                  </div>

                </div>
              </form>
            }
          </div>

        </div>

      </div>

    </section >
  )
}

export default CreateCreation