import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDog, getDogDetails, getTemperaments } from '../redux/actions';
const{validate}=require("../utils/validator")


const CreateDog = () => {
    const dispatch= useDispatch()
 
    useEffect(()=>{
     dispatch(getTemperaments())

    },[])

    const[dog, setDog]= useState({
        name:"",
        minHeight:"",
        maxHeight:"",
        minWeight:"",
        maxWeight:"",
        minLife:"",
        maxLife:"",
        image:"",
        temperaments:[]
    })
    const [errors, setErrors]= useState({})
    const temperaments= useSelector((state)=>state.temperaments)

    function handleInputChange(e) {
      e.preventDefault();
      setDog({
        ...dog,
        [e.target.name]: e.target.value,
      });
      setErrors(
        validate({
          ...dog,
          [e.target.name]: e.target.value,
        })
      );
    }
    function handleErrorSelect(e) {
      if (dog.temperaments.includes(e.target.value)) {
        errors.select = "Remember you can't add the same temperament!";
      } else if (dog.temperaments.length < 6) {
        setDog({
          ...dog,
          temperaments: [...dog.temperaments, e.target.value],
        });
      } else {
        alert("You can't add more than six temperaments!");
      }
      return errors;
    }

    function deleteTemp(temp){
        setDog({
            ...dog,
            temperaments:dog.temperaments.filter((t)=>t !==temp)
        })
    }
    function handleSubmit(e) {
      e.preventDefault();
      setErrors(dog);
      dispatch(addDog(dog));
      setDog({
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        minLife: "",
        maxLife: "",
        image: "",
        temperaments: [],
      });
      setErrors({});
    }
    validate(dog)
  
     const temperamentsUnic=[]
     for (let i = 0; i < temperaments.length; i++) {
      temperamentsUnic.push(temperaments[i].name)
      
     }
    const temperamentSelect=[...new Set(temperamentsUnic)]
 

    return (
      <div onSubmit={handleSubmit}>
        <h1>Create your own dog</h1>
        <form action="">
          <div className="input-container">
            <label title="name">Name:</label>
            <input
              key="name"
              type="text"
              name="name"
              placeholder="Dog name..."
              onChange={(e) => handleInputChange(e)}
              value={dog.name}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className="input-container">
            <label title="minHeight">Min Height:</label>
            <input
              key="minHeight"
              type="number"
              name="minHeight"
              placeholder="Minimum Height"
              onChange={(e) => handleInputChange(e)}
              value={dog.minHeight}
              min="1"

            />
            {errors.minHeight && <p>{errors.minHeight}</p>}
          </div>
          <div className="input-container">
            <label title="maxHeight">Max Height:</label>
            <input
              key="maxHeight"
              type="number"
              name="maxHeight"
              placeholder="Máximum Height"
              onChange={(e) => handleInputChange(e)}
              value={dog.maxHeight}
              min={dog.minHeight}
            />
            {errors.maxHeight && <p>{errors.maxHeight}</p>}
          </div>
          <div className="input-container">
            <label title="minWeight">Min Weight:</label>
            <input
              key="minWeight"
              type="number"
              name="minWeight"
              placeholder="Minimum Weight"
              onChange={(e) => handleInputChange(e)}
              value={dog.minWeight}
              min="1"
            />
            {errors.minWeight && <p>{errors.minWeight}</p>}
          </div>
          <div className="input-container">
            <label title="maxWeight">Max Weight:</label>
            <input
              key="maxWeight"
              type="number"
              name="maxWeight"
              placeholder="Máximum Height"
              onChange={(e) => handleInputChange(e)}
              value={dog.maxWeight}
              min={dog.minWeight}
            />
            {errors.maxWeight && <p>{errors.maxWeight}</p>}
          </div>
          <div className="input-container">
            <label title="minLife">Min life</label>
            <input
              key="minLife"
              type="number"
              name="minLife"
              placeholder="Minimum Life Span"
              onChange={(e) => handleInputChange(e)}
              value={dog.minLife}
              min="1"
            />
            {errors.minLife && <p>{errors.minLife}</p>}
          </div>
          <div className="input-container">
            <label title="maxLife">Max life</label>
            <input
              key="maxLife"
              type="number"
              name="maxLife"
              placeholder="Máximum Life Span"
              onChange={(e) => handleInputChange(e)}
              value={dog.maxLife}
              min={dog.minLife}
            />
            {errors.maxLife && <p>{errors.maxLife}</p>}
          </div>
          <div className="input-container">
            <label title="image">Image:</label>
            <input
              key="image"
              type="text"
              name="image"
              placeholder="URL image"
              onChange={(e) => handleInputChange(e)}
              value={dog.image}
              min="1"
            />
            {errors.image && <p>{errors.image}</p>}
          </div>
          <div>
            <label>Temperaments:</label>
            <select
              multiple={true}
              key="temperaments"
              name="temperaments"
              onChange={(e) => handleErrorSelect(e)}
              required
              value={dog.temperaments}
            >
              {temperamentSelect?.map((t) => (
                <option value={t} key={t}>
                  {t}
                </option>
              ))}
            </select>

            {dog.temperaments.map((t) => (
              <div key={t}>
                <p>{t}</p>
                <button type="button" onClick={() => deleteTemp(t)}>
                  x
                </button>
              </div>
            ))}
          </div>
          {errors.select && <p>{errors.select}</p>}
          {(
            dog.name!=="" &&
            dog.minHeight!==""&&
            dog.maxHeight!=="" &&
            dog.minWeight!=="" &&
            dog.maxWeight!=="" &&
            dog.maxLife!=="" &&
            dog.minLife!=="" &&
            dog.image!==""&&
            dog.temperaments.length>0
          ) ? <button type="submit" name="submit" onClick={(e) => handleSubmit(e)}>
          submit
        </button>:<p>You must enter all the data to submit</p>}
          
        </form>
      </div>
    );
};

export default CreateDog;