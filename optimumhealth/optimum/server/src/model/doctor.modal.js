const mongoose = require("mongoose")

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
    },
    qualification: {
        type: String,
    },
    experience: {
        type: String,
    },
    department: {
        type: String,
    },
    image: {
        type: String,
    },

    rating: {
        type: Number,
    },
})

module.exports = mongoose.model("DoctorSchema", DoctorSchema)
