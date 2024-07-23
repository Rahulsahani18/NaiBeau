import React from 'react'
import Frame3 from '../Images/Frame3.png'
import '../mainPage/home.css'
const about = () => {
  return (
    <>
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
              <h2 className='ps-1'>OUR ETHICS</h2>
              <p className='text-muted p-2'>We prioritize customer satisfaction, transparency, and trust. Our commitment to excellence drives us to partner with only the most reputable providers, ensuring quality, safety, and integrity in every service you book through Naibeau.</p>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default about