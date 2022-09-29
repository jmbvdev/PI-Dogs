import { GET_DOGS,GET_DOG_DETAILS,SEARCH_DOGS,GET_TEMPERAMENTS,ADD_DOG, FILTER_BY_TEMPERAMENTS } from "../actions"
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
          : filterTemperament.filter((e) =>
              e.temperaments.length > 1
                ? e.temperaments.map((e) => e.name).includes(action.payload)
                : e.temperaments[0].includes(action.payload)
            );

      return {
        ...state,
        dogs: temperament,
      };

    default:
      return {
        ...state,
      };
  }
}