import {  faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { deleteDestinationApi } from '../../Services/allAPI';
import { toast } from 'react-toastify';

function CardList({destination , setDeleteDestinationStatus}) {
  // console.log(destination);

  const deleteDestination = async(id)=>{
    const result = await deleteDestinationApi(id)
    // console.log(result);
    if(result.status>=200 && result.status<300){
      setDeleteDestinationStatus(result.data)
      toast.success('Your Destination Deleted Successfully')
    }
    else{
      toast.error('Something went wrong')
    }
    
  }
  
  
  return (
    <>
    <Card className='rounded p-2 mt-md-0 mt-3 mb-md-0 mb-2' style={{ width: '100%' }}>
       
          <Card.Img variant="top" src={destination?.imageurl} className=' rounded w-100' style={{  height:"150px"}}/>

           <div className='mx-2 mt-2'>
             <h5>{destination?.place} <span className='fs-6'>- {destination?.country}</span></h5>
             <h6>Expected Date : {destination?.expDate}</h6>
             <h6>{destination?.notes}</h6>
             <div className="my-3 d-flex justify-content-end">
              <button className='btn btn-danger me-3' onClick={()=>deleteDestination(destination?.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
             </div>
      
      </div>
    </Card>
    </>
  )
}

export default CardList


