const mongoose = require("mongoose")

const HeaderSchema = new mongoose.Schema({
    treatments: Object,
    forPatients: Object,
    forCompany: Object,
    forCorporates: Object,
    cities: Array,
})

module.exports = mongoose.model("HeaderSchema", HeaderSchema)
