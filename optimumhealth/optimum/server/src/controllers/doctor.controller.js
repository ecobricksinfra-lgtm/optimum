const Doctor = require("../model/doctor.modal")

const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find()
        return res.send(doctors)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getDoctorById = async (req, res) => {
    try {
        const doctors = await Doctor.findById(req.params.id)
        return res.send(doctors)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createDoctor = async (req, res) => {
    const { body } = req

    try {
        const doctors = await Doctor.insertMany({
            ...body,
            image: req.files.length > 0 ? req.files[0].path : "-",
        })
        return res.send(doctors)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const updateDoctorById = async (req, res) => {
    try {
        const doctors = await Doctor.findByIdAndUpdate(
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
        return res.send(doctors)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deleteDoctorById = async (req, res) => {
    try {
        const doctors = await Doctor.findByIdAndDelete(req.params.id)
        return res.send(doctors)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllDoctors,
    getDoctorById,
    createDoctor,
    updateDoctorById,
    deleteDoctorById,
}
