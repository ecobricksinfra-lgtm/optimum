const mongoose = require("mongoose")

const MediaSchema = new mongoose.Schema({
    publish: String,
    title: String,
    subtitle: String,
    date: String,
})

module.exports = mongoose.model("MediaSchema", MediaSchema)
