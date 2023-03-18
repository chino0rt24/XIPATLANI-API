const userSchema  = require("../models/user")

const login = async (req, res) => {
    try {
      console.log(req.body);
       const user = await userSchema.find({ $and: [{ Username:req.body.username }, {  password:req.body.password }]});

       if(user.length >0){
        res.json({
          success: true,
          statusCode: 200,
          data: {user:user[0]},
          path: '/login/getlogin',
          message: 'Usuario logueado',
        });
       } else {
        res.status(403).json({
          success: false,
          statusCode: 500,
          data: {},
          path: '/login/getlogin',
          message: 'No coincide',
        });
       }
        

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