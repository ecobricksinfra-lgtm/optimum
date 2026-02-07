import React from "react"
import { FiPhone } from "react-icons/fi"
import { RiUser3Line } from "react-icons/ri"
import { cities } from "../header/CityModal"
import { allDiseases } from "../header/DiseaseModal"
import { Link } from "react-router-dom"

const BlogAside = ({ blogsData }) => {
    return (
        <aside className="p-4  lg:px-10 bg-gradient-to-tr from-pri to-violet-800 lg:w-4/12">
            <h1 className="font-semibold text-white text-center my-6 text-3xl">
                Popular Blogs
            </h1>
            {blogsData && (
                <div className="flex flex-col gap-4">
                    <Link to={`/blogs/${blogsData[0]?._id}`}>
                        <SideCard {...blogsData[0]} />
                    </Link>
                    <Link to={`/blogs/${blogsData[1]?._id}`}>
                        <SideCard {...blogsData[1]} />
                    </Link>
                </div>
            )}
            <form className="bg-white  mt-10  rounded-md shadow-md shadow-black/50  px-8 pt-6 pb-8 mb-4 ">
                <h1 className="font-semibold text-pri text-2xl mb-6 text-center underline-offset-8 underline decoration-sec capitalize">
                    {`Lets Connect To Help You`}
                </h1>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <div className="relative flex items-center  ">
                        <div className="inline-block absolute left-1 top-1 h-full text-center text-gray-400">
                            <RiUser3Line className="mt-2" />
                        </div>
                        <input
                            className="pl-8  appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="mobile"
                    >
                        Mobile Number
                    </label>
                    <div className="relative flex items-center">
                        <div className="inline-block absolute left-1 top-1 h-full w-10 text-center text-gray-400">
                            <FiPhone className="mt-2" />
                        </div>
                        <input
                            className="pl-8  appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            id="mobile"
                            type="tel"
                            placeholder="Your Mobile Number"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="city"
                    >
                        City
                    </label>
                    <select
                        className=" appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                        id="city"
                    >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                            <option value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="disease"
                    >
                        Treatment
                    </label>
                    <select
                        className=" appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                        id="disease"
                    >
                        <option value="">Select Treatment</option>
                        {allDiseases.map((dis) => (
                            <option value={dis}>{dis}</option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-gradient-to-bl from-sky-400 to-sky-600 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline "
                        type="button"
                    >
                        Book Appointment
                    </button>
                </div>
            </form>
        </aside>
    )
}

export default BlogAside

const SideCard = ({ image, treatment, title, description }) => {
    return (
        <div className="flex items-center gap-4 p-2 rounded-md bg-white border-2 ">
            {image && (
                <img src={image} alt="" className="rounded-md w-24 h-24" />
            )}
            <div className="flex  flex-col gap-y-2">
                <h1 className="uppercase px-2 py-1 text-xs w-max bg-pri text-white font-semibold rounded-md">
                    {treatment}
                </h1>
                <h1 className="font-semibold capitalize">{title}</h1>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}
