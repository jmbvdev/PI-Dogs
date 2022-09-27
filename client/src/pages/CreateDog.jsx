import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDog, getTemperaments } from '../redux/actions';

const CreateDog = () => {
    const dispatch= useDispatch()
    // "name": "Henridcito",
	// "height": "64 - 69",
	// "weight": "23 - 27",
	// "yearsLife":"10 - 12 years",
	// "image": "https://www.rd.com/wp-content/uploads/2019/01/shutterstock_673465372.jpg",
	// "temperament":["Happy","Active"]
    useEffect(()=>{
     dispatch(getTemperaments())

    },[])

    const[dog, setDog]= useState({
        name:"",
        height:"",
        weight:"",
        yearsLife:"",
        image:"",
        temperaments:[]
    })
    const temperaments= useSelector((state)=>state.temperaments)

    function handleInputChange(e){
      
        setDog({
            ...dog,
            [e.target.name]:e.target.value
        })
        
    
    }
    function handleSelect(e){

        if (dog.temperaments.includes(e.target.value)) {
            alert("You already selected this temperament. Try again.");
          } else if(dog.temperaments.length < 6){
            setDog({
          ...dog,
          temperaments:[...dog.temperaments,e.target.value] 
          })
        }else{
            alert("Can´t add more than 6")
        }   
    }

    function deleteTemp(temp){
        setDog({
            ...dog,
            temperaments:dog.temperaments.filter((t)=>t !==temp)
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(addDog(dog))
        // alert("Perro exitosamente agregado")
        setDog({
            name:"",
        height:"",
        weight:"",
        yearsLife:"",
        image:"",
        temperaments:[]

        })
        //navigate.push('/home')

    }
    console.log(dog)
    return (
      <div onSubmit={handleSubmit}>
        <h1>Create your own dog</h1>
        <form action="">
            <div className='input-container'>
                <label title="name">Name:</label>
                <input
                    key="name"
                    type="text"
                    name="name"
                    placeholder="Dog name..."
                    onChange={(e) => handleInputChange(e)}
                    value={dog.name}
                />
            </div>
            <div className='input-container'>
                <label title="height">Height:</label>
                <input
                    key="height"
                    type="text"
                    name="height"
                    placeholder="Height (min-max) ex: 10-20"
                    onChange={(e) => handleInputChange(e)}
                    value={dog.height}
                />
            </div>
            <div className='input-container'>
                <label title="height">Weight:</label>
                <input
                    key="weight"
                    type="text"
                    name="weight"
                    placeholder="Weight (min-max) ex: 10-20"
                    onChange={(e) => handleInputChange(e)}
                    value={dog.weight}
                />
            </div>
            <div className='input-container'>
                <label title="yearsLife">Life Span:</label>
                <input
                    key="yearsLife"
                    type="text"
                    name="yearsLife"
                    placeholder="Life Span (min-max) ex: 10-20"
                    onChange={(e) => handleInputChange(e)}
                    value={dog.yearsLife}
                />
            </div>
            <div className='input-container'>
                <label title="image">Image:</label>
                <input
                    key="image"
                    type="text"
                    name="image"
                    placeholder="Type url image"
                    onChange={(e) => handleInputChange(e)}
                    value={dog.image}
                />
            </div>
            <div>
            <label>Temperaments:</label>
                    <select multiple={true} key="temperaments" name="temperaments" onChange={(e) => handleSelect(e)} required value={dog.temperaments}>
                        {
                            
                            temperaments?.map((t) => (
                                <option value={t.name} key={t.id} >
                                    {t.name}
                                </option>
                            ))
                        }
                    </select>
                   
            {dog.temperaments.map(t=>
                <div key={t}>
                    <p>{t}</p>
                    <button type="button" onClick={()=> deleteTemp(t)}>x</button>
                    </div>)}
            </div>
            <button type='submit' name='submit' onClick={(e)=>handleSubmit(e)}>submit</button>
        </form>
      </div>
    );
};

export default CreateDog;