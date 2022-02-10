const Usuario = require('../Models/users');
const Role = require('../Models/role')
const userCtrl = {};

userCtrl.crearUsuario = async (req, res) => {
    try{
        const { username, email, password, roles } = req.body;
        const rolesFound = await Role.find({name:{$in: roles}})
        const user = new Usuario({
            username,
            email,
            password,
            roles: rolesFound.map((role) => role._id),
        });

        //encriptar pasword
        user.password = await Usuario.encryptPassword(user.password);

        //guardar nuevo Usuario
        const savedUser = await user.save();

        return res.status(200).json({ 
            _id: savedUser._id,
            username: savedUser.email,
            roles:savedUser.roles,
        });
    } catch (err) {
        console.log(error)
    }
};

module.exports = userCtrl;