import React from 'react'
import ContactUsImg from '../Images/Frame8.png'
import '../mainPage/home.css'

const contact = () => {
  return (
    <>
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
                <button type="submit" className="btn btn-danger ms-md-3 mb-3 contactbtn">Send Message<i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact