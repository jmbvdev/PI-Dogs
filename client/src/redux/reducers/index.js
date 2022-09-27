import { GET_DOGS,GET_DOG_DETAILS,SEARCH_DOGS } from "../actions"
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
        };
        case SEARCH_DOGS:
            return{
                ...state,
                dogs:action.payload
            }    
         
    default:
      return{
        ...state
      }
}
    
}