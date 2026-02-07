const mongoose = require("mongoose")

const AppointmentSchema = new mongoose.Schema({
    clinicId: {
        type: String,
        required: true,
    },
    patientId: {
        type: String,
        required: true,
    },
    doctorId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    },
    duration: {
        type: String,
    },
    notes: {
        type: String,
    },
    records: {
        type: String,
    },
})

module.exports = mongoose.model("AppointmentSchema", AppointmentSchema)
