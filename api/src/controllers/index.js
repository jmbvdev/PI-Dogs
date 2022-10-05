require('dotenv').config();
const path = require('path');
const {
  API_KEY
} = process.env;
const axios= require("axios");
const {Dog,Temperament} = require('../db.js');

const getApiDogs = async () => {
    const apiReq= await axios.get( `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const data= await apiReq.data.map(dog=>{
      function validate(){
        if(dog.weight.metric ==="NaN"){
            return "10-50"
        }else if(dog.weight.metric.includes("NaN")){
          const cut=dog.weight.metric.split("-")
          if (cut[0]==="NaN") return split[1]
          if (cut[1]==="NaN") return split[0]  
        }else{
          return dog.weight.metric
        }  
       }
        return {
            id:dog.id,
            name:dog.name,
            height:dog.height.metric,
            weight:validate(),
            yearsLife:dog.life_span,
            temperaments:dog.temperament? [dog.temperament].join().split(" ,").map((dog)=>dog.trim()):["Friendly"," Loyal"],
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