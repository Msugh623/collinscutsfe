import React, { useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loader = () => {
    return (
        <div className='w-100' style={{
            position: 'fixed',
            top: '45vh'
        }}>
            <div className="d-flex">
                <div className="mx-auto">
                    <h1 className='ani'>
                        <FaSpinner className='spinner' />
                        <Delay inline={true} delay={0}>
                            <span className="slideUp"> Collins</span>
                        </Delay>
                        <Delay inline={true} delay={150}>
                            <span className="slideUp"> Cuts</span>
                        </Delay>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Loader


const Delay = ({ delay, children }) => {
    const [arch, setArch] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setArch(true)
        }, delay);
    }, [])

    return arch ? children : ''
}