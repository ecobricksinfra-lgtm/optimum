const mongoose = require("mongoose")

const ClinicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    timing: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    image: {
        type: String,
    },

    rating: {
        type: Number,
    },
    treatments: {
        type: [String],
        default: [],
    },
})

module.exports = mongoose.model("ClinicSchema", ClinicSchema)
