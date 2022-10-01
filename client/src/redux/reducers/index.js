import { GET_DOGS,GET_DOG_DETAILS,SEARCH_DOGS,GET_TEMPERAMENTS,ADD_DOG, FILTER_BY_TEMPERAMENTS, FILTER_BY_RACES, FILTER_BY_ORIGIN,ORDER_BY_ALPHABET,ORDER_BY_WEIGHT } from "../actions"
const initialState={
dogs:[],
allDogs:[],
temperaments:[],
dogDetails:{}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    case GET_DOG_DETAILS:
      return {
        ...state,
        dogDetails: action.payload,
      };
    case SEARCH_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case ADD_DOG:
      return {
        ...state,
      };
    case FILTER_BY_TEMPERAMENTS:
      const filterTemperament = state.allDogs;
      const temperament =
        action.payload === "all"
          ? filterTemperament
          : state.dogs.filter((e) =>
              e.temperaments.length > 1
                ? e.temperaments.map((e) => e.name).includes(action.payload)
                : e.temperaments[0].includes(action.payload)
            );

      return {
        ...state,
        dogs: temperament,
      };
      case FILTER_BY_RACES:
      const filterRace= state.allDogs;
      const races =
        action.payload === "all"
          ? filterRace
          : state.dogs.filter((e) => e.name===action.payload)
      return {
        ...state,
        dogs:races
      };
      case FILTER_BY_ORIGIN:
      const filterOrigin= state.allDogs;
      const origins =
        action.payload === "all"
          ? filterOrigin
          : state.dogs.filter((e) => 
          action.payload==="db"?e.id.length>3:typeof e.id=="number"
          )
      return {
        ...state,
        dogs:origins
      };
      case ORDER_BY_ALPHABET:
        const orderAlphabet= state.dogs;
        const order=
        action.payload===true? orderAlphabet.sort((a, b) => a.name.localeCompare(b.name))
        : orderAlphabet.sort((a, b) => b.name.localeCompare(a.name))
       
        return {
          ...state,
          dogs:order
          
        };
        case ORDER_BY_WEIGHT:
      
          action.payload===true? 
          state.dogs.sort((b, a) => {
            if (parseInt(a.weight)> parseInt(b.weight)) return 1;
            if (parseInt(a.weight) <parseInt(b.weight)) return -1;
            return 0;
        }):
        state.dogs.sort((a, b) => {
          if (parseInt(a.weight)> parseInt(b.weight)) return 1;
          if (parseInt(a.weight) <parseInt(b.weight)) return -1;
          return 0;
      })
          return {
            ...state,
            dogs:state.dogs
            
          };

    default:
      return {
        ...state,
      };
  }
}