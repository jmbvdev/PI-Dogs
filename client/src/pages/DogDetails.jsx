import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDogDetails } from '../redux/actions';

const DogDetails = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const dog=useSelector(state=>state.dogDetails)
   useEffect(()=>{
    dispatch(getDogDetails(id))
   },[id])

    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.image} alt="" />
            <p><strong>Temperament: </strong>{id.length>3?dog.temperaments?.[0]?.name:dog.temperaments}</p>
            <p><strong>Height: </strong>{dog.height}</p>
            <p><strong>Weight: </strong>{dog.weight}</p>
            <p><strong>Life Span: </strong>{dog.yearsLife}</p>

        </div>
    );
};

export default DogDetails;