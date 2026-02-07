import React from "react"
import { useParams } from "react-router-dom"
import { FaStar, FaMapMarkerAlt, FaClock } from "react-icons/fa"

const Clinics = () => {
    const { treatment } = useParams()

    return (
        <section className="px-4 lg:px-10 py-16 flex flex-col gap-y-8">
            <h1 className="text-center text-4xl text-pri font-semibold capitalize underline underline-offset-8 decoration-sec">{`Best Clinics for ${treatment} surgery`}</h1>
            <div className="flex  flex-col  py-8 lg:flex-row gap-8 justify-around">
                <ClinicCard />
                <ClinicCard />
                <ClinicCard />
            </div>
        </section>
    )
}

export default Clinics

const ClinicCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-sec">
            <div className="flex items-start">
                <img
                    src="https://media.istockphoto.com/id/1364075546/photo/empty-corridor-in-modern-hospital-with-information-counter-and-hospital-bed-in-rooms-3d.jpg?s=612x612&w=0&k=20&c=xxFDmIVpH1wJaaiorpvfzec4RRggSb48PDb_dU9bTjo="
                    alt="Clinic"
                    className="w-28 h-24 rounded-lg"
                />
                <div className="ml-4">
                    <h3 className="text-xl font-semibold">ABCEFGHI Clinic</h3>
                    <div className="flex items-center mt-2">
                        <FaStar className="text-pri mr-1" />
                        <span>4.5</span>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex items-center">
                    <FaMapMarkerAlt className="text-pri mr-1" />
                    <span>Location</span>
                </div>
                <div className="flex items-center mt-2">
                    <FaClock className="text-pri mr-1" />
                    <span>All Days: </span>
                    <span className="ml-1">9:00 AM - 6:00 PM</span>
                </div>
            </div>
            <button
                className="bg-gradient-to-bl from-sky-300 to-sky-500 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="button"
            >
                Book Appointment
            </button>
        </div>
    )
}
