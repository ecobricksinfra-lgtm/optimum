import React, { useEffect, useState } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdLocalHospital } from "react-icons/md"
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { HiOutlineDocumentReport } from "react-icons/hi"
import { BiChevronDown } from "react-icons/bi"
import { BiSearchAlt2 } from "react-icons/bi"
import { RiArrowRightSLine } from "react-icons/ri"
import { BsChevronDown } from "react-icons/bs"
import CityModal from "./CityModal"
import DiseaseModal from "./DiseaseModal"
import { DropdownText } from "./DropDown"
import { HiLocationMarker } from "react-icons/hi"
import { BiMenu } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import LOGO from "../../assets/logo.png"
import { Link, useLocation } from "react-router-dom"
import { FiLogIn } from "react-icons/fi"
import TreatmentsModal from "./TreatmentsModal"
import axios from "axios"

export const forPatients = [
    { title: "FAQs", link: "faq" },
    { title: "Videos", link: "videos" },
    { title: "Our Doctors", link: "our-doctors" },
    { title: "Our Clinics", link: "our-clinics" },
    { title: "BMI Calculator", link: "bmi" },
]

export const forCorporate = [
    {
        title: "Medical Care",
        link: "",
    },
    {
        title: "Camp",
        link: "",
    },
]

export const forCompany = [
    { title: "Partner With Us", link: "partner" },
    { title: "Doctor Onboarding", link: "doctor-partner" },
    { title: "Media Coverage", link: "media" },
    { title: "About Us", link: "about" },
    { title: "Careers", link: "careers" },
    { title: "Find Clinic", link: "" },
    { title: "Blogs", link: "blogs" },
    { title: "Contact Us", link: "contact-us" },
]

