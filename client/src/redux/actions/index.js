import axios from "axios"
const url="http://localhost:3001"
export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";
export const SEARCH_DOGS="SEARCH_DOGS"


//Get all dogs------------
export function getDogs(){
    return async function(dispatch){
        return axios.get(url+"/dogs")
        .then(res=>{
            dispatch({
                type:GET_DOGS,
                payload: res.data
            })
        })
        .catch(err=>console.log(err))

    }
}

//Get Dog By ID------------

export function getDogDetails(id){
    return async function(dispatch){
        return axios.get(url+`/dogs/${id}`)
        .then(res=>{
            dispatch({
                type:GET_DOG_DETAILS,
                payload: res.data
            })
        })
        .catch(err=>console.log(err))

    }
}

export function searchDogs(name){
    return async function(dispatch){
        return axios.get(url+`/dogs?name=${name}`)
        .then(res=>{
            dispatch({
                type:SEARCH_DOGS,
                payload: res.data
            })
        })
        .catch(err=>console.log(err))

    }
}
