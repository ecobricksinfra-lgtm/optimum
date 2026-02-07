import {
    FaHeartbeat,
    FaPills,
    FaUserMd,
    FaBrain,
    FaCarrot,
    FaWheelchair,
} from "react-icons/fa"

const Services = () => {
    return (
        <section className=" px-10 md:px-20 lg:px-40 xl:px-60 py-12">
            <h2 className="text-4xl text-pri font-bold mb-8 capitalize">
                Other services provided
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2   gap-8 items-center">
                <div className="">
                    <div className="bg-white shadow-lg rounded-lg p-5 border-2 border-sec shadow-black/20 ">
                        <div className="flex items-center mb-4">
                            <FaHeartbeat className="mr-3 text-sec text-2xl" />
                            <h4 className="font-bold text-pri text-xl capitalize ">
                                Diagnosis and treatment
                            </h4>
                        </div>
                        <p className="text-gray-600  text-lg ">
                            Diagnosis and treatment of common illnesses, such as
                            colds, flu, and allergies.
                        </p>
                    </div>
                </div>

                <div className="">
                    <div className="bg-white shadow-lg rounded-lg p-5 border-2 border-sec shadow-black/20 ">
                        <div className="flex items-center mb-4">
                            <FaPills className="mr-3 text-sec text-2xl" />
                            <h4 className="font-bold text-pri text-xl capitalize ">
                                Prescription medications
                            </h4>
                        </div>
                        <p className="text-gray-600  text-lg ">
                            Prescription medications for various health
                            conditions, including birth control, anxiety, and
                            depression.
                        </p>
                    </div>
                </div>

                <div className="">
                    <div className="bg-white shadow-lg rounded-lg p-5 border-2 border-sec shadow-black/20 ">
                        <div className="flex items-center mb-4">
                            <FaUserMd className="mr-3 text-sec text-2xl" />
                            <h4 className="font-bold text-pri text-xl capitalize ">
                                Referrals to specialists
                            </h4>
                        </div>
                        <p className="text-gray-600  text-lg ">
                            Referrals to specialists for more complex medical
                            issues, such as cardiology or dermatology.
                        </p>
                    </div>
                </div>

                <div className="">
                    <div className="bg-white shadow-lg rounded-lg p-5 border-2 border-sec shadow-black/20 ">
                        <div className="flex items-center mb-4">
                            <FaBrain className="mr-3 text-sec text-2xl" />
                            <h4 className="font-bold text-pri text-xl capitalize ">
                                Mental health counselling and therapy
                            </h4>
                        </div>
                        <p className="text-gray-600  text-lg ">
                            Mental health counselling and therapy for issues
                            such as stress, anxiety, and depression.
                        </p>
                    </div>
                </div>

                <div className="">
                    <div className="bg-white shadow-lg rounded-lg p-5 border-2 border-sec shadow-black/20 ">
                        <div className="flex items-center mb-4">
                            <FaCarrot className="mr-3 text-sec text-2xl" />
                            <h4 className="font-bold text-pri text-xl capitalize ">
                                Nutrition and lifestyle counselling
                            </h4>
                        </div>
                        <p className="text-gray-600  text-lg ">
                            Nutrition and lifestyle counselling for weight
                            management and chronic disease prevention.
                        </p>
                    </div>
                </div>

                <div className="">
                    <div className="bg-white shadow-lg rounded-lg p-5 border-2 border-sec shadow-black/20 ">
                        <div className="flex items-center mb-4">
                            <FaWheelchair className="mr-3 text-sec text-2xl" />
                            <h4 className="font-bold text-pri text-xl capitalize ">
                                Physical Therapy
                            </h4>
                        </div>
                        <p className="text-gray-600  text-lg ">
                            Physical therapy for musculoskeletal injuries and
                            chronic pain management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
