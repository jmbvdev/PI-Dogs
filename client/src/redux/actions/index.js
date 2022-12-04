import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";
export const SEARCH_DOGS = "SEARCH_DOGS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const ADD_DOG = "ADD_DOG";
export const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS";
export const FILTER_BY_RACES = "FILTER_BY_RACES";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_BY_ALPHABET = "ORDER_BY_ALPHABET";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const DARK_MODE = "DARK_MODE";
export const IS_LOADING = "IS_LOADING";
export const DELETE_DOG = "DELETE_DOG";
export const IS_BUFFERING = "IS_BUFFERING";


//Get all dogs------------
export function getDogs() {
  return async function (dispatch) {
    return axios
      .get("/dogs")
      .then((res) => {
        dispatch({
          type: GET_DOGS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
}

//Get Dog By ID------------

export function getDogDetails(id) {
  return async function (dispatch) {
    return axios
      .get(`/dogs/${id}`)
      .then((res) => {
        dispatch({
          type: GET_DOG_DETAILS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
}
//----------Search Dogs------------
export function searchDogs(name) {
  return async function (dispatch) {
    return axios
      .get(`/dogs?name=${name}`)
      .then((res) => {
        dispatch({
          type: SEARCH_DOGS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
}
//----------Get Temperaments------------
export function getTemperaments() {
  return async function (dispatch) {
    return axios
      .get( `/temperaments`)
      .then((res) => {
        dispatch({
          type: GET_TEMPERAMENTS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
}
//----------Add Dog------------
export function addDog({
  name,
  minHeight,
  maxHeight,
  minWeight,
  maxWeight,
  minLife,
  maxLife,
  image,
  temperaments,
}) {
  return async function () {
    var resp = await axios.post("/dogs", {
      name,
      height: `${minHeight} - ${maxHeight}`,
      weight: `${minWeight} - ${maxWeight}`,
      yearsLife: `${minLife} - ${maxLife} years`,
      image,
      temperaments,
    });

    return resp;
  };
}
//----------Filter by Temperaments------------
export function filterByTemperaments(payload) {
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload,
  };
}
//----------Filter by Races------------
export function filterByRaces(payload) {
  return {
    type: FILTER_BY_RACES,
    payload,
  };
}
//----------Order by origin------------
export function filterByOrigin(payload) {
  return {
    type: FILTER_BY_ORIGIN,
    payload,
  };
}

//----------Order by ALPHABET------------
export function orderByAlphabet(payload) {
  return {
    type: ORDER_BY_ALPHABET,
    payload,
  };
}
//----------Order by Weight------------
export function orderByWeight(payload) {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
}
//----------Dark Mode------------
export function isDark(payload) {
  return {
    type: DARK_MODE,
    payload,
  };
}

//----------Loading------------
export function changeLoading(payload) {
  return {
    type: IS_LOADING,
    payload,
  };
}
//----------Delete Dog------------
export function deleteDog(id) {
  return async function (dispatch) {
    return axios
      .delete( `/dogs/${id}`)
      .then((res) => {
        dispatch({
          type: DELETE_DOG,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
}
//----------Buffering------------
export function isBuffering(payload) {
  return {
    type: IS_BUFFERING,
    payload,
  };
}


