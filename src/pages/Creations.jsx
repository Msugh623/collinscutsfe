import React, { useEffect } from 'react'
import { useStateContext } from '../state/StateContext'

const Creations = () => {
  const { creations, fetchRsc } = useStateContext()

  useEffect(() => {
    fetchRsc()
  }, [])

  return (
    <main id="mai">
      <section className="section site-portfolio">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
              <h2>Hey, I'm Johan Stanworth</h2>
              <p className="mb-0">Freelance Creative &amp; Professional Graphics Designer</p>
            </div>
            <div className="col-md-12 col-lg-6 text-start text-lg-end" data-aos="fade-up" data-aos-delay="100">
              <div id="filters" className="filters">
                <a href="#" data-filter="*" className="active">All</a>
                <a href="#" data-filter=".web">Web</a>
                <a href="#" data-filter=".design">Design</a>
                <a href="#" data-filter=".branding">Branding</a>
                <a href="#" data-filter=".photography">Photography</a>
              </div>
            </div>
          </div>
          <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200"> 
            {creations.map(cr => {
             return <div ke={cr.id} className="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                <a href="work-single.html" className="item-wrap fancybox">
                  <div className="work-info">
                    <h3>{cr?.name}</h3>
                    <span>{cr?.category}</span>
                  </div>
                  <img className="img-fluid" src={cr?.thumbnail} />
                </a>
              </div>
            })}
          </div>
        </div>
      </section>
    </main >
  )
}

export default Creations