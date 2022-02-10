const Role = require('../Models/role');
const User = require('../Models/users')
const bcrypt = require('bcrypt')
const init = {}

init.createRoles = async()=>{
    try {
        contador = await Role.estimatedDocumentCount()
        if (contador > 0) return 
        const valores = await Promise.all([
            new Rol({name: "user"}).save(),
            new Role({name: "admin"}).save()
        ])
        console.log(valores)
    } catch (error) {
        console.log(error)
    }
}
init.createAdmin = async()=>{
    const user = await User.findOne({email:"admin@gmail.com"})
    const roles =await Role.find({name: { $in: ["admin"]}})
    if(!user){
        await User.create({
            username: "admin",
            email: "admin@gmail.com",
            password: await bcrypt.hash("admin", 10),
            roles: roles.map((role) => role._id)
        })
        console.log('Administrador creado')
    }
}
module.exports = init