import React from 'react'
// import './service.css'
import '../mainPage/home.css'

import Frame1 from '../Images/Frame1.png'
import Frame2 from '../Images/Frame2.png'
import ServicePic1 from '../Images/servicePhoto.png'
import ServicePic2 from '../Images/servicePhoto2.png'
import ServicePic3 from '../Images/servicePhoto3.png'
import UpcomingService1 from '../Images/Rectangle1.png'
import UpcomingService2 from '../Images/Rectangle2.png'
import UpcomingService3 from '../Images/Rectangle3.png'
import ContactUsImg from '../Images/Frame8.png'
const OurService = () => {
  return (
    <>
                <div className='row'>
                <div className='col-md-12 mt-5 text-center'>
                    <div>
                        <h3 className='fw-bold'>OUR SERVICES</h3>
                        
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6  '>
                    <div className="container mt-5 Frame ">
                        <div className=" ">
                            <div>
                                <img src={Frame1} className="card-img-top" alt="Card" style={{ height: "22rem", width: "22rem" }} />
                            </div>

                            <div className="card-body text-center">
                                <h5 className="card-title">Salon Booking Services</h5>
                                <p className="card-text text-muted">At Salone</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="container mt-5 Frame ">
                        <div className=" ">
                            <div>
                                <img src={Frame2} className="card-img-top" alt="Card " style={{ height: "22rem", width: "22rem" }} />
                            </div>

                            <div className="card-body text-center">
                                <h5 className="card-title">Home Salon Booking Services</h5>
                                <p className="card-text text-muted">At your Home</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='row'>
                <div className='col-md-12 mt-5 text-center'>
                    <div>
                        <h3 className='fw-bold'>AVAILABLE SERVICES</h3>
                        <p className='text-muted'>Book your  Favourite Service from these salons at your Convenient Place</p>
                        
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                <div className="container mt-3 Frame ">
                        <div className=" ">
                            <div>
                                <img src={ServicePic1} className="card-img-top p-3" alt="ServicePic " style={{ }} />
                            </div>

                            <div className="card-body text-center">
                                <h5 className="card-title">Unisex Salon</h5>
                               

                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                <div className="container mt-3 Frame ">
                        <div className=" ">
                            <div>
                                <img src={ServicePic2} className="card-img-top p-3" alt="ServicePic " style={{ }} />
                            </div>

                            <div className="card-body text-center">
                                <h5 className="card-title">Male Salon</h5>
                                

                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                <div className="container mt-3 Frame ">
                        <div className=" ">
                            <div>
                                <img src={ServicePic3} className="card-img-top p-3" alt="ServicePic " style={{ }} />
                            </div>

                            <div className="card-body text-center">
                                <h5 className="card-title">Female Salon</h5>
                             

                            </div>
                        </div>
                    </div>
                </div>
            </div>

{/* UPCOMING CATEGORIES */}

<div className='row'>
                <div className='col-md-12 mt-5 text-center'>
                    <div>
                        <h3 className='fw-bold'>UPCOMING CATEGORIES</h3>
                        
                        
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                <div className="container mt-3 Frame p-3 ">
                        <div className="card p-2">
                            <div>
                                <img src={UpcomingService1} className="card-img-top p-3" alt="ServicePic " style={{ }} />
                            </div>

                            <div className="card-body text-center">
                                <h5 className="card-title">Female Spa</h5>
                                <p>Lorem ipsum dolor sit amet consectetur. Ut est sed vitae tortor.</p>
                               

                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                <div className="container mt-3 Frame p-3">
                        <div className="card p-2">
                            <div>
                                <img src={UpcomingService2} className="card-img-top p-3" alt="ServicePic " style={{ }} />
                            </div>

                            <div className="card-body text-center">
                                <h5 className="card-title">Male Spa</h5>
                                <p>Lorem ipsum dolor sit amet consectetur. Ut est sed vitae tortor.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                <div className="container mt-3 Frame p-3">
                        <div className="card p-2">
                            <div>
                                <img src={UpcomingService3} className="card-img-top p-3" alt="ServicePic " style={{ }} />
                            </div>

                            <div className="card-body text-center">
                                <h5 className="card-title">Unisex Spa</h5>
                                <p>Lorem ipsum dolor sit amet consectetur. Ut est sed vitae tortor.</p>

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
                                            <input type="text" className="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="addon-wrapping" required/>
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
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px", border:"none", backgroundColor:" aliceblue" }}></textarea>
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

export default OurService