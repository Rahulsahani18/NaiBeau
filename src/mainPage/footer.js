import React from 'react'
import './footer.css'
import NaiLogo from '../Images/NaibeauLogo.png'
import GoogleBtn from '../Images/Google Play Btn.png'
import AppleBtn from '../Images/Apple Btn.png'
import Instagram from '../Images/instagram.png'
import facebook from '../Images/facebook.png'
import linkedin from '../Images/linkedin.png'
import whatSapp from '../Images/whatsapp.png'
import { Link } from 'react-router-dom'

const footer = () => { 
  return (
    <> 
      <footer className='mt-5 '>
        <div className='row Footer ' >
          <div className='col-md-4 col-12 text-center '>
            <div className='mt-4 ms-md-3'><img src={NaiLogo} className=' ' alt='Logo' style={{ height: "1.7rem" }}/></div>
            
            <p className='text-light  ms-3 mt-3' style={{ fontSize: "12px" }}>Naibeau is your go-to app for seamless beauty and wellness bookings. We connect you with top professionals and services, ensuring a premium and convenient experience tailored to your needs.</p>
            <br/>
            <div className='ms-4 pt-3 text-light fw-bold fs-3 footericons'>
             
              <a href='https://www.facebook.com/profile.php?id=61563181074987' className='p-3 '><img src={facebook}  style={{height:"32px"}} alt='facebook'/></a>
              <a href='https://www.instagram.com/naibeau.official/' className='p-3 '><img src={Instagram}  style={{height:"32px"}} alt='instagram'/></a>
              <a href='' className='p-3 '><img src={whatSapp}  style={{height:"32px"}} alt='whatsapp'/></a>
              <a href='https://www.linkedin.com/company/101476449/admin/feed/posts/' className='p-3 '><img src={linkedin}  style={{height:"32px"}} alt='linkedin'/></a>
              
            </div>
          </div>
          <div className='col-md-8 col-12'>
            <div className='row text-light  mt-3 Footer8 '>
              <div className='col-md-3 '>
                <span className='fw-bold footerHed'>Quick Links</span>
                <div className='ps-md-3 footerCol mt-3'>
                  <Link to='/' className=' footerCol'>Home</Link>
                  <br />
                  <br />
                  <Link to='services'  className=' footerCol'>Our Services</Link>
                  <br />
                  <br />
                  <Link to='safety'  className=' footerCol'>Safety</Link>
                  <br />
                  <br />
                  <Link to='about' className=' footerCol'>About Us</Link>
                  <br />
                  <br />
                  <Link to='contact'  className=' footerCol'>Contact Us</Link>
                </div>
              </div>
              <div className='col-md-3 col-12 '>
                <span className='fw-bold footerHed '>Services</span>
                <div className='mt-3 footerCol'>

                  <Link to='' className=' footerCol'>Salon Booking</Link>
                  <br />
                  <br />
                  <Link to='' className=' footerCol'>Barber Booking</Link>


                </div>
              </div>
              <div className='col-md-3 col-12 '>
                <span className='fw-bold footerHed'>Location</span>
                <div className='mt-3 footerCol'>

                  <Link to='' className=' footerCol'>Address</Link>
                  <br />
                  <br />
                  <Link to='contact' className=' footerCol'>Contact</Link>

                </div>
              </div>
              <div className='col-md-3  '>
                <h5 className='GetonlineApp'>Get online App</h5>
                <div className='row ms-md-5 mt-5  pe-md-5'>
                        <div className='col-md-12 mb-5 col-6 '>
                            <img src={GoogleBtn} className=' img-fluid ftGoogleBtn' alt='Google Play Btn' />
                        </div>
                        <div className='col-md-12 col-6 '>
                            <img src={AppleBtn} className=' img-fluid ftAppleBtn ' alt='Apple Btn' />
                        </div>
                    </div>





              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer