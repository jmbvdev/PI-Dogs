const { Router } = require('express');
const router = Router();
require('dotenv').config();
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,API_KEY
} = process.env;
const axios= require("axios");
const {Dog,Temperament} = require('../db.js');


// GET https://api.thedogapi.com/v1/breeds
// GET https://api.thedogapi.com/v1/breeds/search?q={raza_perro}

const getApiDogs = async () => {
    const apiReq= await axios.get( `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const data= await apiReq.data.map(dog=>{
        return {
            id:dog.id,
            name:dog.name,
            height:dog.height.metric,
            weigth:dog.weight.metric,
            yearsLife:dog.life_span,
            temperament:dog.temperament,
            image:dog.image.url
        }
    })
    return data
};

  const getDbDogs=async()=>{
    return await Dog.findAll({ include: [Temperament] });
  }

const getDogs=async()=>{
    const api=await getApiDogs()
    const dtb=await getDbDogs()
    let data=[...api,...dtb]
    return data
}

router.get('/', async (req,res)=>{
    const name = req.query.name 
    let dogs = await getDogs()
    if(name){ 
        let dogsPerName = await dogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
        if (dogsPerName.length<1) {
           return res.status(404).send("No se encontro perro con ese nombre");
        }     
        res.status(200).json(dogsPerName)
      
    }else{   
        res.status(200).json(dogs)
    }
   })
   

module.exports = router;