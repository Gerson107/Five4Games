const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            trim: true
        },
        
        email: {
            type: String,
            require: true,
            unique: true
        },

        password: {
            type: String,
            require: true
        },

        roles: [{
            ref: "role",
            type: Schema.Types.ObjectId
        }]
    },

    {
        timeStamp: true,
        versionKey: false
    }
)
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}
userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

module.exports = model('user', userSchema)