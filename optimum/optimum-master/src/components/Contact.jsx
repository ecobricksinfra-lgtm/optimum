import React from "react"
import {
    RiMailAddFill,
    RiMailCloseFill,
    RiMailFill,
    RiUser3Line,
} from "react-icons/ri"
import { FiPhone } from "react-icons/fi"
import { cities } from "./header/CityModal"
import { allDiseases } from "./header/DiseaseModal"
import {
    FaTwitter,
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaEnvelope,
    FaPhone,
    FaPhoneAlt,
} from "react-icons/fa"
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai"

const Contact = ({ data, form = false }) => {
    return (
        <section className="py-12 px-8 bg-white flex flex-col gap-10  ">
            {/* left */}
            <div className=" ">
                <h1 className=" text-center lg:text-left font-semibold text-pri text-3xl underline-offset-8 underline decoration-sec ">
                    Get In Touch
                </h1>
                <p className="text-gray-700 mt-6">{data?.touch}</p>

                {form && (
                    <form className=" mx-auto bg-white border-4 border-pri mt-10 lg:mt-20 rounded-md shadow-md shadow-black/50  px-8 pt-6 pb-8 mb-4 lg:w-5/12">
                        <h1 className="font-semibold text-pri text-2xl mb-6 text-center underline-offset-8 underline decoration-sec ">
                            CALL NOW
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
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <div className="relative flex items-center  ">
                                <div className="inline-block absolute left-1 top-1 h-full text-center text-gray-400">
                                    <RiMailFill className="mt-2" />
                                </div>
                                <input
                                    className="pl-8  appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                    id="email"
                                    type="text"
                                    placeholder="Your Email"
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
                                />
                            </div>
                        </div>
                        {/* <div className="mb-4">
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
                </div> */}
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="disease"
                            >
                                Treatment
                            </label>
                            <select
                                className=" appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white "
                                id="disease"
                            >
                                <option value="">Select Treatment</option>

                                {allDiseases.map((disease) => (
                                    <option value={disease}>{disease}</option>
                                ))}
                            </select>
                        </div>
                        {/* check box */}
                        <div className="flex gap-x-6 text-xs my-4 text-gray-600">
                            <input type="checkbox" />
                            <p>
                                I confirm that I give my consent to receive
                                future emails to my inbox
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-gradient-to-bl from-sky-300 to-sky-500 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline "
                                type="button"
                            >
                                Book Appointment
                            </button>
                        </div>
                    </form>
                )}

                {/* <div className="flex flex-wrap items-center gap-6 justify-center mt-12">
                    <a href="https://twitter.com/@Optimummhealth">
                        <div className="w-16 h-16 rounded-full cursor-pointer bg-gradient-to-tr from-pri to-violet-800   flex items-center justify-center">
                            <FaTwitter className="text-white text-2xl hover:text-sec transition-all " />
                        </div>
                    </a>
                    <div className="w-16 h-16 rounded-full cursor-pointer bg-gradient-to-tr from-pri to-violet-800   flex items-center justify-center mx-4">
                        <FaWhatsapp className="text-white text-2xl hover:text-sec transition-all " />
                    </div>
                    <a href="https://www.instagram.com/optimumhealthoriginal/">
                        <div className="w-16 h-16 rounded-full cursor-pointer bg-gradient-to-tr from-pri to-violet-800   flex items-center justify-center">
                            <FaInstagram className="text-white text-2xl hover:text-sec transition-all " />
                        </div>
                    </a>
                    <a href="https://business.facebook.com/latest/home?nav_ref=bm_home_redirect&asset_id=115835388174368">
                        <div className="w-16 h-16 rounded-full cursor-pointer bg-gradient-to-tr from-pri to-violet-800   flex items-center justify-center mx-4">
                            <FaFacebook className="text-white text-2xl hover:text-sec transition-all " />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/company/optimumhealthcare/?viewAsMember=true">
                        <div className="w-16 h-16 rounded-full cursor-pointer bg-gradient-to-tr from-pri to-violet-800   flex items-center justify-center mx-4">
                            <AiFillLinkedin className="text-white text-2xl hover:text-sec transition-all " />
                        </div>
                    </a>

                    <a href="https://www.youtube.com/@OptimumHealth-wz8kb/about">
                        <div className="w-16 h-16 rounded-full cursor-pointer bg-gradient-to-tr from-pri to-violet-800   flex items-center justify-center mx-4">
                            <AiFillYoutube className="text-white text-2xl hover:text-sec transition-all " />
                        </div>
                    </a>

                    <a href="mailto:info@optimumhealth.in">
                        <div className="w-16 h-16 rounded-full cursor-pointer bg-gradient-to-tr from-pri to-violet-800   flex items-center justify-center">
                            <FaEnvelope className="text-white text-2xl hover:text-sec transition-all " />
                        </div>
                    </a>
                    <a href="tel:+91-7845838392">
                        <div className="w-16 h-16 rounded-full cursor-pointer bg-gradient-to-tr from-pri to-violet-800   flex items-center justify-center mx-4">
                            <FaPhoneAlt className="text-white text-2xl hover:text-sec transition-all " />
                        </div>
                    </a>
                </div> */}
            </div>
            {/* right */}
        </section>
    )
}

export default Contact
