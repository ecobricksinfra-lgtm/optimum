import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const blog = {
    image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_1175895889.jpg",
    title: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    disease: "Lasik",
    date: "May 23,2022",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat euismod justo, eget vehicula nibh ultricies id. Nulla facilisi.",
    link: "blog-1",
}

const BlogHome = ({ blogsData }) => {
    return (
        <div className="lg:w-8/12 w-full px-3 lg:px-4">
            <h1 className="text-pri text-4xl my-6 font-semibold text-center">
                Blogs
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                {blogsData.map((blog) => (
                    <Link to={`/blogs/${blog._id}`}>
                        <Card {...blog} />
                    </Link>
                ))}
                {/* <Link to={`/blogs/${blog.link}`}>
                    <Card {...blog} />
                </Link>
                <Link to={`/blogs/${blog.link}`}>
                    <Card {...blog} />
                </Link> */}
            </div>
        </div>
    )
}

export default BlogHome

const Card = ({ image, treatment, title, description, updatedAt }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden shadow-black/40  w-full  shrink-0  ">
            {image && (
                <img
                    className="w-full h-48 object-cover object-center"
                    src={image}
                    alt={title}
                />
            )}
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-white font-semibold bg-pri px-2 rounded-md w-max text-sm uppercase">
                    {treatment}
                </h2>
                <h3 className="text-gray-900 font-semibold text-xl ">
                    {title}
                </h3>
                <p className="text-sm text-gray-700 font-semibold tracking-wider">
                    {new Date(updatedAt).toLocaleDateString()}
                </p>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    )
}
