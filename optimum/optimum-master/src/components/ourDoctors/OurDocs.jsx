import axios from "axios"
import React, { useEffect, useState } from "react"
import { FaClock, FaMapMarkerAlt, FaStar } from "react-icons/fa"

const OurDocs = ({ city, disease }) => {
    const [data, setData] = useState([])

    const fetchDoctors = async () => {
        try {
            const { data } = await axios.get(
                "http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/doctor"
            )
            setData(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchDoctors()
    }, [])

    return (
        <div className="my-12 px-3 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <DoctorCard city={city} disease={disease} />
            <DoctorCard city={city} disease={disease} />
        </div>
    )
}

export default OurDocs

const DoctorCard = ({ city, disease }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg shadow-black/30 p-6 border-2 border-pri">
            <div className="flex items-start">
                <img
                    src="https://randomuser.me/api/portraits/men/14.jpg"
                    alt="Doctor"
                    className="w-28 h-28 rounded-lg"
                />
                <div className="ml-4 ">
                    <h3 className="text-xl font-semibold">Dr. John Doe</h3>
                    <p className="text-gray-500">MBBS, MD</p>
                    <div className="flex gap-x-2 font-semibold text-gray-800 ">
                        <p className=" line-through">$800</p>
                        <h1>
                            <span className="font-semibold text-sec">
                                FREE{" "}
                            </span>
                            consultation
                        </h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="font-semibold my-4 ">Specialities</h1>
                <p className="px-2 py-1 bg-pri w-max text-white rounded-full">
                    {disease}
                </p>
            </div>
            <div className="flex items-center justify-around mt-4">
                <div className="flex items-center mr-4">
                    <FaStar className="text-sec mr-1" />
                    <span>4.5</span>
                </div>
                <div className="flex items-center mr-4">
                    <FaClock className="text-sec mr-1" />
                    <span>10+ Yrs Exp</span>
                </div>
                <div className="flex items-center">
                    <FaMapMarkerAlt className="text-sec mr-1" />
                    <span>{city}</span>
                </div>
            </div>
            <button
                className="bg-gradient-to-bl from-violet-500 to-violet-800 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-[.98] font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="button"
            >
                Book Appointment
            </button>
        </div>
    )
}
