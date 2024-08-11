import React, { useEffect, useState } from 'react'
import { useStateContext } from '../state/StateContext'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { ControlBar, Player } from 'video-react'

const Creations = () => {
  const { creations, fetchRsc, filters } = useStateContext()

  const [prs, setPrs] = useState(creations)
  const [filter, setFilter] = useState(location.pathname.split('#')[1]||'All')


  useEffect(() => {
    filter == 'All' ?
      setPrs(creations)
      : (() => {
        setPrs([])
        setTimeout(() => setPrs(creations.filter(cr => cr.category == filter)), 200)
      })() 
  }, [filter, creations])

  useEffect(() => { 
    fetchRsc()
  }, [])

  return (
    <main id="main">
      {location.pathname !== '/' && <Nav />}
      <section className="section site-portfolio py-5">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
              <h2 className='slideIn'>Hey, I'm Chia Collins</h2>
              <p className="mb-0 growIn">Transforming your YouTube content with captivating storytelling and unparalleled quality.</p>
            </div>
            <div className="col-md-12 col-lg-6 text-center text-sm-start text-lg-end w-100" data-aos="fade-up" data-aos-delay="100" >
              {filters.length ? <div id="filters" className="filters slideLeft">
                <a href="#All" data-filter="*" className={'' + (filter == 'All' && 'active shadow rounded')} onClick={() => setFilter('All')}>All</a>
                {
                  filters.map(flt => {
                    return <a key={flt.id} href={`#${flt.name}`} data-flt={`.${flt.name}`} className={`${flt.name == filter && 'active shadow rounded'}`} onClick={() => setFilter(flt.name)}>{flt.name}</a>
                  })
                }
              </div> : ''}
            </div>
          </div>
          <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
            {prs.map(cr => {
              return <CreationCard key={cr.id} creation={cr} />
            })}
          </div>
        </div>
      </section>
    </main >
  )
}

export default Creations

const CreationCard = ({ creation }) => {
  const [isHovering, setIsHovering] = useState(false)
  const [swap, setSwap] = useState(false)

  useEffect(() => {
    if (isHovering) {
      setTimeout(() => {
        setSwap(isHovering)
      }, 2000);
    } else {
      setTimeout(() => {
        setSwap(false)
      }, 2001);
    }

    return () => {

    }
  }, [isHovering])


  return <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
    <Link to={`/creation/${creation.id}`} className="item-wrap rounded shadow growUp" >
      <div className=''>
        {!swap ?
          <img className="img-fluid w-100" src={creation?.thumbnail} />
          : <Player key={creation?.id} poster={creation?.thumbnail} autoPlay src={creation?.source}>
            <ControlBar autoHide={false} className="my-class" />
          </Player>
        }
        <div className="p-2 ">
          <h3 className='text-ligt'>{creation?.name}</h3>
          <span>{creation?.category}</span>
        </div>
      </div>
    </Link>
  </div>
}