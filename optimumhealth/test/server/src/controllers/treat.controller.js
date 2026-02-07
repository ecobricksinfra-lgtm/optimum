const Treat = require("../model/treat.modal")

const getAllTreats = async (req, res) => {
    try {
        const treats = await Treat.find()
        return res.send(treats)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getTreat = async (req, res) => {
    const { params } = req

    try {
        const treats = await Treat.findOne({ page: params.page })
        return res.send(treats)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createTreat = async (req, res) => {
    const { body } = req

    try {
        const find = await Treat.findOne({ page: body.page })
        if (find) {
            const treats = await Treat.findOneAndUpdate(
                { page: body.page },
                body
            )
            return res.send(treats)
        } else {
            const treats = await Treat.insertMany({
                ...body,
            })
            return res.send(treats)
        }
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllTreats,
    createTreat,
    getTreat,
}
