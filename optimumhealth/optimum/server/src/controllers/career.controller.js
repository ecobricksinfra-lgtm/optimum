const Career = require("../model/career.modal")

const getAllCareers = async (req, res) => {
    try {
        const careers = await Career.find()
        return res.send(careers)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createCareer = async (req, res) => {
    const { body } = req

    try {
        await Career.deleteMany()
        const careers = await Career.insertMany({
            ...body,
        })
        return res.send(careers)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllCareers,
    createCareer,
}
