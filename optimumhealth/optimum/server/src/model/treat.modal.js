const mongoose = require("mongoose")

const TreatSchema = new mongoose.Schema({
    page: String,
    title: String,
    subtitle: String,
    whatIs: String,
    contents: Array,
})

module.exports = mongoose.model("TreatSchema", TreatSchema)
