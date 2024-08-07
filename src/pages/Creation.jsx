import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import { useStateContext } from '../state/StateContext'
import { Link, useParams } from 'react-router-dom'
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css';

const Creation = () => {
  const { id } = useParams()
  const { creations, fetchRsc } = useStateContext()
  const theCreation = creations?.find(cr => cr?.id == id)

  useEffect(() => {
    fetchRsc()
  }, [])

  return (
    <main id="main">
      <Nav />
      <section className="section pt-sm-5 p-3">
        <div className="container">
          <div className="row mb-4 align-items-center">
            <div className="col-md-6 growIn" data-aos="fade-up">
              <h2>My Creation</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.</p>
            </div>
          </div>
        </div>
        <div className="site-section pb-0">
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-md-8 slideUp" data-aos="fade-up">
                <Player poster={theCreation?.thumbnail} preload='auto' src={theCreation?.source}>
                  <ControlBar autoHide={false} className="my-class" />
                </Player>
              </div>
              <div className="col-md-4 ml-auto mt-3 mt-sm-0" data-aos="fade-up" data-aos-delay="100">
                <div className="sticky-content">
                  <h3 className="h3">{theCreation?.name}</h3>
                  <p className="mb-4"><span className="text-muted">{theCreation?.category}</span></p>

                  <div className="mb-5">
                    <p className='slideUp'>
                      {theCreation?.description}
                    </p>
                    <Link className='readmore custom-navmenu text-light growIn' to={`/contact?a=${location.pathname}`}>
                      Attatch to message
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default Creation