import React from "react"
import { FaClock, FaMapMarkerAlt, FaStar } from "react-icons/fa"

const OurCli = ({ city, disease }) => {
    return (
        <div className="my-12 px-3 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <ClinicCard city={city} disease={disease} />
            <ClinicCard city={city} disease={disease} />
        </div>
    )
}

export default OurCli

const ClinicCard = ({ city, disease }) => {
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
                    <h1 className="px-2 text-sm my-2 py-1 bg-pri text-white rounded-full w-max">
                        {disease}
                    </h1>
                </div>
            </div>
            <div className="py-2 flex flex-col gap-y-2">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolore et vitae, voluptas cumque cupiditate alias totam
                    ipsum hic maiores fuga iusto dolorem incidunt laudantium
                    inventore reprehenderit numquam dignissimos libero quas.
                </p>
                <h1 className="font-semibold">Facilities</h1>
                <div className="flex flex-wrap gap-2">
                    <h1 className="px-2 text-sm my-2 py-1 bg-pri text-white rounded-full w-max">
                        Online Appointment
                    </h1>
                    <h1 className="px-2 text-sm my-2 py-1 bg-pri text-white rounded-full w-max">
                        Waiting Lounge
                    </h1>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex items-center">
                    <FaMapMarkerAlt className="text-pri mr-1" />
                    <span>{city}</span>
                </div>
                <div className="flex items-center mt-2">
                    <FaClock className="text-pri mr-1" />
                    <span>All Days: </span>
                    <span className="ml-1">9:00 AM - 6:00 PM</span>
                </div>
            </div>
            <button
                className="bg-gradient-to-bl from-sky-400 to-sky-600 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="button"
            >
                Book Appointment
            </button>
        </div>
    )
}
