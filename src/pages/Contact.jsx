import React, { useEffect } from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs'
import Nav from '../components/Nav'

const Contact = () => {

  useEffect(() => {
    scroll(0, 0)
  }, [])

  return (
    <section id="contact" className="contact section pt-0">
      <Nav />

      {/* <!-- Section Title --> */}
      <div className="container section-title mt-4 growIn" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="container slideUp" data-aos="fade" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"><BiEnvelope /></i>
              <div>
                <h3>Email</h3>
                <p>info@example.com</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"><BsWhatsapp /></i>
              <div>
                <h3>Whatsapp</h3>
                <p>+234 705 217 2789</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"><BsFillTelephoneFill /></i>
              <div>
                <h3>Phone</h3>
                <p>+234 706 064 4682</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">

                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                </div>

                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact