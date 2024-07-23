import React from 'react'
import '../mainPage/home.css'
import Frame4 from '../Images/Frame4.png'
import safetyPic1 from '../Images/safetyPic1.png'
import safetyPic2 from '../Images/safetyPic2.png'
import safetyPic3 from '../Images/safetyPic3.png'
import safetyEqp1 from '../Images/SafetyEqp1.png'
import safetyEqp2 from '../Images/SafetyEqu2.png'
import ContactUsImg from '../Images/Frame8.png'

const safetyPage = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-6  '>
          <div className="container mt-5 Frame ">

            <div className="container mt-5 Frame ">
              <div className=" ps-4">
                <h2 className=''>Our Concerns for your Safety!</h2>
                <p className='text-muted p-2'>Our top priorities are maintaining a clean and sanitized environment, ensuring the health of our staff and clients, and practicing safe and hygienic grooming procedures. Your safety and well-being are our utmost concerns. Thank you for trusting us.</p>

              </div>

            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className=" pt-4">
            <div className='Frame4'>
              <img src={Frame4} className="card-img-top " alt="Card" />
            </div>


          </div>

        </div>
      </div>

      {/* SAFETY */}
      <div className='row'>
        <div className='col-md-12 mt-5 text-center'>
          <div>
            <h3 className='fw-bold'>Your Safety is Our Priority</h3>


          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-4'>
          <div className="container mt-3 Frame p-3 ">
            <div className="card p-2 shadow">
              <div>
                <img src={safetyPic1} className="card-img-top p-3" alt="ServicePic " style={{}} />
              </div>

              <div className="card-body text-center">
                <h5 className="card-title">Sanitization Practices</h5>
                <p className='text-muted text-start'>We prioritize your health with rigorous sanitization practices. All tools and surfaces are disinfected between clients, hand hygiene is strictly enforced, and clean towels are used for each appointment. Our commitment to cleanliness ensures a safe and hygienic environment for every visit.</p>


              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="container mt-3 Frame p-3">
            <div className="card p-2 shadow">
              <div>
                <img src={safetyPic2} className="card-img-top p-3" alt="ServicePic " style={{}} />
              </div>

              <div className="card-body text-center">
                <h5 className="card-title">Staff Training & Health</h5>
                <p className='text-muted text-start'>Our salon prioritizes rigorous staff training and health protocols to ensure exceptional service. All team members are skilled professionals, regularly updated on the latest techniques and safety standards. We maintain strict health policies, ensuring a safe and hygienic environment for both clients and staff.</p>

              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="container mt-3 Frame p-3">
            <div className="card p-2 shadow">
              <div>
                <img src={safetyPic3} className="card-img-top p-3" alt="ServicePic " style={{}} />
              </div>

              <div className="card-body text-center ">
                <h5 className="card-title">Social Distancing</h5>
                <p className='text-muted text-start'>Social distancing in salons involves maintaining a safe distance between clients and staff to reduce the risk of virus transmission. This includes spacing out salon chairs, limiting the number of clients in the waiting area, and implementing appointment-only scheduling to minimize crowding.</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EQUIPMENT SECTION */}
      <div className='row'>
        <div className='col-md-12 mt-5 text-center'>
          <div>
            <h3 className='fw-bold'>Protective Equipment</h3>

          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6  '>
          <div className="container mt-5 Frame ">
            <div className=" ">
              <div>
                <img src={safetyEqp1} className="card-img-top" alt="Card" style={{ height: "22rem", width: "22rem" }} />
              </div>

              <div className="card-body text-center">
                <h5 className="card-title">For Cutomers</h5>
                <p className="card-text text-muted">Clients  are required to wear masks at all times.</p>

              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className="container mt-5 Frame ">
            <div className=" ">
              <div>
                <img src={safetyEqp2} className="card-img-top" alt="Card " style={{ height: "22rem", width: "22rem" }} />
              </div>

              <div className="card-body text-center">
                <h5 className="card-title">For Staffs</h5>
                <p className="card-text text-muted">We provide Masks, Gloves and </p>
                <p className="card-text text-muted">  Face shields for
                  every Staffs.</p>

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

export default safetyPage