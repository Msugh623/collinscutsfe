import React from 'react'
import { Outlet } from 'react-router-dom'

const AppBody = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default AppBody