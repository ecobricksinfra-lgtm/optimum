const Partner = require("../model/partner.modal")

const getAllPartners = async (req, res) => {
    try {
        const partners = await Partner.find()
        return res.send(partners)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createPartner = async (req, res) => {
    const { body } = req

    try {
        await Partner.deleteMany()
        const partners = await Partner.insertMany({
            ...body,
        })
        return res.send(partners)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllPartners,
    createPartner,
}
