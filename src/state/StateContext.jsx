import { useContext, createContext, useState, useEffect } from "react";
import api from '../../axios/api'

const context = createContext()

const StateContext = ({ children }) => {
    const [clients, setClients] = useState([
        {
            img: '',
            review: 'Perspiciatis possimus cum quidem porro, adipisci neque! A rerum voluptas, sapiente dignissimos in illo harum perspiciatis magnam quae id sequi, accusantium debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. . ',
            mf: 'Azure asp',
            rating: '4',
            i: 0
        }, {
            img: '',
            review: 'r adipisicing elit. Perspiciatis possimus Lorem ipsum dolor sit amet consectetu cum quidem porro, adipisci neque! A rerum voluptas, sapiente dignissimos in illo harum perspiciatis magnam quae id sequi, accusantium debitis. ',
            mf: 'Azure asp',
            rating: '4',
            i: 1
        }, {
            img: '',
            review: ' possimus cum quidem porro, adipisci neque! A rerum voluptas, sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dignissimos in illo harum perspiciatis magnam quae id sequi, accusantium debitis. ',
            mf: 'Azure asp',
            rating: '4',
            i: 2
        }, {
            img: '',
            review: 'illo harum perspiciatis magnam quae id sequi, accusantium debitis Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis possimus cum quidem porro, adipisci neque! A rerum voluptas, sapiente dignissimos in . ',
            mf: 'Azure asp',
            rating: '4',
            i: 3
        }, {
            img: '',
            review: 'sit amet consectetur adipisicing elit.Lorem ipsum dolor  Perspiciatis possimus cum quidem porro, adipisci neque! A rerum voluptas, sapiente dignissimos in illo harum perspiciatis magnam quae id sequi, accusantium debitis. ',
            mf: 'Azure asp',
            rating: '4',
            i: 4
        }, {
            img: '',
            review: ' in illo harum perspiciatis sit amet consectetur adipisicing elit.Lorem ipsum dolor  Perspiciatis possimus cum quidem porro, adipisci neque! A rerum voluptas, sapiente dignissimos magnam quae id sequi, accusantium debitis. ',
            mf: 'Azure asp',
            rating: '4',
            i: 5
        }
    ])

    const [creations, setCreations] = useState([])
    const [filters, setFilters] = useState([])
    const [err, setErr] = useState('')
    const [isLooking, setIsLooking] = useState(false)
    const [card1, setCard1] = useState(clients[0])
    const [card2, setCard2] = useState(clients[1])
    const [card3, setCard3] = useState(clients[2])
    const [toPop, setToPop] = useState(1)
    const [twitch, setTwitch] = useState(Number(new Date()))

    const fetchRsc = async () => {
        try {
            const res = await api.get('/creations')
            setCreations(res.data)
            const fltRes = await api.get('/filters')
            setFilters(fltRes.data)
        } catch (err) {
            setErr(`ERROR: ${err.message}`)
        }
    }
    const func = () => {
        const clientnum = clients.length
        const cardSet = [setCard1, setCard2, setCard3]
        setToPop(prev => {
            const a = prev + 1
            const b = prev >= 3 ? 1 : a; 
            (cardSet[b-1])(clients[Math.floor(Math.random() * clientnum)])
            return b
        })
        console.log(toPop)
    }
    useEffect(() => {
        fetchRsc()
        const interval = setInterval(() => {
            setTwitch(Number(new Date()))
        }, 3000)
        // return clearInterval(interval)
    }, [])
    useEffect(() => {
        func()
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
        card1,
        setCard1,
        card2,
        setCard2,
        card3,
        setCard3,
        toPop,
        setToPop
    }}>
        {children}
    </context.Provider>
}

export default StateContext
export const useStateContext = () => useContext(context)