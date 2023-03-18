const userSchema  = require("../models/user")

const login = async (req, res) => {
    try {
       const user = await userSchema.find({ $and: [{ Username:req.body.username }, {  password:req.body.password }]}) 
        
      res.json({
        success: true,
        statusCode: 200,
        data: {},
        path: '/login/getlogin',
        message: 'Usuario logueado',
      });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          statusCode: 500,
          data: {},
          path: '/login/getlogin',
          message: 'No se pudo loguear',
        });
      }

}
module.exports = {
    login 
  }