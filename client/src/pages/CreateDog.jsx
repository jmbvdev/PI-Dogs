import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Alert from '../components/Alert';
import AlertTemperament from '../components/AlertTemperament';
import { addDog, getTemperaments } from '../redux/actions';
import s from "../styles/createDog.module.css";
const{validate}=require("../utils/validator");
const{temperamentsUnic}=require("../utils/unics");


const CreateDog = () => {
    const dispatch= useDispatch()
    const history= useHistory()
 
    useEffect(()=>{
     dispatch(getTemperaments())
    },[dispatch])

//----------------local states--------------------------------

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
    const[completeAlert, setCompleteAlert]= useState(false)
    const[temperamentAlert, setTemperamentAlert]= useState(false)
    const temperaments= useSelector((state)=>state.temperaments)
    const dark= useSelector(state=>state.dark)

//---Handlers----------------------------------------------------

    function handleClickBack() {
      history.push("/home");
    }

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
        setTemperamentAlert(true)
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
      setCompleteAlert(true)
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
 //--------------------------------------------------------------------------    
 

    return (
      <div  className={dark? s.dark_container:s.container}>
        {
          temperamentAlert&&
          <div className={s.temperament_alert}>
            <AlertTemperament setTemperamentAlert={setTemperamentAlert}/>
          </div>
        }
        {
          completeAlert&&
        <div className={s.complete_alert}>
              <Alert setCompleteAlert={setCompleteAlert}/>

        </div>

        }
         <div className={dark?s.dark_btn_back:s.btn_back}>
            <button onClick={handleClickBack}><i className="fa-solid fa-circle-chevron-left"></i></button>

            </div>
        <div className={s.background}>
        <form className={s.form} onSubmit={handleSubmit}>
        <h4>CREATE YOUR OWN DOG</h4>
          <div className={s.input_container}>
            <label title='name'>Name: </label>
            <input
              key="name"
              type="text"
              name="name"
              placeholder="Dog name..."
              onChange={(e) => handleInputChange(e)}
              value={dog.name}
            />
            {errors.name && <p className={s.error}>{errors.name}</p>}
          </div>
          <div className={s.input_container}>
            <label title='minHeight' >Min Height:</label>
            <input
              key="minHeight"
              type="number"
              name="minHeight"
              placeholder="Minimum Height"
              onChange={(e) => handleInputChange(e)}
              value={dog.minHeight}
              min="1"

            />
            {errors.minHeight && <p className={s.error}>{errors.minHeight}</p>}
          </div>
          <div className={s.input_container}>
            <label title="maxHeight">M??x Height:</label>
            <input
              key="maxHeight"
              type="number"
              name="maxHeight"
              placeholder="M??ximum Height"
              onChange={(e) => handleInputChange(e)}
              value={dog.maxHeight}
              min={dog.minHeight}
            />
            {errors.maxHeight && <p className={s.error}>{errors.maxHeight}</p>}
          </div>
          <div className={s.input_container}>
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
            {errors.minWeight && <p className={s.error}>{errors.minWeight}</p>}
          </div>
          <div className={s.input_container}>
            <label title="maxWeight">M??x Weight:</label>
            <input
              key="maxWeight"
              type="number"
              name="maxWeight"
              placeholder="M??ximum Height"
              onChange={(e) => handleInputChange(e)}
              value={dog.maxWeight}
              min={dog.minWeight}
            />
            {errors.maxWeight && <p className={s.error}>{errors.maxWeight}</p>}
          </div>
          <div className={s.input_container}>
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
            {errors.minLife && <p className={s.error}>{errors.minLife}</p>}
          </div>
          <div className={s.input_container}>
            <label title="maxLife">M??x life</label>
            <input
              key="maxLife"
              type="number"
              name="maxLife"
              placeholder="M??ximum Life Span"
              onChange={(e) => handleInputChange(e)}
              value={dog.maxLife}
              min={dog.minLife}
            />
            {errors.maxLife && <p className={s.error}>{errors.maxLife}</p>}
          </div>
          <div className={s.input_container}>
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
            {errors.image && <p className={s.error}>{errors.image}</p>}
          </div>
          <div className={s.temperaments}>
            <label>Temperaments:</label>
            <select
              multiple={true}
              key="temperaments"
              name="temperaments"
              onChange={(e) => handleErrorSelect(e)}
              required
              value={dog.temperaments}
            >
              {temperamentsUnic(temperaments)?.map((t) => (
                <option className={s.option} value={t} key={t}>
                  {t}
                </option>
              ))}
            </select>
            <div className={s.temperaments_container}>

              {dog.temperaments.map((t) => (
                <div className={s.temperament} key={t}>
                  <button type="button" onClick={() => deleteTemp(t)}>
                  <i className="fa-solid fa-xmark"></i>
                  </button>
                  <p >{t}</p>
                </div>
              ))}
            </div>

          </div>
          {errors.select && <p className={s.errors}>{errors.select}</p>}
          {(
            dog.name.length>0&&
            !errors.name&&
            !errors.minHeigh&&
            !errors.maxHeight&&
            !errors.minWeight&&
            !errors.maxWeight&&
            !errors.maxLife&&
            !errors.minLife&&
            !errors.image&&
            dog.temperaments.length>0
          ) ? <button className={s.submit} type="submit" name="submit" onClick={(e) => handleSubmit(e)}>
          submit
        </button>:<p className={s.errors}>You must enter all the data to submit</p>}
        </form>
        </div>
      </div>
    );
};

export default CreateDog;