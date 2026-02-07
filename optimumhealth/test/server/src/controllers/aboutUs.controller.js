const AboutUs = require("../model/aboutUs.modal")

const getAllAboutUs = async (req, res) => {
    try {
        const aboutUss = await AboutUs.find()
        return res.send(aboutUss)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createAboutUs = async (req, res) => {
    const { body } = req

    try {
        await AboutUs.deleteMany()
        const aboutUss = await AboutUs.insertMany({
            ...body,
        })
        return res.send(aboutUss)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllAboutUs,
    createAboutUs,
}
