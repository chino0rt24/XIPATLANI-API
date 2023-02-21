const express = require("express");

const  {UserController}  = require('../controllers');


const router = express.Router();

//create user
router.post("/users",UserController.createUser);
//get users
router.get("/users",UserController.getUsers);
  //usuario especifico
  router.get("/users/:id",UserController.getUser);
  //actualizar usuario
  router.put("/users/:id",UserController.updateUser);
  //eliminar usuario
  router.delete("/users/:id",UserController.delateUser);

module.exports=router;