import React from "react"
import { FaCalendarAlt, FaCommentDots, FaNotesMedical } from "react-icons/fa"
import parse from "html-react-parser"

const PatientPortal = ({ data }) => {
    return (
        <div className="bg-white shadow-md rounded-lg   px-10 md:px-20 lg:px-40 xl:px-60">
            <h2 className="text-4xl font-bold text-pri mb-8">Patient Portal</h2>
            <div className="flex flex-wrap justify-between items-center mb-6">
                <div className="flex items-center mb-4 pr-4">
                    <FaNotesMedical className="text-sec pr-2" size={28} />
                    <div>
                        <h3 className="text-xl font-semibold mb-1 text-sec">
                            Access Medical Records
                        </h3>
                        <p className="text-gray-800 text-sm">
                            View your health information and medical records
                            online.
                        </p>
                    </div>
                </div>
                <div className="flex items-center mb-4 pr-4">
                    <FaCalendarAlt className="text-sec pr-2" size={28} />
                    <div>
                        <h3 className="text-xl font-semibold mb-1 text-sec">
                            Schedule Appointments
                        </h3>
                        <p className="text-gray-800 text-sm">
                            Schedule appointments with your healthcare provider
                            online.
                        </p>
                    </div>
                </div>
                <div className="flex items-center mb-4 pr-4">
                    <FaCommentDots className="text-sec pr-2" size={28} />
                    <div>
                        <h3 className="text-xl font-semibold mb-1 text-sec">
                            Communicate with Providers
                        </h3>
                        <p className="text-gray-800 text-sm">
                            Send and receive messages from your healthcare
                            provider.
                        </p>
                    </div>
                </div>
            </div>
            <p className="  text-lg text-gray-600 leading-7  ">
                {data && parse(data)}
            </p>
        </div>
    )
}

export default PatientPortal
