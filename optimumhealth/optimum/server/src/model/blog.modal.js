const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: String,
        treatment: String,
        content: {
            type: String,
        },
        image:{
            type:String,
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("BlogSchema", BlogSchema)
