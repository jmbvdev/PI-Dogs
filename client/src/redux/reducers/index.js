import { GET_DOGS,GET_DOG_DETAILS } from "../actions"
const initialState={
dogs:[],
temperaments:[],
dogDetails:{}
}

export default function reducer(state=initialState, action){
switch (action.type) {
    case GET_DOGS:
        return{
            ...state,
            dogs:action.payload
        };
        case GET_DOG_DETAILS:
        return{
            ...state,
            dogDetails:action.payload
        }
         
    default:
      return{
        ...state
      }
}
    
}