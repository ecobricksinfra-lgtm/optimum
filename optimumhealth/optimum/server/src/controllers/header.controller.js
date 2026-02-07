const Header = require("../model/header.modal")

const getAllHeaders = async (req, res) => {
    try {
        const headers = await Header.find()
        return res.send(headers)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createHeader = async (req, res) => {
    const { body } = req

    try {
        await Header.deleteMany()
        const headers = await Header.insertMany({
            ...body,
        })
        return res.send(headers)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllHeaders,
    createHeader,
}
