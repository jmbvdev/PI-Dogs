import axios from "axios"
const url="http://localhost:3001"
export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";
export const SEARCH_DOGS="SEARCH_DOGS";
export const GET_TEMPERAMENTS="GET_TEMPERAMENTS"
export const ADD_DOG="ADD_DOG"
export const FILTER_BY_TEMPERAMENTS="FILTER_BY_TEMPERAMENTS"

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

export function getTemperaments(){
    return async function(dispatch){
        return axios.get(url+`/temperaments`)
        .then(res=>{
            dispatch({
                type:GET_TEMPERAMENTS,
                payload: res.data
            })
        })
        .catch(err=>console.log(err))

    }
}


export function addDog({name,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    minLife,
    maxLife,
    image,
    temperaments}) {
    return async function(){
        var resp = await axios.post("http://localhost:3001/dogs",{
            name,
            height:`${minHeight} - ${maxHeight}`,
            weight:`${minWeight} - ${maxWeight}`,
            yearsLife:`${minLife} - ${maxLife} years`,
            image,
            temperaments
        })
        return resp
  }

}



// filters
export function filterByTemperaments(payload){
        
    return  ({
        type:FILTER_BY_TEMPERAMENTS,
        payload,

    })
    }