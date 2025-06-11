import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='main'>
        <div className='sub-main'>
          <div className="container">
            <div className="row text-white d-flex justify-content-center align-items-center pt-5">
              <div className="col-md-2"></div>
              <div className="col-md-8 d-md-flex  flex-column justify-content-center mt-md-5" >
                <h3 className='mt-5  fs-1  text-center fw-semibold' style={{color:"rgb(117,225,225)"}}>PLAN YOUR DREAM DESTINATION!</h3>
                <p className=' px-md-5 px-4 mt-3 ' style={{ textAlign: "justify" }}>Have you ever dreamed of sipping coffee in Rome, hiking the Himalayas, or watching cherry blossoms bloom in Japan? With Trip Bucket, you don’t need to book flights or make complicated plans. Just add your dream destinations to your personal travel wish list — a place where your wanderlust lives.

                  No dates. No budgets. Just the joy of imagining where you want to go someday.

                  Whether it’s five places or fifty, your list is all about you. You can revisit it anytime, add new places as they inspire you, and start dreaming again and again.
                  Because every great journey begins with a simple thought:
                  “One day, I want to go there.”</p>
                 <div className='my-3 d-flex justify-content-center align-items-center'> 
                  <Link to={'/add'}><button className='btn text-white  px-4 py-2 fw-semibold' style={{backgroundColor:"rgb(9,64,142)"}}>Let's Started</button></Link>
                  </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='pb-5' style={{backgroundColor:'rgb(117,225,200)'}}>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-6">
              <img src="https://youmatter.world/app/uploads/2019/11/travel-world.jpg" alt="no-image" style={{width:"100%", height:"100%"}} className=' rounded' />
            </div>
            <div className="col-md-6">
                <img src="https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.jpg?s=612x612&w=0&k=20&c=MewnsAhbeGRcMBN9_ZKhThmqPK6c8nCT8XYk5ZM_hdg=" alt="no-image" style={{width:"100%" , height:'300px'}} className='rounded mt-md-0 mt-4'/>
                
                <div className="row mt-4">
                  <div className="col-md-6">
                                    <img src="https://thumbs.dreamstime.com/b/happy-travel-woman-vacation-concept-funny-traveler-enjoy-her-trip-ready-to-adventure-happy-travel-woman-vacation-concept-118679424.jpg" alt="no-image" style={{width:"100%"}} className='rounded'/>

                  </div>
                  <div className="col-md-6">
                                    <img src="https://skylinkworld.com/uploads/sw-Parasailing_auli.jpg" alt="no-image"  style={{width:"100%" , height:"100%"}} className='rounded mt-md-0 mt-4'/>

                  </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
