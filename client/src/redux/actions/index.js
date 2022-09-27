import axios from "axios"
const url="http://localhost:3001"
export const GET_DOGS = "GET_DOGS";

export function getDogs(){
    return async function(dispatch){
        return axios.get(url+"/dogs")
        .then(res=>{
            dispatch({
                type:GET_DOGS,
                payload: res.data
            })
        })

    }
}

