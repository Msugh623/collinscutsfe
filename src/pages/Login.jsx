import React, { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../axios/api'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleInput = ({ target }) => {
        setData(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const login = async (e) => {
        e.preventDefault()
        const tst = toast('logging in...', {
            autoClose: false
        })
        try {
            const cred = (await api.post('/rq/login', data))?.data
            localStorage.access = cred.token
            api.defaults.headers.common['Authorization'] = 'Bearer ' + cred.token
            location.replace('/admin')
        } catch (err) {
            toast.error(`ERROR: ${err.response.data.message || err.message}`)
        } finally {
            toast.dismiss(tst)
        }
    }

    return (
        <div className='container pt-5'>
            <div className="row">
                <form onSubmit={login} className='col-10 col-sm-9 col-md-7 col-lg-5 shadow-lg rounded mx-auto slideUp'>
                    <div className="d-flex">
                        <h3 className="m-auto my-3">Admin Login</h3>
                    </div>
                    <div className="form-group mb-3">
                        <input type="email" className="form-control border" name='email' onChange={handleInput} value={data.email} required placeholder='Email'/>
                    </div>
                    <div className="form-group">
                        <input type="password" name='password' className="form-control border" onChange={handleInput} value={data.password} required placeholder='Password'/>
                    </div>
                    <button className='readmore custom-navmenu text-light growIn my-3'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login