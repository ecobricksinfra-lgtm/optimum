const mongoose = require("mongoose")

const TreatmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    department: {
        type: String,
    },
    subcategory: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
})

module.exports = mongoose.model("TreatmentSchema", TreatmentSchema)
