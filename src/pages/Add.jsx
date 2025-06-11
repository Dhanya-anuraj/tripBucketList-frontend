import React, { useState } from 'react'
import View from '../components/View'
import {ToastContainer , toast} from 'react-toastify'
import { addDestinationApi } from '../../Services/allAPI';
function Add() {
 
  const[destinationDetails ,setDestinationDetails] = useState({
    country:"",
    place:"",
    imageurl:"",
    expDate:"",
    notes:""
  })
  // console.log(destinationDetails);
  

  const handleReset = ()=>{
    setDestinationDetails({
    country:"",
    place:"",
    imageurl:"",
    expDate:"",
    notes:""
   } )
  }

  const handleUpload = async()=>{
    const {country,place,imageurl,expDate,notes} = destinationDetails

    if(!country || !place || !imageurl || !expDate || !notes){
      toast.info('Please fill the form completely')
    }
    else{
      const result = await addDestinationApi(destinationDetails)
      // console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success("Your Destination Added Successfully")
        handleReset()
      }
      else{
        toast.error("Something went wrong")
        handleReset()
      }
      
    }
  }


  
  return (
    <>
    <div className='container-fluid' >
      <div className="row " >
        <div className="col-md-3" style={{backgroundColor:"rgb(198, 224, 245)"}}>
           
              <h4 style={{color:"rgb(9,64,142"}} className='text-center mt-5'>ADD BUCKET LIST</h4 >
            <form className='px-4 mt-5'>
              <div className="mb-3 mt-3">
                <input value={destinationDetails.country} type="text" placeholder='Country ' className='form-control' onChange={(e)=>setDestinationDetails({...destinationDetails, country: e.target.value })} />
              </div>
              <div className="mb-3">
                <input  value={destinationDetails.place} type="text" placeholder='Place' className='form-control' onChange={(e)=>setDestinationDetails({...destinationDetails, place: e.target.value })} />
              </div>
              <div className="mb-3">
                <input  value={destinationDetails.imageurl} type="text" placeholder='Image Url' className='form-control' onChange={(e)=>setDestinationDetails({...destinationDetails, imageurl: e.target.value })}/>
              </div>
              <div className="mb-3">
                <input type="date"  value={destinationDetails.expDate}  className='form-control' onChange={(e)=>setDestinationDetails({...destinationDetails, expDate: e.target.value })}/>
              </div>
              <div className="mb-3">
                <textarea  value={destinationDetails.notes} className='form-control pb-5' placeholder='Notes for the trip' onChange={(e)=>setDestinationDetails({...destinationDetails, notes: e.target.value })}/>
              </div>
            </form>
             <div className="mb-5 d-md-flex justify-content-between align-items-center px-4">
                <button className='btn btn-primary w-100' onClick={handleUpload}>SUBMIT</button>
                <button className='btn border border-primary text-primary w-100 ms-md-2 mt-md-0 mt-3' onClick={handleReset}>Reset</button>

              </div>
        </div>
        <div className="col-md-9">
          <View destinationDetails={destinationDetails} />
        </div>
      </div>
    </div>
    <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default Add
