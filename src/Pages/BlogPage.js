import React from 'react'
import BlogPic1 from '../Images/BlogImg1.png'
import BlogPic2 from '../Images/BlogImg2.png'
import ContactUsImg from '../Images/Frame8.png'

const BlogPage = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-12 mt-5 text-center'>
          <div>
            <h3 className='fw-bold'>BLOG</h3>

          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6  '>
          <div className="container mt-2 Frame p-5">
            <div className=" card p-3 shadow">
              <div>
                <img src={BlogPic1} className="card-img-top img-fluid" alt="Card" />
              </div>

              <div className="card-body text-center">
                <h4 className="card-title">How to earn money in
                  India</h4>
                <br />
                <h4 className="card-title" style={{ marginTop: "-2rem" }}> as a barbers.</h4>
                <p className="card-text text-muted  text-start">To earn money as a barber in India, focus on building a loyal clientele through quality service, offer additional grooming services like beard trimming and styling, and consider mobile or home service options for convenience.</p>

              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className="container mt-2 Frame p-5" >
            <div className="card p-4 shadow" >
              <div >
                <img src={BlogPic2} className="card-img-top img-fluid" alt="Card " style={{ paddingTop: "-2rem" }} />
              </div>

              <div className="card-body text-center">
                <h4 className="card-title">Future of barbers in india.</h4>

                <p className="card-text text-muted text-start  text-lg-start" >The future of barbers in India looks promising with rising demand for personalized grooming services, adoption of modern techniques and technologies, and increased emphasis on hygiene and customer satisfaction.</p>

              </div>
            </div>
          </div>

        </div>
      </div>
      {/* CONTACT US */}
      <div className='row'>
        <div className='col-md-12 mt-4 text-center'>
          <div>
            <h2>Contact</h2>
          </div>
        </div>
      </div>

      <div className='row ContactUsRow mt-4 pb-2'>
        <div className='col-md-6  '>
          <div className="container mt-5 Frame ">
            <div className=" ">
              <div>
                <img src={ContactUsImg} className="card-img-top Frame3 " alt="Card" style={{ height: "20rem", width: "23rem", marginTop: "-5.12rem" }} />
              </div>


            </div>
          </div>
        </div>
        <div className='col-md-6'>

          <div className="container mt-2">
            <div className="card me-md-5 shadow-lg">
              <div className="card-body">
                <div className='row p-3 '>
                  <div className='col-md-4 p-2'>
                    <div className="input-group flex-nowrap">
                      <input type="text" className="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="addon-wrapping" required />
                    </div>
                  </div>
                  <div className='col-md-4 p-2'>
                    <div className="input-group flex-nowrap">
                      <input type="text" className="form-control" placeholder="Your Email" aria-label="Username" aria-describedby="addon-wrapping" required />
                    </div>
                  </div>
                  <div className='col-md-4 p-2'>
                    <div className="input-group flex-nowrap">
                      <input type="text" className="form-control" placeholder="Your Phone" aria-label="Username" aria-describedby="addon-wrapping" required />
                    </div>
                  </div>
                </div>

              </div>
              <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px", border: "none", backgroundColor: " aliceblue" }}></textarea>
                <label for="floatingTextarea2">Your Message</label>
              </div>
              <div className=' col-12 mt-4 d-flex justify-content-end pe-md-4'>
                <button type="submit" className="btn btn-danger ms-3 mb-3">Send Message  <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage