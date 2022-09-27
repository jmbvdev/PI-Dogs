const { Router } = require('express');
const router = Router();
const {Dog,Temperament} = require('../db.js');
const{getDogs}=require("../controllers/index")


// GET https://api.thedogapi.com/v1/breeds
// GET https://api.thedogapi.com/v1/breeds/search?q={raza_perro}

 // --------get("/dogs")------------------
router.get('/', async (req,res)=>{
    const name = req.query.name 
    let dogs = await getDogs() //todos los datos, api y db
    if(name){ 
        let dogsPerName = await dogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
        if (dogsPerName.length<1) {
           return res.status(404).send(`Can't find dog with name: ${name}`);
        }    
        res.status(200).json(dogsPerName)
      
    }else{   
        res.status(200).json(dogs)
    }
   })
   // --------get("/dogs/:id")------------------
   router.get('/:id', async (req,res)=>{
    const id=req.params.id
    let dogs=await getDogs()

     let dog= dogs.find(d=>d.id==id)
  
    try {
        if (!dog)return res.status(404).send(`Can't find dog with id:${id}`)
        res.json(dog)
    
    } catch (error) {
        console.log(error)
    }
    
   })


// --------post("/dogs")------------------
router.post("/", async(req,res)=>{
    const { name, height, weight, image,yearsLife, temperaments } = req.body;
    if (!name && !height && !weight && !image) {
        res.status(404).send("Missing some required values")
    }
    try {
        const dog=await Dog.create({name, height, weight,yearsLife, image})
        
        let dogTemperament= await Temperament.findAll({
            where:{
                name:temperaments
            }
        })
        await dog.addTemperament(dogTemperament)
        res.status(201).send("the dog was successfully created")

    } catch (error) {
        console.log(error)
    }
})



module.exports = router;