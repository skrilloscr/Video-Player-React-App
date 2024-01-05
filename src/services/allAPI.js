import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

// upload a video
export const uploadVideo = async (reqBody)=>{
    // make post http request to http://localhost:4000/videos to get all videos from json server ad return response to Add Component
    return await commonAPI("POST",`${serverURL}/videos`,reqBody)
}

// get all videos from json server
export const getAllVideo = async ()=>{
    // make get http request to http://localhost4000/videos to get all videos from json server and return response to view component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}

// get a video from json server
export const getAVideo = async (id)=>{
    // make get http request to http://localhost4000/videos/id to get a video from json server and return response to videoCard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}

// delete a video from json server
export const deleteAVideo = async (id)=>{
    // make delete http request to http://localhost4000/videos/id to remove a video from json server and return response to videoCard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`,{})
}


// store watching video hystory to json server
export const addToHistory = async (videoDetails)=>{
    // make post http request to http://localhost:4000/history to get  video history in json server and return response to videoCard component
    return await commonAPI("POST",`${serverURL}/history`,videoDetails)
}

// store watching video hystory to json server
export const getAllHistory = async ()=>{
    // make get http request to http://localhost:4000/history to get  video history from json server and return response to watch history component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

// delete watching video history from json server
export const deleteHistory = async (id)=>{
    // make delete http request to http://localhost4000/videos/id to delete video history json server and return response to watch history component
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}


// add a catogory to json server
export const addCategory = async (reqBody)=>{
    // make post http request to http//:localhost:4000/categories to add category in json server and return response to category component
    return await commonAPI("POST",`${serverURL}/categories`,reqBody)

}

// get all category from json server
export const getAllCategory = async ()=>{
    // make get http request to http//:localhost:4000/categories to get all category from json server and return response to category component
    return await commonAPI("GET",`${serverURL}/categories`,"")
    
}

// remove a category from  json server
export const deleteCategory = async (id)=>{
    // make delete http request to http//:localhost:4000/categories to delete particular category from json server and return response to category component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
    
}

// update a category from json server
export const updateCategory = async (id,body)=>{
    // make put http request to http://localhost:4000/categories/id to update a particulat category from json server and return response to category component
    return await commonAPI("PUT",`${serverURL}/categories/${id}`,body)
}


