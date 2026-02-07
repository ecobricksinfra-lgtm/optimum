const Surgery = require("../model/surgery.modal")

const getAllSurgerys = async (req, res) => {
    try {
        const surgerys = await Surgery.find()
        return res.send(surgerys)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getSurgeryById = async (req, res) => {
    try {
        const surgerys = await Surgery.findById(req.params.id)
        return res.send(surgerys)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createSurgery = async (req, res) => {
    const { body } = req

    try {
        const surgerys = await Surgery.insertMany({
            ...body,
            image: req.files.length > 0 ? req.files[0].path : "-",
        })
        return res.send(surgerys)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const updateSurgeryById = async (req, res) => {
    try {
        const surgerys = await Surgery.findByIdAndUpdate(
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
        return res.send(surgerys)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deleteSurgeryById = async (req, res) => {
    try {
        const surgerys = await Surgery.findByIdAndDelete(req.params.id)
        return res.send(surgerys)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllSurgerys,
    getSurgeryById,
    createSurgery,
    updateSurgeryById,
    deleteSurgeryById,
}
