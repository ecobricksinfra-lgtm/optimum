const Review = require("../model/review.modal")

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        return res.send(reviews)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getReviewById = async (req, res) => {
    try {
        const reviews = await Review.findById(req.params.id)
        return res.send(reviews)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createReview = async (req, res) => {
    const { body } = req

    try {
        const reviews = await Review.insertMany({
            ...body,
            image: req.files.length > 0 ? req.files[0].path : "-",
        })
        return res.send(reviews)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const updateReviewById = async (req, res) => {
    try {
        const reviews = await Review.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                image:
                    req.files.length > 0 ? req.files[0].path : req.body.image,
            },
            {
                new: true,
            }
        )
        return res.send(reviews)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deleteReviewById = async (req, res) => {
    try {
        const reviews = await Review.findByIdAndDelete(req.params.id)
        return res.send(reviews)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllReviews,
    getReviewById,
    createReview,
    updateReviewById,
    deleteReviewById,
}
