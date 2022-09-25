const { Router } = require('express');
const router = Router();
require('dotenv').config();
const path = require('path');
const {
  API_KEY
} = process.env;
const axios= require("axios");
const {Dog,Temperament} = require('../db.js');
const{getApiDogs}=require("../controllers/index")


 // --------get("/temperaments")------------------
router.get("/", async (req, res) => {
  try {
    let dogApi = await getApiDogs();
    const tempsDB = await Temperament.findAll({ include: [Dog] });
    if (tempsDB.length === 0) {
      const tempsDataBase = await dogApi
        .map((dog) => dog.temperament)
        .join()
        .split(",");
      const temps = await tempsDataBase.map((temp) => temp.trim());
      temps.forEach((t) => {
        if (t !== "") {
          Temperament.findOrCreate({
            where: {
              name: t,
            },
          });
        }
      });
      const dbTemp = await Temperament.findAll();
      if (!dbTemp) return res.status(404).send("Temperaments not found");
      res.json(dbTemp);
    } else {
      res.json(tempsDB);
    }
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;