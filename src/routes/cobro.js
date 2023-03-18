const express = require("express");
const router = express.Router();
const  {CobroController}  = require('../controllers');


//create paquete
router.post("/createCobro",CobroController.createCobro);
//get  paquetes
router.post("/getCobroById",CobroController.getCobroById);
  //get pack
  router.post("/deleteCobro", CobroController.deleteCobro);
  //actualizar paquete
  router.post("/getCobros",CobroController.getCobros);
  //eliminar paquete
  router.post("/updateCobro",CobroController.updateCobro);

module.exports=router;