import { faFacebook , faXTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
    <div className="container-fluid text-white py-3 " style={{backgroundColor:"rgb(9,64,142)" , overflow:"hidden"}}>
      
      <div className='d-flex justify-content-center align-items-center pt-3'>
        <FontAwesomeIcon className='me-4 fs-5' icon={faFacebook} />
        <FontAwesomeIcon className='me-4 fs-5' icon={faXTwitter} />
        <FontAwesomeIcon className='me-4 fs-5' icon={faInstagram} />
        <FontAwesomeIcon className='me-4 fs-5' icon={faYoutube} />
      </div>
      <p className='pt-2 text-center'>&copy; 2025 TravelBucket. All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer
