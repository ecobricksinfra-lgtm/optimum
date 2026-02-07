const mongoose = require("mongoose")

const OurDocsSchema = new mongoose.Schema({
    docTitle: String,
    docSubtitle: String,
    cliTitle: String,
    cliSubtitle: String,
    bmi: String,
})

module.exports = mongoose.model("OurDocsSchema", OurDocsSchema)
