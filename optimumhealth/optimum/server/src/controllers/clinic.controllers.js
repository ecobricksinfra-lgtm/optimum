const Clinic = require("../model/clinic.modal")

const getAllClinics = async (req, res) => {
    try {
        const clinics = await Clinic.find()
        return res.send(clinics)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getClinicById = async (req, res) => {
    try {
        const clinics = await Clinic.findById(req.params.id)
        return res.send(clinics)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createClinic = async (req, res) => {
    const { body } = req

    try {
        const clinics = await Clinic.insertMany({
            ...body,
            image: req.files.length > 0 ? req.files[0].path : "-",
            treatments: body.treatments.split(","),
        })
        return res.send(clinics)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const updateClinicById = async (req, res) => {
    try {
        const clinics = await Clinic.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                image:
                    req.files.length > 0 ? req.files[0].path : req.body.image,
                treatments: req.body.treatments[0].split(","),
            },
            {
                new: true,
            }
        )
        return res.send(clinics)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deleteClinicById = async (req, res) => {
    try {
        const clinics = await Clinic.findByIdAndDelete(req.params.id)
        return res.send(clinics)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllClinics,
    getClinicById,
    createClinic,
    updateClinicById,
    deleteClinicById,
}
