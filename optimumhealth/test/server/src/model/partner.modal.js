const mongoose = require("mongoose")

const PartnerSchema = new mongoose.Schema({
    partTitle: String,
    partSubtitle: String,
    docTitle: String,
    docSubtitle: String,
    partDoc: Array,
    partHos: Array,
    docDoc: Array,
    docHos: Array,
})

module.exports = mongoose.model("PartnerSchema", PartnerSchema)
