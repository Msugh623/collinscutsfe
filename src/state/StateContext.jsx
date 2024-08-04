import { useContext, createContext, useState, useEffect } from "react";
import api from '../../axios/api'
import { toast } from "react-toastify";

const context = createContext()

const StateContext = ({ children }) => {
    const [creations, setCreations] = useState([])
    const fetchRsc = async () => {
        try {
            const res = await api.get('/creations')
            setCreations(res.data)
        } catch (err) {
            toast.error(`ERROR: ${err.message}`)
        }
    }
    useEffect(() => {
        fetchRsc()
    }, [])
    return <context.Provider value={{
        creations,
        setCreations,
        fetchRsc
    }}>
        {children}
    </context.Provider>
}

export default StateContext
export const useStateContext = () => useContext(context)