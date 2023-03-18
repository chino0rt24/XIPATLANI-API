const { findById, updateOne, remove } = require("../models/user");
const customer = require("../models/");

//create user
const createCustomer = async (req, res) => {
  try {
    const newCustomer = customer(req.body);
   let newc =  await newCustomer.save();
    res.json({
      success: true,
      statusCode: 200,
      data: {customer:newc},
      path: '/customer/createCustomer',
      message: 'cliente creado',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/customer/createCustomer',
      message: 'No se pudo crear',
    });

  }


};
//get users
const getCustomers = async (req, res) => {
  try {
    const customers = await customer.find({}).skip(req.body.skip).limit(req.body.limit);
    res.json({
      success: true,
      statusCode: 200,
      data: {customers},
      path: '/customers/getCustomers',
      message: 'customers encontrados',
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/customers/getCstomers',
      message: 'No se pudo encontrar',
    });

  }
};
//usuario especifico
const getCustomerById = async (req, res) => {
  try {
    const customerById = customer.findById(req.body.idCustomer);
    res.json({
      success: true,
      statusCode: 200,
      data: {customer: customerById},
      path: '/customer/getCustomerById',
      message: 'usario encontrado',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/customer/getCustomerById',
      message: 'No se pudo encontrar',
    });
  }
};
//actualizar usuario
const updateCustomer = async (req, res) => {
  try {
    const customerUpdated = await customer.findByIdAndUpdate(req.body.customer._id, {$set:{...req.body.customer}});
    res.json({
      success: true,
      statusCode: 200,
      data: {customerUpdated},
      path: '/customer/updateCustomer',
      message: 'usario actualizado',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/customer/updateCustomer',
      message: 'No se pudo actualizar',
    });
  }


};
//eliminar usuario
const deleteCustomer = async (req, res) => {
  try {
   const deletedCustomer = await customer.findByIdAndRemove(req.body.idCustomer)
    res.json({
      success: true,
      statusCode: 200,
      data: {deletedCustomer},
      path: '/customer/deleteCustomer',
      message: 'customer eliminado',
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      data: {},
      path: '/customer/deleteCustomer',
      message: 'No se pudo eliminar',
    });
  }


};
module.exports = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,

}