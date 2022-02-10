const User = require("../Models/users")
const {ROLES} = require("../Models/role")

validar = {}

validar.checkDuplicateUsernameOrEmail = async(req, res, next) => {
    try{
        const user = await User.findOne({username: req.body.username})
        if (user)
            returnres.status(400).json({
                message: 'El usuario ya existe'
            })
        const email = await User.findOne({email: req.body.email})
        if(email){
            return res.status(400).json({
                message: 'El correo ya existe'
            })
        }
        next()
    }catch(err){
        res.status(500).json({
            message: error
        })
    }
}

validar.checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i=0; i < req.body.roles.length; i++) {
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    message: 'Rol no existente'})
            }
        }
    }
}
module.exports = validar;