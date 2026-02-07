const mongoose = require("mongoose")

const AboutUsSchema = new mongoose.Schema({
    aboutUs: String,
    patientPortal: String,
    healthCare: String,
    aboutFounder: String,
    vision: String,
    audience: String,
})

module.exports = mongoose.model("AboutUsSchema", AboutUsSchema)
