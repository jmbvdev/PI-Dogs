import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import {  getDogDetails } from '../redux/actions';
import s from "../styles/dogDetails.module.css"


const DogDetails = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const history= useHistory()
 
    const dog=useSelector(state=>state.dogDetails)
    const dark= useSelector(state=>state.dark)

   useEffect(()=>{
       dispatch(getDogDetails(id))
  
     
   },[id, dispatch])

 //--------handler click--------------------
   function handleClickCreate() {
    history.push("/create");
  }
  function handleClickBack() {
    history.push("/home");

  
  }

    return (
      <div className={dark ? s.dark_details : s.details}>
        <div className={dark ? s.dark_btn : s.btn}>
          <button onClick={handleClickBack}>
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
        </div>
        {dog.image ? (
          <div className={dark ? s.dark_container : s.container}>
            <img src={dog.image} alt="" />
            <div className={dark ? s.dark_text : s.text}>
              <h1>{dog.name}</h1>
              <div className={dark ? s.dark_specs : s.specs}>
                <p>
                  <strong>Temperament: </strong>
                  {id.length > 3
                    ? dog?.temperaments?.map((t) => t.name + ", ")
                    : `${dog?.temperaments?.[0]}`}
                </p>
                <p>
                  <strong>Height: </strong>
                  {dog.height}
                </p>
                <p>
                  <strong>Weight: </strong>
                  {dog.weight}
                </p>
                <p>
                  <strong>Life Span: </strong>
                  {dog.yearsLife}
                </p>
                <button onClick={handleClickCreate}>
                  <i className="fa-solid fa-plus"></i> Create a dog
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
};

export default DogDetails;