import React, { useEffect, useState } from "react"
import BlogAside from "./BlogAside"
import BlogContent from "./BlogContent"
import { useParams } from "react-router-dom"
import axios from "axios"

const Blog = () => {
    const { blogid } = useParams()

    const [blogsData, setBlogsData] = useState([])

    const fetchBlogs = async () => {
        try {
            const res = await axios.get(
                `http://localhost:3000/api/blog/${blogid}`
            )
            console.log(res.data)
            setBlogsData(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, [blogid])

    return (
        <div className="flex font-pop lg:flex-row flex-col gap-4 bg-gray-200">
            <BlogContent blogsData={blogsData} />
            <BlogAside />
        </div>
    )
}

export default Blog
