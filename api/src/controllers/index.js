require('dotenv').config();
const path = require('path');
const {
  API_KEY
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
            weight:dog.weight.metric,
            yearsLife:dog.life_span,
            temperaments: [dog.temperament].join().split(" ,").map((dog)=>dog.trim()),
            image:dog.image.url
        }
    })
    return data
};


  const getDbDogs=async()=>{
    return await Dog.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
    },
       include:{
        model:Temperament,
        attributes:["name"],
        through: {attributes: []}
       } 
      });
  }

const getDogs=async()=>{
    const api=await getApiDogs()
    const dtb=await getDbDogs()
    let data=[...dtb,...api]
    return data
}

module.exports={
    getApiDogs,getDbDogs,getDogs
}