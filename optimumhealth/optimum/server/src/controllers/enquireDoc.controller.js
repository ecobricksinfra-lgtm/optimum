const EnquireDoc = require("../model/enquireDoc.modal")

const getAllEnquireDocs = async (req, res) => {
    try {
        const enquireDocs = await EnquireDoc.find()
        return res.send(enquireDocs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getEnquireDocById = async (req, res) => {
    try {
        const enquireDocs = await EnquireDoc.findById(req.params.id)
        return res.send(enquireDocs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createEnquireDoc = async (req, res) => {
    const { body } = req

    try {
        const enquireDocs = await EnquireDoc.insertMany({
            ...body,
        })
        return res.send(enquireDocs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const updateEnquireDocById = async (req, res) => {
    try {
        const enquireDocs = await EnquireDoc.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
            },
            {
                new: true,
            }
        )
        return res.send(enquireDocs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deleteEnquireDocById = async (req, res) => {
    try {
        const enquireDocs = await EnquireDoc.findByIdAndDelete(req.params.id)
        return res.send(enquireDocs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllEnquireDocs,
    getEnquireDocById,
    createEnquireDoc,
    updateEnquireDocById,
    deleteEnquireDocById,
}
