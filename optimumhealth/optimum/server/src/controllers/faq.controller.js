const Faq = require("../model/faq.modal")

const getAllFaqs = async (req, res) => {
    try {
        const faqs = await Faq.find()
        return res.send(faqs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getFaqById = async (req, res) => {
    try {
        const faqs = await Faq.findById(req.params.id)
        return res.send(faqs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createFaq = async (req, res) => {
    const { body } = req

    try {
        const faqs = await Faq.insertMany({
            ...body,
            image: req.files.length > 0 ? req.files[0].path : "-",
        })
        return res.send(faqs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const updateFaqById = async (req, res) => {
    try {
        const faqs = await Faq.findByIdAndUpdate(
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
        return res.send(faqs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deleteFaqById = async (req, res) => {
    try {
        const faqs = await Faq.findByIdAndDelete(req.params.id)
        return res.send(faqs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllFaqs,
    getFaqById,
    createFaq,
    updateFaqById,
    deleteFaqById,
}
