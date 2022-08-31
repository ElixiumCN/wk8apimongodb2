const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true,
            unique: true,
        },
        age:
        {
            type: Number,
            default: "Not Specified",
        },
    }
)

const Users = mongoose.model('Users', userSchema);

module.exports = Users