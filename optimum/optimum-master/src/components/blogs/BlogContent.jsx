import React from "react"
import parse from "html-react-parser"

const blog = {
    image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_1175895889.jpg",
    title: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    disease: "Lasik",
    date: "May 23,2022",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat euismod justo, eget vehicula nibh ultricies id. Nulla facilisi.",
    link: "blog-1",
}

const BlogContent = ({ blogsData }) => {
    return (
        <div className="lg:w-8/12 w-full  px-3 lg:px-4 bg-gray-200 p-4 ">
            {/* Blog Card */}
            <div className="bg-white shadow-lg shadow-black/20 rounded-md p-4 flex flex-col gap-y-3">
                {blogsData.image && (
                    <img
                        src={blogsData.image}
                        alt=""
                        className="w-full lg:h-96 object-cover"
                    />
                )}
                <h1 className="bg-pri w-max px-4 rounded-md py-1 font-semibold text-white">
                    {blogsData?.treatment}
                </h1>
                <h1 className="font-bold text-4xl text-gray-800 my-4">
                    {blogsData?.title}
                </h1>
                <p className="text-sm text-gray-700 font-semibold tracking-wider">
                    {new Date(blogsData.updatedAt).toLocaleDateString()}
                </p>
                {/* Rest of cont */}
                <p className="text-gray-800 leading-relaxed prose max-w-none prose-p:m-0 w-full ">
                    {blogsData?.content && parse(blogsData?.content)}
                </p>
            </div>
        </div>
    )
}

export default BlogContent
