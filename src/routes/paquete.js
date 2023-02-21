const express = require("express");
const paqueteSchema = require("../models/paquete");
const router = express.Router();
const  {PaqueteController}  = require('../controllers');


//create paquete
router.post("/pack",PaqueteController.createPack);
//get  paquetes
router.get("/pack",PaqueteController.getPacks);
  //get pack
  router.get("/pack/:id",PaqueteController.getPack);
  //actualizar paquete
  router.put("/pack/:id",PaqueteController.updatePack);
  //eliminar paquete
  router.delete("/pack/:id",PaqueteController.delatePack);

module.exports=router;