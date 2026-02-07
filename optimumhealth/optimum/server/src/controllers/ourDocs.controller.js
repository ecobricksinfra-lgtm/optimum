const OurDocs = require("../model/ourDocs.modal")

const getAllOurDocss = async (req, res) => {
    try {
        const ourDocss = await OurDocs.find()
        return res.send(ourDocss)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createOurDocs = async (req, res) => {
    const { body } = req

    try {
        await OurDocs.deleteMany()
        const ourDocss = await OurDocs.insertMany({
            ...body,
        })
        return res.send(ourDocss)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllOurDocss,
    createOurDocs,
}
