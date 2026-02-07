import React, { useEffect, useState } from "react"
import BlogHome from "./BlogHome"
import BlogAside from "./BlogAside"
import axios from "axios"

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([])

    const fetchBlogs = async () => {
        try {
            const res = await axios.get(
                `http://localhost:3000/api/blog`
            )
            console.log(res.data)
            setBlogsData(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <div className="flex font-pop lg:flex-row flex-col gap-4">
            <BlogHome blogsData={blogsData} />
            <BlogAside blogsData={blogsData} />
        </div>
    )
}

export default Blogs
