import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import { useStateContext } from '../state/StateContext'
import { useParams } from 'react-router-dom'

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
      <section class="section pt-sm-5 p-3">
        <div class="container">
          <div class="row mb-4 align-items-center">
            <div class="col-md-6" data-aos="fade-up">
              <h2>My Creation</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.</p>
            </div>
          </div>
        </div>
        <div class="site-section pb-0">
          <div class="container">
            <div class="row align-items-stretch">
              <div class="col-md-8" data-aos="fade-up">
                <img src="assets/img/img_1_big.jpg" alt="Image" class="img-fluid" />
              </div>
              <div class="col-md-4 ml-auto" data-aos="fade-up" data-aos-delay="100">
                <div class="sticky-content">
                  <h3 class="h3">{theCreation?.name}</h3>
                  <p class="mb-4"><span class="text-muted">{theCreation?.category}</span></p>

                  <div class="mb-5">
                    <p>
                      {theCreation?.description}
                    </p>

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