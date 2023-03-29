const express = require("express");
const router = express.Router();
const  {CustomerController}  = require('../controllers');


//create paquete
router.post("/createCustomer",CustomerController.createCustomer);
//get  paquetes
router.post("/getCustomerById",CustomerController.getCustomerById);
  //get pack
  router.post("/deleteCustomer", CustomerController.deleteCustomer);
  //actualizar paquete
  router.post("/getCustomers",CustomerController.getCustomers);
  //eliminar paquete
  router.post("/updateCobro", CustomerController.updateCustomer );
  router.post("/getAllCustomers", CustomerController.getAllCustomers );

module.exports=router;