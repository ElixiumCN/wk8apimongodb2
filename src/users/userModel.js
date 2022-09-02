const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
    {
        email:
        {
            type: String,
            required: true,
            unique: true
        },
        password:
        {
            type: String,
            required: true,
            unique: true
        },
    }
)

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await Users.findOne({ email });

    if (!user) {
        throw new Error("Unable to login");
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
        throw new Error("Unable to login");
    }

    return user;
};

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, "some secret");
    return token;
};

const Users = mongoose.model('Users', userSchema);

module.exports = Users