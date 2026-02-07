const mongoose = require("mongoose")

const EnquireDocSchema = new mongoose.Schema({
    name: String,
    mobileNumber: String,
    email: String,
    city: String,
    specialization: String,
    degree: String,
    exp: String,
    exp2: String,
})

module.exports = mongoose.model("EnquireDocSchema", EnquireDocSchema)
