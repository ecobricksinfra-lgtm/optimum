const mongoose = require("mongoose")

const CareerSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    description: String,
    positions: Array,
    work1: String,
    work2: String,
    work3: String,
    work4: String,
    work5: String,
})

module.exports = mongoose.model("CareerSchema", CareerSchema)
