const Appointment = require("../model/appointment.modal")

const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
        return res.send(appointments)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getAppointmentById = async (req, res) => {
    try {
        const appointments = await Appointment.findById(req.params.id)
        return res.send(appointments)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createAppointment = async (req, res) => {
    const { body } = req

    try {
        const appointments = await Appointment.insertMany({
            ...body,
        })
        return res.send(appointments)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const updateAppointmentById = async (req, res) => {
    try {
        const appointments = await Appointment.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
            },
            {
                new: true,
            }
        )
        return res.send(appointments)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deleteAppointmentById = async (req, res) => {
    try {
        const appointments = await Appointment.findByIdAndDelete(req.params.id)
        return res.send(appointments)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointmentById,
    deleteAppointmentById,
}
