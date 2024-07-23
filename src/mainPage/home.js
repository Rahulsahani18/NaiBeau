import React from 'react'
import './home.css'
import RedBackgroundImg from '../Images/red_low_background.jpg'
import BarberLogo from '../Images/BarberImg.png'
import Frame1 from '../Images/Frame1.png'
import Frame2 from '../Images/Frame2.png'
import Frame3 from '../Images/Frame3.png'
import Frame4 from '../Images/Frame4.png'
import Frame5 from '../Images/Frame5.png'
import Frame6 from '../Images/Frame6.png'
import Frame7 from '../Images/Frame7.png'
import ContactUsImg from '../Images/Frame8.png'
import GoogleBtn from '../Images/Google Play Btn.png'
import AppleBtn from '../Images/Apple Btn.png'
import iPhone from '../Images/iPhone 13.png'
import { Link } from 'react-router-dom'


const home = () => {




    return (
        <>
            <div className='row RedImgRow'>


                <img className='RedBackgrondImg img-fluid' src={RedBackgroundImg} alt='Pic' />


                <div className=' col-md-6 col-12 Left_Text'>
                    <div className='MainText'>
                    <h1 style={{ textShadow: '2px 2px 3px gray' }}>YOUR NEXT LOOK A TAP AWAY!</h1>

                        <p>Get NAIBEAU for your next booking, We are here to help you to get your next salon service smooth and convenient</p>
                    </div>
                    <div className='row ms--md-5 mt-5'>
                        <div className='col-md-6 col-12 mb-5 ps-md-5'>
                            <div className="input-group flex-nowrap  ms-md-4 input-group1">
                                <span className="input-group-text " id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                                <input style={{ fontSize: "15px" }} type="text" className="form-control  " placeholder="What are you Looking for?" aria-label="Username" />
                            </div>
                        </div>
                        <div className='col-md-6  col-12 exploreBtn'>
                            <button type="button" className="btn btn-danger ms-md-5">Explore Now  <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>
                <div className=' col-md-6 col-12 Right_Img'>

                    <img className='BarberPic img-fluid ' src={BarberLogo} alt='Pic' />
                </div>
            </div>


            <div className='row'>
                <div className='col-md-12 mt-5 text-center'>
                    <div>
                        <h4>What We Offer?</h4>
                        <p className='text-muted p-2'>An NAIBEAU we Offer conveniency and comfortable. Are you thiered of finding right salon? We are here to help
                            you. Our salon partner offer home services and salon booking services on one tap. Book your nearest salon by comparing their Distance, Rating & Pricing.
                        </p>
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

            {/* 
ABOUT US */}

            <div className='row'>
                <div className='col-md-6  '>
                    <div className="container mt-5 Frame ">
                        <div className=" ">
                            <div>
                                <img src={Frame3} className="card-img-top Frame3 " alt="Card" />
                            </div>


                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="container mt-5 Frame ">
                        <div className=" pt-4 ps-4">
                            <h2 className='ps-1'>ABOUT US</h2>
                            <p className='text-muted p-2'>Naibeau providing conveniency to customers  where customers can Book salon which helps customers' to not to be in waiting line at barber shop.Our salon partners helps customers to provide home services to our beloved customers. By providing online platform/profile on Naibeau It helps barbers to expand their business and promote their services directly to customers. Naibeau provides one stop solution for beauty salon/individual and customers.</p>
                            <Link to='about' ><button type="button" className="btn btn-danger ms-1">Explore Now  <i className="fa-solid fa-arrow-right"></i></button></Link>
                        </div>

                    </div>

                </div>
            </div>


            {/* 4TH FRAME */}
            <div className='row'>
                <div className='col-md-6  '>
                    <div className="container mt-5 Frame ">

                        <div className="container mt-5 Frame ">
                            <div className=" ps-4">
                                <h2 className=''>Our Concerns for your Safety</h2>
                                <p className='text-muted p-2'>Our top priorities are maintaining a clean and sanitized environment, ensuring the health of our staff and clients, and practicing safe and hygienic grooming procedures. Your safety and well-being are our utmost concerns. Thank you for trusting us.</p>
                                <Link to='safety' ><button type="button" className="btn btn-danger ms-1">Explore Now  <i className="fa-solid fa-arrow-right"></i></button></Link>
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

            {/* 5th FRAME */}

            <div className='row'>
                <div className='col-md-12 mt-5 text-center'>
                    <div>
                        <h4>Explore Our Gallery</h4>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 mt-2 '>
                    <div style={{ width: "-10rem" }}>
                        <img src={Frame5} className=' p-md-5 p-2' style={{ width: "100%" }} alt='Frame' />
                    </div>
                </div>
            </div>

            {/* 6th FRAME */}

            <div className='row'>
                <div className='col-md-12 mt-4 text-center'>
                    <div>
                        <h4>Why Choose Us</h4>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12  '>
                    <div className="container mt-5 Frame ">
                        <div className=" ">
                            <div>
                                <img src={Frame6} className="card-img-top Frame3 " alt="Card" style={{ height: "100%", width: "100%" }} />
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            <div className='row'>
                <div className='col-md-12  '>
                    <div className="container mt-2 Frame ">
                        <div className=" ">
                            <div>
                                <img src={Frame7} className="card-img-top Frame3 " alt="Card" style={{ height: "100%", width: "100%" }} />
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            {/* 8th FRAME */}
            <div className='row mt-4 Frame8Row'>
                <div className='col-md-6 col-12'>
                    <div className='ms-5 mt-5'>
                        <h1 >For better experience
                            Download the XYZ now!</h1>

                        <p>we are available on your Favorite Play and apple store </p>
                    </div>
                    <div className='row ms-md-5 mt-5 '>
                        <div className='col-md-6 mb-5  col-6 '>
                            <img src={GoogleBtn} className='ms-md-3 img-fluid GoogleBtn' alt='Google Play Btn' />
                        </div>
                        <div className='col-md-6 col-6 '>
                            <img src={AppleBtn} className='ms-md-3  img-fluid AppleBtn ' alt='Apple Btn' />
                        </div>
                    </div>

                </div>
                <div className='col-md-6 col-12 d-flex justify-content-center'>
                    <div >
                        <img src={iPhone} className='iphonePic img-fluid' alt='iphone Pic' />
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
                        <div className="card me-md-5">
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
export default home