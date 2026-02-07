const Video = require("../model/video.modal")

const getAllVideos = async (req, res) => {
    try {
        const videos = await Video.find()
        return res.send(videos)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createVideo = async (req, res) => {
    const { body } = req

    try {
        const videos = await Video.insertMany({
            ...body,
        })
        return res.send(videos)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deleteVideoById = async (req, res) => {
    try {
        const videos = await Video.findByIdAndDelete(req.params.id)
        return res.send(videos)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllVideos,
    createVideo,
    deleteVideoById,
}
