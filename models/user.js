const mongoose = require("mongoose")
const Schema = mongoose.Schema;
var UserSchema = new Schema({
    email : {
        type : String,
        required : "Email is required"
    },
    fullname : {
        type : String,
        required : "Fullname is required"
    },
    uname : {
        type : String,
        required : "Username is required"
    },
    password : {
        type : String,
        required : "Password is required"
    }
},
{
   timestamps: true 
}
)
module.exports = User = mongoose.model('registered_users' , UserSchema);