const Media = require("../model/media.modal")

const getAllMedias = async (req, res) => {
    try {
        const medias = await Media.find()
        return res.send(medias)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getMediaById = async (req, res) => {
    try {
        const medias = await Media.findById(req.params.id)
        return res.send(medias)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createMedia = async (req, res) => {
    const { body } = req

    try {
        const medias = await Media.insertMany({
            ...body,
            image: req.files.length > 0 ? req.files[0].path : "-",
        })
        return res.send(medias)
    } catch (e) {
        console.log(e)
        return res.status(400).send(e)
    }
}

const updateMediaById = async (req, res) => {
    try {
        const medias = await Media.findByIdAndUpdate(
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
        return res.send(medias)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deleteMediaById = async (req, res) => {
    try {
        const medias = await Media.findByIdAndDelete(req.params.id)
        return res.send(medias)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllMedias,
    getMediaById,
    createMedia,
    updateMediaById,
    deleteMediaById,
}
