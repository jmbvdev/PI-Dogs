import React from 'react';
import { useState } from 'react';
import {useDispatch} from "react-redux"
import{searchDogs}from "../redux/actions/index"

const SearchDogs = () => {
     const dispatch= useDispatch()
     const[search, setSearch]= useState("")

     function handleChange(e){
        e.preventDefault()
        setSearch(e.target.value)
        dispatch(searchDogs(search))
    }
    

    return (
        <div>
            <input type="text" placeholder='search by race'
            onChange={handleChange}
            />
           
        </div>
    );
};

export default SearchDogs;