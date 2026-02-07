import React from "react"
import parse from "html-react-parser"

const HealthCareTeam = ({ data }) => {
    return (
        <div className="bg-white p-10 pt-20  px-10 md:px-20 lg:px-40 xl:px-60 ">
            <h2 className="text-4xl text-pri font-bold mb-6">
                Our Health Care Team
            </h2>
            <p className="py-2 text-gray-600 pb-6 text-lg">
                {data && parse(data)}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-violet-200 to-violet-500 border-2 border-pri rounded-lg p-6 shadow-lg ">
                    <h3 className="text-xl  font-bold mb-2">
                        Electronic Health Records (EHRs)
                    </h3>

                    <p className="text-gray-700 mb-4">
                        Our EHR system streamlines the storage and management of
                        patient medical records, allowing healthcare providers
                        to easily access and update patient information, while
                        also ensuring that records remain secure and compliant
                        with healthcare regulations.
                    </p>
                </div>
                <div className="bg-gradient-to-br from-violet-200 to-violet-500 border-2 border-pri rounded-lg p-6 shadow-lg ">
                    <h3 className="text-xl  font-bold mb-2">
                        Practice Management Systems
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Our practice management system simplifies administrative
                        tasks for healthcare providers, including appointment
                        scheduling, billing, and claims processing. This allows
                        healthcare providers to focus on providing high-quality
                        patient care, while also reducing administrative costs
                        and improving operational efficiency.
                    </p>
                </div>
                <div className="bg-gradient-to-br from-violet-200 to-violet-500 border-2 border-pri rounded-lg p-6 shadow-lg  ">
                    <h3 className="text-xl  font-bold mb-2">
                        Telehealth Services
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Our telehealth services allow healthcare providers to
                        connect with patients virtually, providing remote
                        consultations and monitoring. This allows patients to
                        access care more easily and conveniently, while also
                        reducing the need for in-person visits and improving
                        patient outcomes.
                    </p>
                </div>
            </div>
            {/* <div className="mt-8">
                <h3 className="text-2xl font-bold mb-2 text-sec">
                    Data Analytics and Population Health Management
                </h3>
                <p className="text-gray-700 mb-4  text-lg">
                    Our data analytics and population health management tools
                    provide insurers and healthcare payers with real-time
                    insights into patient health, allowing for more informed
                    decisions about care management and cost optimization. This
                    ultimately leads to improved patient outcomes and reduced
                    healthcare costs.
                </p>
            </div> */}
        </div>
    )
}

export default HealthCareTeam
