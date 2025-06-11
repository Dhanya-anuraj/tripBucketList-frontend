
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Hedr() {
  return (
   <>
   <Navbar style={{backgroundColor:"rgb(117,225,225)"}}>
        <div className='container-fluid px-5'>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand  className='fs-2 fw-medium 'style={{color:"rgb(9,64,142"}}>
              <img
                alt=""
                src="https://cdn.vectorstock.com/i/1000v/82/31/travel-logo-icon-design-vector-22948231.jpg"
                className="d-inline-block me-2 " style={{width:"50px" , height:"50px" , borderRadius:'100%'}}
              />
              TRIP BUCKET
            </Navbar.Brand>
          </Link>
        </div>
      </Navbar>
   </>
  )
}

export default Hedr