function Header({
    isNav,
    setIsNav,
    city,
    setCity,
    disease,
    setDisease,
    headers,
}) {
    const [modalType, setModalType] = useState("")
    const [forPatients, setForPatients] = useState([])
    const [forCorporate, setForCorporates] = useState([])
    const [forCompany, setForCompany] = useState([])

    useEffect(() => {
        if (headers) {
            setForPatients(headers[0].forPatients)
            setForCompany(headers[0].forCompany)
            setForCorporates(headers[0].forCorporates)
        }
    }, [headers])

    const loc = useLocation().pathname

    return loc.includes("/dashboard") ? (
        <></>
    ) : (
        <header className="bg-white  py-1 z-50 font-pop ">
            <div className="containe mx-auto px-4 flex items-center justify-between">
                {/* <Logo /> */}
                <Link to={"/"}>
                    <div className="flex items-center">
                        <img src={LOGO} alt="" className="h-20 w-20" />
                        <div className="flex flex-col justify-between items-center text-black">
                            <h1 className="text-2xl font-semibold  ">
                                Optimum
                            </h1>
                            <h1 className="text-sm font-medium tracking-widest  ">
                                HEALTH CARE
                            </h1>
                        </div>
                    </div>
                </Link>
                {/* Right  */}

                {/* Mobile */}
                {isNav ? (
                    <button onClick={() => setIsNav(false)}>
                        <AiOutlineClose className="lg:hidden text-pri text-3xl" />
                    </button>
                ) : (
                    <button onClick={() => setIsNav(true)}>
                        <BiMenu className="lg:hidden text-pri text-3xl" />
                    </button>
                )}

                <div className="hidden lg:flex  items-center">
                    {/* City & Disease*/}
                    <div className="relative ">
                        <div className="flex">
                            <button
                                onClick={() => setModalType("city")}
                                className="bg-gradient-to-tr from-sky-300 to-sky-600 text-gray-700 py-2 pr-4 px-2 rounded-l-md flex items-center border-r-2 border-white  "
                            >
                                <FaMapMarkerAlt className="mr-2 text-white" />
                                <span className="hidden md:inline-block text-xs text-white">
                                    {city}
                                </span>
                            </button>
                            {/* Dieseases */}
                            <button
                                onClick={() => setModalType("disease")}
                                className="bg-gradient-to-br from-pri to-violet-800 text-white py-2  px-4 rounded-r-md flex items-center"
                            >
                                <input
                                    value={disease}
                                    onChange={(e) => setDisease(e.target.value)}
                                    type="text"
                                    placeholder="Search diesase, doctors, treatment "
                                    className="block w-full md:w-64  bg-transparent text-white placeholder-gray-200 focus:outline-none  focus:ring-0 text-sm "
                                />
                                <BiSearchAlt2 className="ml-2 text-sec" />
                            </button>
                        </div>

                        {/*   City Drop Down   */}
                        <div
                            className={`absolute right-0 w-full mt-2 z-50 ${
                                modalType == "city" ? "scale-100" : "scale-0"
                            } transition-all origin-top `}
                        >
                            <CityModal
                                setCity={setCity}
                                setModalType={setModalType}
                            />
                        </div>
                        {/*   Disease Drop Down   */}
                        <div
                            className={`absolute right-0 w-full mt-2 z-50 ${
                                modalType == "disease" ? "scale-100" : "scale-0"
                            } transition-all origin-top `}
                        >
                            <DiseaseModal
                                disease={disease}
                                setDisease={setDisease}
                                setModalType={setModalType}
                            />
                        </div>
                    </div>

                    {/* Treatments */}
                    {loc !== "/header2" && (
                        <div className="flex items-center text-pri ml-4 group relative cursor-pointer">
                            <h1>Treatments</h1>
                            <BsChevronDown className="text-xs ml-2" />
                            {/*   Dropdown   */}
                            <TreatmentsModal
                                treatments={headers && headers[0].treatments}
                            />
                        </div>
                    )}

                    {/* For Patients */}
                    <div className="flex items-center text-pri ml-4 group relative cursor-pointer">
                        <h1 className="font-medium">For Patients</h1>
                        <BsChevronDown className="text-xs ml-2" />
                        {/*   Dropdown   */}
                        <div
                            className={`z-50 bg-white shadow-lg shadow-black/20 border-2 border-violet-400 rounded-md text-gray-700  absolute top-full translate-y-2 w-max group-hover:scale-100 scale-0 hover:scale-100 transition-all origin-top `}
                        >
                            {forPatients.map((patients) => (
                                <Link to={`${patients.link}`}>
                                    <DropdownText text={patients.name} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* For Corporate*/}
                    <div className="flex items-center text-pri ml-4 group relative cursor-pointer">
                        <h1>For Corporate</h1>
                        <BsChevronDown className="text-xs ml-2" />
                        {/*   Dropdown   */}
                        <div
                            className={` z-50 bg-white shadow-lg shadow-black/20 border-2 border-violet-400 rounded-md text-gray-700  absolute top-full translate-y-2 w-max group-hover:scale-100 scale-0 hover:scale-100 transition-all origin-top `}
                        >
                            {forCorporate.map((corporate) => (
                                <Link to={`${corporate.link}`}>
                                    <DropdownText text={corporate.name} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* Our COmpany*/}
                    <div className="flex items-center text-pri ml-4 group relative cursor-pointer">
                        <h1>Our Company</h1>
                        <BsChevronDown className="text-xs ml-2" />
                        {/*   Dropdown   */}
                        <div
                            className={`z-50 bg-white shadow-lg shadow-black/20 border-2 border-violet-400 rounded-md text-gray-700  absolute top-full translate-y-2 w-max group-hover:scale-100 scale-0 hover:scale-100 transition-all origin-top `}
                        >
                            {forCompany.map((company) => (
                                <Link to={`${company.link}`}>
                                    <DropdownText text={company.name} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/*   Book Appointment Btn.   */}
                    {/* <button className="px-6 py-2  bg-sec text-white  rounded-md font-semibold ml-4 hover:scale-105 transition-all active:scale-95 shadow-md shadow-black/30">
                        Book Appointment
                    </button> */}
                    {/* City */}
                    {/* <div className="ml-3 text-white flex items-center cursor-pointer">
                        <HiLocationMarker className="text-lg mr-1" />
                        <h1>City</h1>
                    </div> */}
                    {/*   Sign Up / Log In   */}
                    {/* <button className="shadow-md shadow-black/30 px-4 py-2 border-2 hover:scale-x-110 transition-all active:scale-90 border-sec bg-white text-sec  rounded-md font-semibold ml-5">
                        Login / Signup
                    </button> */}
                    <Link to={"/login"}>
                        <button className="px-3 text-white ml-3 bg-gradient-to-br from-pri to-violet-900 py-3 rounded-md hover:scale-105 transition-all active:scale-95 shadow-md shadow-black/30">
                            <FiLogIn className="text-white font-bold" />
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
