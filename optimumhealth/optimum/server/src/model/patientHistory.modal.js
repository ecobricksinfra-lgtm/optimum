const mongoose = require("mongoose")

const PatienHistorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    },
    doctorId: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
    records: {
        type: String,
    },
    city: {
        type: String,
    },
    image: {
        type: String,
    },
})

module.exports = mongoose.model("PatienHistorySchema", PatienHistorySchema)
