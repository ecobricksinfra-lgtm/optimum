const Patient = require("../model/patient.modal")

const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find()
        return res.send(patients)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getPatientById = async (req, res) => {
    try {
        const patients = await Patient.findById(req.params.id)
        return res.send(patients)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createPatient = async (req, res) => {
    const { body } = req

    try {
        const patients = await Patient.insertMany({
            ...body,
            profilePic: req.files.length > 0 ? req.files[0].path : "-",
        })
        return res.send(patients)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const updatePatientById = async (req, res) => {
    try {
        const patients = await Patient.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                profilePic:
                    req.files.length > 0
                        ? req.files[0].path
                        : req.body.profilePic,
            },
            {
                new: true,
            }
        )
        return res.send(patients)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deletePatientById = async (req, res) => {
    try {
        const patients = await Patient.findByIdAndDelete(req.params.id)
        return res.send(patients)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllPatients,
    getPatientById,
    createPatient,
    updatePatientById,
    deletePatientById,
}
