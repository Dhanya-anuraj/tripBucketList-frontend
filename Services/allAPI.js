
import { commonApi } from "./commonApi"
import {serverurl} from './serverurl'

//api to add destination

export const addDestinationApi = async(reqBody)=>{
    return await commonApi('POST', `${serverurl}/destination`,reqBody)
}

//api to get all destinations

export const allDestinationApi = async()=>{
    return await commonApi('Get', `${serverurl}/destination`)
}

// api to delete destinations

export const deleteDestinationApi = async(id)=>{
    return await commonApi('DELETE',`${serverurl}/destination/${id}`,{})
}