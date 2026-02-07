import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import heroImage from "../../assets/doctor.png"
import { RiUser3Line } from "react-icons/ri"
import { FiPhone } from "react-icons/fi"
import useEnquire from "../../hooks/useEnquire"
import useDatas from "../../store/useDatas"

const Hero = ({ data }) => {
    const { treatment } = useParams()
    const enquire = useEnquire()
    const { cities, treatments } = useDatas()

    useEffect(() => {
        enquire.setTreatment(treatment)
    }, [treatment])

    return (
        <div className="flex flex-col py-10 lg:py-2 px-6 lg:flex-row items-center relative overflow-hidden bg-gradient-to-br  from-violet-950  to-violet-500">
            {/* Content */}
            <div className="flex flex-col gap-y-8 text-white lg:max-w-[30%] w-full">
                <h1 className="text-white capitalize text-3xl font-semibold">
                    {data?.title}
                </h1>
                <p>{data?.subtitle}</p>
                <button className="w-full lg:w-auto bg-gradient-to-br from-sky-600 to-sky-400 hover:scale-105 text-white font-semibold py-3 active:scale-95 px-8 rounded-md transition-all mr-4 shadow-md shadow-black/50">
                    Book Appointment
                </button>
            </div>
            {/* Img */}
            <div className="lg:w-4/12 z-20">
                <img src={heroImage} alt="Hero" className="w-full" />
            </div>
            {/* Form */}
            <form className="bg-white  mt-10 lg:mt-0 rounded-md shadow-md shadow-black/50  px-8 pt-6 pb-8 mb-4 lg:w-[35%]">
                <h1 className="font-semibold text-pri text-2xl mb-6 text-center underline-offset-8 underline decoration-sec capitalize">
                    {`Lets Schedule Your Surgery For ${treatment} Surgery`}
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
                            value={enquire.name}
                            onChange={(e) => enquire.setName(e.target.value)}
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
                            value={enquire.mobileNumber}
                            onChange={(e) =>
                                enquire.setMobileNumber(e.target.value)
                            }
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
                        value={enquire.city}
                        onChange={(e) => enquire.setCity(e.target.value)}
                    >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                            <option value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        onClick={enquire.postEnquire}
                        className="bg-gradient-to-bl from-sky-300 to-sky-500 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline "
                        type="button"
                    >
                        Book Appointment
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Hero
