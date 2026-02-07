import { BsFillTelephoneFill } from "react-icons/bs"
import { MdMail } from "react-icons/md"
import { IoMdArrowBack } from "react-icons/io"
import {
    AiFillInstagram,
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillLinkedin,
    AiFillYoutube,
} from "react-icons/ai"
import { RiWhatsappFill } from "react-icons/ri"

import LOGO from "../assets/logo.png"
import { useState } from "react"

import {
    CosmeticArray,
    DentalArray,
    GynaecologyArray,
    MentalArray,
    OphthalmologyArray,
    OrthoArray,
    laparoscopyArray,
    proctologyArray,
    urologyArray,
    vascularArray,
} from "./header/Menubar"
import { Link, useLocation } from "react-router-dom"

const diseases = [
    "Proctology",
    "Laparoscopy",
    "Urology",
    "Vascular",
    "Ophthalmology",
    "Gynaecology",
    "Cosmetic",
    "Dental",
    "Ortho",
    "Mental Wellness",
]

const Footer = () => {
    const [selectedDis, setSelectedDis] = useState("")

    const loc = useLocation().pathname

    return loc.includes("/dashboard") ? (
        <></>
    ) : (
        <footer className="bg-gradient-to-br from-black to-black  text-white py-8 px-10 -z-50 font-pop">
            <div className="mx-auto justify-around flex flex-wrap lg:flex-nowrap">
                <div className="w-full mr-10  px-3 mb-8">
                    <div className="flex items-center justify-center">
                        <img src={LOGO} alt="" className="h-32 w-32" />
                        <div className="flex flex-col justify-between items-center text-white">
                            <h1 className="text-3xl font-semibold  ">
                                Optimum
                            </h1>
                            <h1 className="text-base font-medium tracking-widest  ">
                                HEALTH CARE
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col  mx-auto mt-8 gap-8 items-center justify-center   ">
                        <a href="mailto:info@optimumhealth.in">
                            <div className="flex gap-x-2 text-white items-center text-lg bg-gradient-to-br from-pri to-violet-800 rounded-md  px-10 py-2 w-max">
                                <MdMail className="" />
                                <button>info@optimumhealth.in</button>
                            </div>
                        </a>
                        <a href="tel:+91-7845838392">
                            <div className="flex gap-x-2 text-white items-center bg-gradient-to-br from-pri to-violet-800 text-lg rounded-md  px-10 py-2 w-max">
                                <BsFillTelephoneFill className="" />
                                <button>+91-7845838392</button>
                            </div>
                        </a>
                        <p>Chennai</p>
                    </div>
                    <div className="flex gap-x-8 justify-center items-center mt-10 ">
                        <a href="https://business.facebook.com/latest/home?nav_ref=bm_home_redirect&asset_id=115835388174368">
                            <AiFillFacebook className="text-white hover:text-pri text-3xl transition-all" />
                        </a>
                        <a href="https://www.instagram.com/optimumhealthoriginal/">
                            <AiFillInstagram className="text-white hover:text-pri text-3xl transition-all" />
                        </a>
                        <a href="https://twitter.com/@Optimummhealth">
                            <AiOutlineTwitter className="text-white hover:text-pri text-3xl transition-all" />
                        </a>
                        <a href="">
                            <RiWhatsappFill className="text-white hover:text-pri text-3xl transition-all" />
                        </a>
                        <a href="https://www.linkedin.com/company/optimumhealthcare/?viewAsMember=true">
                            <AiFillLinkedin className="text-white hover:text-pri text-3xl transition-all" />
                        </a>
                        <a href="https://www.youtube.com/@OptimumHealth-wz8kb/about">
                            <AiFillYoutube className="text-white hover:text-pri text-3xl transition-all" />
                        </a>
                    </div>
                </div>
                {/* Treatments */}
                <div className="w-full   px-3 mb-8">
                    <h4
                        onClick={() => setSelectedDis("")}
                        className="font-semibold text-xl text-pri mb-4 cursor-pointer "
                    >
                        <IoMdArrowBack
                            className={` text-lg mr-2 ${
                                selectedDis.length > 0
                                    ? "inline-block"
                                    : "hidden"
                            } `}
                        />
                        Treatments
                    </h4>
                    <div className="flex">
                        {/* Treat... */}
                        <div
                            className={`${
                                selectedDis.length > 0
                                    ? "scale-0 absolute"
                                    : "scale-100"
                            }`}
                        >
                            {diseases.map((dis) => (
                                <h1
                                    onClick={() => setSelectedDis(dis)}
                                    className={`cursor-pointer mb-2 transition-all text-gray-300 hover:text-sec  hover:translate-x-2`}
                                >
                                    {dis}
                                </h1>
                            ))}
                        </div>
                        {/* right */}
                        <div>
                            {selectedDis === "Proctology" && (
                                <RightSide array={proctologyArray} />
                            )}
                            {selectedDis === "Laparoscopy" && (
                                <RightSide array={laparoscopyArray} />
                            )}
                            {selectedDis === "Urology" && (
                                <RightSide array={urologyArray} />
                            )}
                            {selectedDis === "Vascular" && (
                                <RightSide array={vascularArray} />
                            )}
                            {selectedDis === "Ophthalmology" && (
                                <RightSide array={OphthalmologyArray} />
                            )}
                            {selectedDis === "Gynaecology" && (
                                <RightSide array={GynaecologyArray} />
                            )}
                            {selectedDis === "Cosmetic" && (
                                <RightSide array={CosmeticArray} />
                            )}
                            {selectedDis === "Dental" && (
                                <RightSide array={DentalArray} />
                            )}
                            {selectedDis === "Ortho" && (
                                <RightSide array={OrthoArray} />
                            )}
                            {selectedDis === "Mental Wellness" && (
                                <RightSide array={MentalArray} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full   px-3 mb-8">
                    <h4 className="font-semibold text-xl text-pri mb-4">
                        For Patients
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to={"/faq"}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/videos"}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                Videos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/our-doctors"}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                Our Doctors
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/our-clinics"}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                Our Clinics
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/bmi"}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                BMI Calculator
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full   px-3 mb-8">
                    <h4 className="font-semibold text-xl text-pri mb-4">
                        For Corporate
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to={""}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                Medical Care
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={""}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                Camp
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full   px-3 mb-8">
                    <h4 className="font-semibold text-xl text-pri mb-4">
                        Our Company
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to={"/partner"}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                Partner with Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/doctor-partner"}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                Doctor Onboarding
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/media"}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                Media Coverage
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/about"}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/careers"}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={""}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                Find Clinic
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/blogs"}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/contact-us"}
                                className="flex items-center text-gray-300 hover:text-sec transition-all hover:translate-x-2 "
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className="">
                <div className="flex items-center justify-center">
                    <img src={LOGO} alt="" className="h-36 w-36" />
                    <div className="flex flex-col justify-between items-center text-white">
                        <h1 className="text-3xl font-semibold  ">Optimum</h1>
                        <h1 className="text-base font-medium tracking-widest  ">
                            HEALTH CARE
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row mx-auto mt-8 gap-8 items-center justify-center   ">
                    <div className="flex gap-x-2 text-white items-center text-lg bg-gradient-to-br from-pri to-violet-800 rounded-md  px-10 py-2 w-max">
                        <MdMail className="" />
                        <button>abc@gmail.com</button>
                    </div>
                    <div className="flex gap-x-2 text-white items-center bg-gradient-to-br from-pri to-violet-800 text-lg rounded-md  px-10 py-2 w-max">
                        <BsFillTelephoneFill className="" />
                        <button>000000000</button>
                    </div>
                </div>
                <div className="flex gap-x-8 justify-center items-center mt-10 ">
                    <AiFillFacebook className="text-white hover:text-pri text-3xl transition-all" />
                    <AiFillInstagram className="text-white hover:text-pri text-3xl transition-all" />
                    <AiOutlineTwitter className="text-white hover:text-pri text-3xl transition-all" />
                    <RiWhatsappFill className="text-white hover:text-pri text-3xl transition-all" />
                </div>
            </div> */}
        </footer>
    )
}
{
}

export default Footer

const RightSide = ({ array }) => {
    return (
        <div>
            {array.map((dis) => (
                <Link to={`${dis.link}`}>
                    <h1
                        className={`mb-2 hover:text-sec text-gray-300 transition-all   hover:translate-x-2`}
                    >
                        {dis.title}
                    </h1>
                </Link>
            ))}
        </div>
    )
}
