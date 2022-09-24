const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRouter=require("../middlewares/dogs")
const temperamentsRouter=require("../middlewares/temperaments")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs",dogsRouter)
router.use("/temperaments", temperamentsRouter)


module.exports = router;
