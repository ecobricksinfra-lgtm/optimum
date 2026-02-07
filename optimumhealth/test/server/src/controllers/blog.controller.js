const Blog = require("../model/blog.modal")

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        return res.send(blogs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const getBlogById = async (req, res) => {
    try {
        const blogs = await Blog.findById(req.params.id)
        return res.send(blogs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const createBlog = async (req, res) => {
    const { body } = req

    try {
        const blogs = await Blog.insertMany({
            ...body,
        })
        return res.send(blogs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const updateBlogById = async (req, res) => {
    try {
        const blogs = await Blog.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
            },
            {
                new: true,
            }
        )
        return res.send(blogs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

const deleteBlogById = async (req, res) => {
    try {
        const blogs = await Blog.findByIdAndDelete(req.params.id)
        return res.send(blogs)
    } catch (e) {
        return res.status(400).send(e)
    }
}

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlogById,
    deleteBlogById,
}
