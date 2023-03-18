const cobro =  require("../models/cobro");

const createCobro = async(req, res) => {
try {
   const newCobro = cobro(req.body.cobro);
   const cobro = await newCobro.save();
    res.json({
        path:'createCorbo',
        data:{cobro},
        success:true,
        statusCode:200
    })
} catch (error) {
    console.log(error)
    res.status(500).json({
        path:'createCorbo',
        success:false,
        statusCode:500,
        error:error
    })
}

};

const updateCobro = async() => {
    try {
    const cobroUpdated = await cobro.findByIdAndUpdate({$set:{...req.body.cobro}});
    res.json({
        path:'updateCobro',
        data:{cobroUpdated},
        success:true,
        statusCode:200
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            path:'updateCobro',
            data:{cobroUpdated},
            success:false,
            statusCode:500,
            error:error
        })
    }
};

const deleteCobro = async() => {
    try {
    const cobroDeleted = await cobro.findByIdAndDelete(req.body.idCobro);
    res.json({
        path:'deleteCobro',
        data:{cobroDeleted},
        success:true,
        statusCode:200
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            path:'deleteCobro',
            data:{cobroDeleted},
            success:false,
            statusCode:500,
            error:error
        })
    }
};

const getCobroById = async() => {
    try {
        const cobro = await cobro.findById(req.body.idCobro);
        res.json({
            path:'getCobroById',
            data:{cobro},
            success:true,
            statusCode:200
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            path:'getCobroById',
            success:false,
            statusCode:500,
            error:error
        })
    }
};

const getCobros = async() => {
    try {
    const cobros = await cobro.find({}).skip(req.body.skip).limit(req.body.limit);
    res.json({
        path:'getCobros',
        data:{cobros},
        success:true,
        statusCode:200
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            path:'getCobros',
            success:false,
            statusCode:500,
            error:error
        })
    }
};

module.exports = {
createCobro,
updateCobro,
deleteCobro,
getCobroById,
getCobros
}