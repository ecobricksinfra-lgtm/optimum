const mongoose = require("mongoose")

const EnquireSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        useremail: String,

        mobileNumber: String,
        city: String,
        treatment: String,
        email: {
            type: Boolean,
            default: false,
        },
        appointmentDate: String,
        doctor: String,
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("EnquireSchema", EnquireSchema)
