const mongoose = require("mongoose")

const FAQSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    treatment: {
        type: String,
    },
    category: String,

    image: {
        type: String,
    },
})

module.exports = mongoose.model("FAQSchema", FAQSchema)
