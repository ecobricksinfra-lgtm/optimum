const mongoose = require("mongoose")

const SurgerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    department: {
        type: String,
    },
    reason: {
        type: String,
    },
    nature: {
        type: String,
    },
    duration: {
        type: String,
    },
    recoveryTime: {
        type: String,
    },
    technology: {
        type: String,
    },
    cost: {
        type: String,
    },
    effects: {
        type: String,
    },
    image: {
        type: String,
    },
})

module.exports = mongoose.model("SurgerySchema", SurgerySchema)
