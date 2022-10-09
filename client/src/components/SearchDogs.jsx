import React from 'react';
import { useState } from 'react';
import {useDispatch} from "react-redux"
import{isBuffering, searchDogs}from "../redux/actions/index"
import s from "../styles/search.module.css"

const SearchDogs = ({dark, buffering}) => {
     const dispatch= useDispatch()
     const[search, setSearch]= useState("")

    

     function handleChange(e){
        e.preventDefault()
        setSearch(e.target.value)
    }
    function handleSearch(e) {
        e.preventDefault()
        dispatch(searchDogs(search))
        dispatch(isBuffering(true))
      
        
    }

    return (
        <div className={dark?s.dark_search:s.search}>
            <p>Search by breed</p>
            <i  onClick={(e)=>handleSearch(e)} className="fa-solid fa-paw"></i>
                <input type="text" 
                onChange={(e)=>handleChange(e)}
                />

               
        </div>
    );
};

export default SearchDogs;