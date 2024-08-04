import React, { useEffect, useState } from 'react'
import { useStateContext } from '../state/StateContext'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

const Creations = () => {
  const { creations, fetchRsc, filters } = useStateContext()
  
  const [prs, setPrs] = useState(creations)
  const [filter, setFilter] = useState('All')


  useEffect(() => {
    filter == 'All' ?
      setPrs(creations)
      : setPrs(creations.filter(cr => cr.category == filter))
  }, [filter])

  useEffect(() => {
    fetchRsc()
    scroll(0, 0)
  }, [])

  return (
    <main id="main">
      {location.pathname !== '/' && <Nav />}
      <section className="section site-portfolio pt-5">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
              <h2>Hey, I'm Chia Collins</h2>
              <p className="mb-0">Freelance Video Editor &; Professional Graphics Designer</p>
            </div>
            <div className="col-md-12 col-lg-6 text-start text-lg-end" data-aos="fade-up" data-aos-delay="100">
              <div id="filters" className="filters">
                <a href="#All" data-filter="*" className={'' + (filter == 'All' && 'active')} onClick={() => setFilter('All')}>All</a>
                {
                  filters.map(filter => {
                    return <a href={`#${filter}`} data-filter={`.${filter}`} className={'' + (filter == filter && 'active')} onClick={() => setFilter(filter)}>{filter}</a>
                  })
                }
              </div>
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

  return <div className="item web col-sm-6 col-md-4 col-lg-4 mb-4" >
    <Link to={`/creation/${creation.id}`} className="item-wrap fancybox">
      <img className="img-fluid" src={creation?.thumbnail} />
      <div className="work-info text-light">
        <h3>{creation?.name}</h3>
        <span>{creation?.category}</span>
      </div>
    </Link>
  </div>
}