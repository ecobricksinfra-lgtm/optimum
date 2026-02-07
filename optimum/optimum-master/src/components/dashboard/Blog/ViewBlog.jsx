import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

const ViewBlog = () => {
    const { blogId } = useParams()
    const [blogsData, setBlogsData] = useState()
    const [isDelete, setIsDelete] = useState(false)
    const navigate = useNavigate()

    const fetchBlogs = async () => {
        try {
            const res = await axios.get(
                `http://localhost:3000/api/blog/${blogId}`
            )
            console.log(res.data)
            setBlogsData(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleDelete = async () => {
        try {
            const res = await axios.delete(
                `http://localhost:3000/api/blog/${blogId}`
            )
            console.log(res.data)
            navigate("/dashboard")
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, [])
    return (
        <div className="font-pop ">
            {/* Header */}
            <nav className="bg-violet-800 py-4 px-6 flex gap-x-10 items-center justify-between">
                <Link to={"/"}>
                    <h1 className="text-3xl font-semibold text-white">
                        Optimum
                    </h1>
                </Link>
                <Link to={"/dashboard"}>
                    <h1 className="text-xl font-semibold text-white">
                        Dashboard
                    </h1>
                </Link>
            </nav>
            <div className="p-10">
                <div className="flex gap-x-4 mx-auto w-max my-8">
                    {!isDelete && (
                        <>
                            <button
                                onClick={() => setIsDelete(true)}
                                className="px-4 py-2 rounded-md font-semibold bg-violet-800 text-white"
                            >
                                Delete
                            </button>
                        </>
                    )}
                    {isDelete && (
                        <>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 rounded-md font-semibold bg-violet-800 text-white"
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => setIsDelete(false)}
                                className="px-4 py-2 rounded-md font-semibold text-violet-800 border-2 border-violet-800 bg-white"
                            >
                                No
                            </button>
                        </>
                    )}
                </div>
                {/* Blog */}

                {blogsData && (
                    <div className="lg:w-1/2 border-2 border-gray-400 shadow-xl mx-auto p-4  rounded-md flex flex-col gap-y-4 ">
                        <h2 className="text-white font-semibold bg-pri px-2 rounded-md w-max text-sm uppercase">
                            {blogsData.treatment}
                        </h2>
                        <h3 className="text-gray-900 font-semibold text-2xl ">
                            {blogsData.title}
                        </h3>
                        <p className="text-sm text-gray-700 font-semibold tracking-wider">
                            {new Date(blogsData.updatedAt).toLocaleDateString()}
                        </p>
                        <p className="text-gray-600 text-sm">
                            {blogsData.description}
                        </p>
                        <div
                            className="prose-p:m-0 prose"
                            dangerouslySetInnerHTML={{
                                __html: blogsData.content,
                            }}
                        ></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ViewBlog
