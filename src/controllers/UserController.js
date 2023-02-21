const { findById, updateOne, remove } = require("../models/user");
const userSchema = require("../models/user");

//create user
const createUser = async (req, res) => {
  try {
    const user = userSchema(req.body);
    user.save()
    await user.save()
    res.json({
      success: true,
      statusCode: 200,
      data: {},
      path: '/user/createUser',
      message: 'usario creado',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/user/createUser',
      message: 'No se pudo crear',
    });

  }


};
//get users
const getUsers = async (req, res) => {
  try {
    userSchema
      .find()
    await find()
    res.json({
      success: true,
      statusCode: 200,
      data: {},
      path: '/user/getUsers',
      message: 'usarios encontrados',
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/user/getUser',
      message: 'No se pudo encontrar',
    });

  }
};
//usuario especifico
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    userSchema
      .findById(id)
    await findById()
    res.json({
      success: true,
      statusCode: 200,
      data: {},
      path: '/user/getUser',
      message: 'usario encontrado',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/user/getUser',
      message: 'No se pudo encontrar',
    });
  }
};
//actualizar usuario
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastname, phone, email, cp, CiudadLocalidad, referencia } = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { name, lastname, phone, email, cp, CiudadLocalidad, referencia } })
    await updateOne()
    res.json({
      success: true,
      statusCode: 200,
      data: {},
      path: '/user/updateUser',
      message: 'usario actualizado',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/user/updateUser',
      message: 'No se pudo actualizar',
    });
  }


};
//eliminar usuario
const delateUser = async (req, res) => {
  try {
    const { id } = req.params;
    userSchema
      .remove({ _id: id })
    await remove()
    res.json({
      success: true,
      statusCode: 200,
      data: {},
      path: '/user/delateUser',
      message: 'usario eliminado',
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/user/delateUser',
      message: 'No se pudo eliminar',
    });
  }


};
module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  delateUser,

}