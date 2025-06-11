import { useEffect, useState } from 'react'
import { allDestinationApi } from '../../Services/allAPI'
import CardList from './CardList'

function View({destinationDetails}) {
  const [allDestination , setAllDestination] = useState([])
  const [deleteDestinationStatus ,setDeleteDestinationStatus] = useState({})

  const getAllDestinations = async()=>{
    const result = await allDestinationApi()
    // console.log(result);
    if(result.status>=200 && result.status<300){
      setAllDestination(result.data)
    } 
  }
  // console.log(allDestination);
  

  useEffect(()=>{
    getAllDestinations()
  },[destinationDetails , deleteDestinationStatus])
  return (
    <>
    <div className="container">
      <div className='mt-3'>
        <h4>Dream Destinations</h4>
      </div>

      <div className="container">
        <div className="row  mt-4">
          {
            allDestination?.length>0?
            allDestination.map((item , index)=>(
              <div className="col-md-3" key={index}>
           <CardList destination = {item} setDeleteDestinationStatus={setDeleteDestinationStatus}/>
          </div>
            ))
            :
          <p className='text-center text-danger mt-5 fw-semibold fs-3'>No Bucket List Added Yet</p>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default View
