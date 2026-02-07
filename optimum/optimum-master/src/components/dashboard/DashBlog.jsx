import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/dummybanner.jpg";

const DashBlog = ({ setTab }) => {
    const [blogsData, setBlogsData] = useState([]);
    const [expandedCards, setExpandedCards] = useState({}); // Track which cards are expanded

    const fetchBlogs = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/blog`);
            console.log("response.data",res.data);
            setBlogsData(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    // console.log("blogimage",blogsData[7].image)

    blogsData.map((blog) =>{
        console.log("blogs--->",blog)
    })

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleShowToggle = (blogId) => {
        // Toggle expanded state for the clicked card
        setExpandedCards((prev) => ({
            ...prev,
            [blogId]: !prev[blogId] // Toggle the boolean state for the card
        }));
    };

    return (
        <>
            <button
                onClick={() => setTab("newBlog")}
                className="block ml-auto px-6 py-2 bg-violet-800 text-white font-semibold rounded-md"
            >
                Add Blog
            </button>
            {/* blogs grid */}
            <div className="grid grid-cols-3 gap-6 mt-10">
                {blogsData.map((blog) =>(
                   
                    // Card
                    <div key={blog._id} className="relative">
                        <Link to={`/dashboard/blog/${blog._id}`}>
                            <div className={`bg-white shadow-lg rounded-lg overflow-hidden shadow-black/40 w-full transition-all duration-300 ${expandedCards[blog._id] ? 'h-[auto]' : 'h-[29rem]'}`}>
                                <div className="p-4 flex flex-col gap-2 h-full">
                                    <h2 className="text-white font-semibold bg-pri px-2 rounded-md w-max text-sm uppercase">
                                        {blog.treatment}
                                    </h2>
                                    <h3 className="text-gray-900 font-semibold text-xl ">
                                        {blog.title}
                                    </h3>
                                    <img
                                        src={blog.image?blog.image:bannerImage}
                                        alt="Blog Banner"
                                        className="blog-banner"
                                        style={{
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                            margin: '10px 0',
                                        }}
                                    />
                                    <p className="text-sm text-gray-700 font-semibold tracking-wider">
                                        {new Date(blog.updatedAt).toLocaleDateString()}
                                    </p>

                                    {/* Limit description to three lines */}
                                    <p className={`text-gray-600 text-sm flex-grow ${expandedCards[blog._id] ? '' : 'line-clamp-3'}`}>
                                        {blog.description}
                                    </p>

                                    {/* Show More / Show Less Button */}
                                    <div className="mt-auto"> {/* This keeps the button at the bottom */}
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault(); // Prevent link navigation
                                                handleShowToggle(blog._id);
                                            }}
                                            className={`w-full text-blue-600 font-semibold underline transition-colors duration-200`}
                                        >
                                            {expandedCards[blog._id] ? "Show Less" : "Show More"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DashBlog;
