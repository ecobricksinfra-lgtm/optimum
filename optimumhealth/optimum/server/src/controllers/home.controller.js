const Home = require("../model/home.modal")

const getAllHomes = async (req, res) => {
    try {
        const homes = await Home.find()
        return res.send(homes)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createHome = async (req, res) => {
    const { body } = req

    try {
        await Home.deleteMany()
        const homes = await Home.insertMany({
            ...body,
        })
        return res.send(homes)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllHomes,
    createHome,
}
