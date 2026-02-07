import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { RiUser3Line } from "react-icons/ri"
import { FiPhone } from "react-icons/fi"
import useEnquire from "../hooks/useEnquire"
import useDatas from "../store/useDatas"
// import { cities } from "./header/CityModal"
// import { allDiseases, diseases } from "./header/DiseaseModal"

function Popup({ onClose }) {
    const enquire = useEnquire()
    const { cities, treatments } = useDatas()

    function handleSubmit(event) {
        event.preventDefault()
        onClose()
    }

    return (
        <div
            // onClick={handleSubmit}
            className="fixed inset-0 z-50 flex bg-black/20 items-center justify-center backdrop-blur-sm  w-full overflow-hidden font-pop "
        >
            {/* PopUp */}
            <div className=" w-10/12 lg:w-auto relative bg-white rounded-lg px-4  md:px-6 overflow-hidden shadow-xl shadow-black/40 pb-8 border-4 border-pri ">
                <button
                    className="absolute top-3 right-3 focus:outline-none text-white font-bold "
                    onClick={onClose}
                >
                    <AiOutlineClose className="h-6 w-8 text-pri font-bold" />
                </button>
                <div className="flex flex-col items-center p-6">
                    <h3 className="text-2xl text-pri font-semibold mb-4">
                        Book an Appointment
                    </h3>
                    <p className="text-sec">
                        Fill in the form below to book an appointment with us.
                    </p>
                </div>
                {/* Form */}
                <form className="bg-white rounded-md w-full">
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
                                className="pl-8 shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                                value={enquire.name}
                                onChange={(e) =>
                                    enquire.setName(e.target.value)
                                }
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
                                className="pl-8 shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
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
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                             "
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
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="disease"
                        >
                            Treatment{" "}
                        </label>
                        <select
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                             "
                            id="disease"
                            value={enquire.treatment}
                            onChange={(e) =>
                                enquire.setTreatment(e.target.value)
                            }
                        >
                            <option value="">Select Treatment</option>

                            {treatments.map((disease) => (
                                <option value={disease}>{disease}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={enquire.postEnquire}
                            className="bg-gradient-to-br from-sky-300 to-sky-500 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline 
                             "
                            type="button"
                        >
                            Book Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Popup
