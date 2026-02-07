const Treatment = require("../model/treatment.modal")

const getAllTreatments = async (req, res) => {
    try {
        const treatments = await Treatment.find()
        return res.send(treatments)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getTreatmentById = async (req, res) => {
    try {
        const treatments = await Treatment.findById(req.params.id)
        return res.send(treatments)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createTreatment = async (req, res) => {
    const { body } = req

    try {
        const treatments = await Treatment.insertMany({
            ...body,
            image: req.files.length > 0 ? req.files[0].path : "-",
        })
        return res.send(treatments)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const updateTreatmentById = async (req, res) => {
    try {
        const treatments = await Treatment.findByIdAndUpdate(
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
        return res.send(treatments)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deleteTreatmentById = async (req, res) => {
    try {
        const treatments = await Treatment.findByIdAndDelete(req.params.id)
        return res.send(treatments)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllTreatments,
    getTreatmentById,
    createTreatment,
    updateTreatmentById,
    deleteTreatmentById,
}
