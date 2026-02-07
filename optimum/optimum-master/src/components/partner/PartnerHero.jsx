import React from "react"
import { cities } from "../header/CityModal"
import { RiUser3Line } from "react-icons/ri"
import { FiPhone } from "react-icons/fi"
import { TbBuildingHospital } from "react-icons/tb"

const PartnerHero = ({ data }) => {
    return (
        <section className="flex flex-col justify-around py-10 px-6 lg:px-10 lg:flex-row items-center relative overflow-hidden bg-gradient-to-br  from-violet-950  to-violet-500">
            {/* Content */}
            <div className="lg:max-w-[50%] flex flex-col  gap-y-8 ">
                <h1 className="text-4xl font-semibold text-white capitalize">
                    {data?.partTitle}
                </h1>
                <p className="text-white lg:w-max p-2 text-center font-semibold py-1 my-3 text-lg  ">
                    {data?.partSubtitle}
                </p>
                <button className="w-full lg:w-max  bg-gradient-to-br from-sky-600 to-sky-400 hover:scale-105 text-white font-semibold py-2 active:scale-95 px-16 rounded-md transition-all mr-4 shadow-md shadow-black/50">
                    info@optimumhealth.in{" "}
                </button>
            </div>
            {/* Form */}
            <form className="bg-white  mt-10 lg:mt-0 rounded-md shadow-md shadow-black/50  px-8 pt-6 pb-8 mb-4 lg:w-[35%]">
                <h1 className="font-semibold text-pri text-2xl mb-4 text-center  capitalize">
                    {`Share Your Hospital Details`}
                </h1>
                <p className="text-sec text-center capitalize font-semibold mb-4">
                    we will reach out to you with the next steps
                </p>
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
                            placeholder="Name"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="mobile"
                    >
                        Mobile No.
                    </label>
                    <div className="relative flex items-center">
                        <div className="inline-block absolute left-1 top-1 h-full w-10 text-center text-gray-400">
                            <FiPhone className="mt-2" />
                        </div>
                        <input
                            className="pl-8  appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            id="mobile"
                            type="tel"
                            placeholder="Mobile Number"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="hospital"
                    >
                        Hospital Name
                    </label>
                    <div className="relative flex items-center">
                        <div className="inline-block absolute left-1 top-1 h-full w-10 text-center text-gray-400">
                            <TbBuildingHospital className="mt-2" />
                        </div>
                        <input
                            className="pl-8  appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            id="hospital"
                            type="text"
                            placeholder="Hospital Name"
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

                <div className="flex items-center justify-between">
                    <button
                        className="bg-gradient-to-bl from-sky-300 to-sky-500 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                        type="button"
                    >
                        Partner With Us
                    </button>
                </div>
            </form>
        </section>
    )
}

export default PartnerHero
