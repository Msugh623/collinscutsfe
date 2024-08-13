import { useContext, createContext, useState, useEffect } from "react";
import api from '../../axios/api'

const context = createContext()

const StateContext = ({ children }) => {
    const [clients, setClients] = useState([
        {
            review: 'Chia is very professional. He always tried to comply with our request and only stopped when we were happy with the final product. He is Creative and has a good feeling on how to transport text to a visual story.',
            mf: 'Pruno Pererira',
            rating: '5',
            i: 0
        }, {
            review: 'Collins was easy to work with and made us a good video, we highly recommend working with him and we will be gladly working with him again.',
            mf: 'Miguel Santos',
            rating: '5',
            i: 1
        }, {
            review: 'I hired Chia .C to help I my youtube channel in the editing part. He was reliable flexible and very responsive. Highly recommended!',
            mf: 'Ashutosh Raj',
            rating: '5',
            i: 2
        }, {
            review: ' Chia is a fantastic guy to work with and a very talented video editor.',
            mf: 'James Roberts',
            rating: '5',
            i: 3
        }, {
            review: 'Chia Collins excelled in editing our documentary. The final product was polished and engaging, with great attention to detail. Excellent communication and responsiveness. Highly recommend!',
            i: 4,
            mf: 'Alex Taylor',
            rating: '5'
        }, {
            rating: '5',
            review: 'Chia Collins worked wonders on our YouTube video! The editing was sharp and vibrant, elevating the content to a whole new level. Chia’s creativity and efficiency made the project a breeze. If you’re looking for top-notch video editing, Chia is the go-to pro!',
            i: 5,
            mf: 'Marco Rossi'
        }
    ])

    const [messages, setMessages] = useState([])
    const [creations, setCreations] = useState([])
    const [filters, setFilters] = useState([])
    const [err, setErr] = useState('')
    const [isLooking, setIsLooking] = useState(false)
    const [toPop, setToPop] = useState(0)
    const [toPopst, setToPopst] = useState(0)
    const [twitch, setTwitch] = useState(Number(new Date()))
    const [pop, setPop] = useState('')
    const [didShow, setDidShow] = useState(false)

    const fetchRsc = async () => {
        try {
            const res = await api.get('/rq/creations')
            setCreations(typeof res.data == 'string' ? [] : res.data)
            const fltRes = await api.get('/rq/categories')
            setFilters(typeof fltRes.data == 'string' ? [] : fltRes.data)
        } catch (err) {
            setErr(`ERROR: ${err.message}`)
        }
    }
    const func = () => {
        setToPop(prev => {
            const a = prev + 1
            const b = prev >= clients.length - 1 ? 0 : a;
            return b
        })
        setToPopst(prev => {
            const a = prev + 1
            const b = prev >= clients.length - 1 ? 0 : a;
            return b
        })
    }

    useEffect(() => {
        api.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.access
        fetchRsc()
        setInterval(() => {
            setTwitch(Number(new Date()))
        }, 3000)
    }, [])

    useEffect(() => {
        !isLooking && func()
    }, [twitch])

    useEffect(() => {
        err && setTimeout(() => {
            setErr('')
        }, 7000)
    }, [err])

    return <context.Provider value={{
        creations,
        setCreations,
        fetchRsc,
        err,
        setErr,
        filters,
        setFilters,
        clients,
        isLooking,
        setIsLooking,
        toPop,
        setToPop,
        messages,
        setMessages,
        pop,
        setPop,
        toPopst,
        didShow,
        setDidShow
    }}>
        {children}
    </context.Provider>
}

export default StateContext
export const useStateContext = () => useContext(context)