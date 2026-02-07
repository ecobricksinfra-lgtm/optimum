const PatientHistory = require("../model/patientHistory.modal")

const getAllPatientHistorys = async (req, res) => {
    try {
        const patientHistorys = await PatientHistory.find()
        return res.send(patientHistorys)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getPatientHistoryById = async (req, res) => {
    try {
        const patientHistorys = await PatientHistory.findById(req.params.id)
        return res.send(patientHistorys)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createPatientHistory = async (req, res) => {
    const { body } = req

    try {
        const patientHistorys = await PatientHistory.insertMany({
            ...body,
            image: req.files.length > 0 ? req.files[0].path : "-",
        })
        return res.send(patientHistorys)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const updatePatientHistoryById = async (req, res) => {
    try {
        const patientHistorys = await PatientHistory.findByIdAndUpdate(
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
        return res.send(patientHistorys)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deletePatientHistoryById = async (req, res) => {
    try {
        const patientHistorys = await PatientHistory.findByIdAndDelete(
            req.params.id
        )
        return res.send(patientHistorys)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllPatientHistorys,
    getPatientHistoryById,
    createPatientHistory,
    updatePatientHistoryById,
    deletePatientHistoryById,
}
