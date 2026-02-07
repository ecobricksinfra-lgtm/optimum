const Enquire = require("../model/enquire.modal")

const getAllEnquires = async (req, res) => {
    try {
        const enquires = await Enquire.find()
        return res.send(enquires)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getEnquireById = async (req, res) => {
    try {
        const enquires = await Enquire.findById(req.params.id)
        return res.send(enquires)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createEnquire = async (req, res) => {
    const { body } = req

    try {
        const enquires = await Enquire.insertMany({
            ...body,
        })
        return res.send(enquires)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const updateEnquireById = async (req, res) => {
    try {
        const enquires = await Enquire.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
            },
            {
                new: true,
            }
        )
        return res.send(enquires)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deleteEnquireById = async (req, res) => {
    try {
        const enquires = await Enquire.findByIdAndDelete(req.params.id)
        return res.send(enquires)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllEnquires,
    getEnquireById,
    createEnquire,
    updateEnquireById,
    deleteEnquireById,
}
