const { find, findById, updateOne } = require("../models/paquete");
const paqueteSchema = require("../models/paquete");


//create paquete
const createPack = async (req, res) => {
  try {
    const pack = paqueteSchema(req.body);
  pack.save()
  await pack.save()
  res.json({
    success: true,
    statusCode: 200,
    data: {},
    path: '/paquete/createPack',
    message: 'paquete creado',
  });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/paquete/createPack',
      message: 'No se pudo crear',
    });
  }
};
//get paquetes
const getPacks = async (req, res) => {
  try {
    paqueteSchema
    .find()
    await find()
    res.json({
      success: true,
      statusCode: 200,
      data: {},
      path: '/paquete/getPacks',
      message: 'paquetes encontrados',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/paquete/getPacks',
      message: 'No se pudo encontrar',
    });
  }
  
};
//get pack
const getPack = async (req, res) => {
  try {
    const { id } = req.params;
  paqueteSchema
    .findById(id)
    await findById()
    res.json({
      success: true,
      statusCode: 200,
      data: {},
      path: '/paquete/getPack',
      message: 'paquete encontrado',
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/paquete/getPack',
      message: 'No se pudo encontrar',
    });
  }
  
   
};
//actualizar paquete
const updatePack = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, costo, descripcion } = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { nombre, costo, descripcion } })
      await updateOne()
      res.json({
        success: true,
        statusCode: 200,
        data: {},
        path: '/paquete/updatePack',
        message: 'paquete actualizado',
      });
  

  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/paquete/updatePack',
      message: 'No se pudo actualizar',
    });
  }
 
   
};
//eliminar Paquete
const delatePack = async (req, res) => {
  try {
    const { id } = req.params;
    paqueteSchema
      .remove({ _id: id })
      await remove()
      res.json({
        success: true,
        statusCode: 200,
        data: {},
        path: '/paquete/delatePack',
        message: 'paquete eliminado',
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/paquete/delatePack',
      message: 'No se pudo eliminar',
    });
  }
 
    
};
module.exports = {
  createPack,
  getPacks,
  getPack,
  updatePack,
  delatePack,

}