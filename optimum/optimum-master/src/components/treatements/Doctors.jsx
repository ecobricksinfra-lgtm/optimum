import React from "react"
import {
    FaStar,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaClock,
} from "react-icons/fa"
import { useParams } from "react-router-dom"

const Doctors = () => {
    const { treatment } = useParams()

    return (
        <section className="px-4 lg:px-10 py-16 flex flex-col gap-y-8">
            <h1 className="text-center text-4xl text-pri font-semibold capitalize underline underline-offset-8 decoration-sec">{`Best ${treatment} specialists for ${treatment} surgery`}</h1>
            <div className="flex  flex-col  lg:flex-row gap-8 justify-around">
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
            </div>
        </section>
    )
}

export default Doctors

const DoctorCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg shadow-black/30 p-6 border-2 border-pri">
            <div className="flex items-start">
                <img
                    src="https://randomuser.me/api/portraits/men/14.jpg"
                    alt="Doctor"
                    className="w-20 h-20 rounded-lg"
                />
                <div className="ml-4">
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
                    <span>City</span>
                </div>
            </div>
            <button
                className="bg-gradient-to-bl from-violet-400 to-violet-600 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="button"
            >
                Book Appointment
            </button>
        </div>
    )
}
