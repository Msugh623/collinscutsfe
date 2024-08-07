import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate()
  useEffect(() => {
    !localStorage.access && navigate(-1, { replace: true })
  }, [])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Admin