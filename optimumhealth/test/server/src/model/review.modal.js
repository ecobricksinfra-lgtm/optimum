const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    treatment: {
        type: String,
    },
    surgery: {
        type: String,
    },
    clinic: {
        type: String,
    },
    rating: {
        type: String,
    },
    comments: {
        type: String,
    },
    image: {
        type: String,
    },
})

module.exports = mongoose.model("ReviewSchema", ReviewSchema)
