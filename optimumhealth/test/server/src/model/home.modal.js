const mongoose = require("mongoose")

const HomeSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    description: String,
    description: String,
    number1: String,
    number1_sub: String,
    number2: String,
    number2_sub: String,
    number3: String,
    number3_sub: String,
    number4: String,
    number4_sub: String,
    care1Title: String,
    care1Desc: String,
    care2Title: String,
    care2Desc: String,
    care3Title: String,
    care3Desc: String,
    care4Title: String,
    care4Desc: String,
    touch: String,
})

module.exports = mongoose.model("HomeSchema", HomeSchema)
