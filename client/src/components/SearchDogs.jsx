import React from 'react';
import { useState } from 'react';
import {useDispatch} from "react-redux"
import{searchDogs}from "../redux/actions/index"
import s from "../styles/search.module.css"

const SearchDogs = () => {
     const dispatch= useDispatch()
     const[search, setSearch]= useState("")

     function handleChange(e){
        e.preventDefault()
        setSearch(e.target.value)
        dispatch(searchDogs(search))
    }
    

    return (
        <div className={s.search}>
            <p>Search by breed</p>
            <i className="fa-solid fa-paw"></i>
                <input type="text" 
                onChange={(e)=>handleChange(e)}
                />
        </div>
    );
};

export default SearchDogs;