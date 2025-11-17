const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/login_tutorial");

connect.then(() =>{
    console.log("database connected successfully");
})
.catch(() => {
    console.log("database not connected");
});


const Loginschema = mongoose.Schema({
    quantity : {
        type : Number,
        required: true
    },
    name : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    city: {
        type : String,
        required : true
    }
});

const collection = mongoose.model("commandes",Loginschema);

module.exports = collection;