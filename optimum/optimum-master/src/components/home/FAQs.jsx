import axios from "axios"
import React, { useRef, useState, useEffect } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import {
    RiMailAddFill,
    RiMailCloseFill,
    RiMailFill,
    RiUser3Line,
} from "react-icons/ri"
import { FiPhone } from "react-icons/fi"
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
import useDatas from "../../store/useDatas"
import { useForm } from "react-hook-form"
export const faqs = [
    {
        id: 1,
        question: "What services does Optimum Health provide?",
        answer: "Optimum Health offers advanced cosmetic and elective surgeries, dental and mental health services, including kidney stone surgery, piles surgery, hernia, gynecomastia, circumcision, mole removal, knee and hip implants, root canal treatments, protruded and misaligned teeth treatments, etc.",
    },
    {
        id: 2,
        question:
            "Are the surgeries performed by qualified and experienced surgeons?",
        answer: "Absolutely! Optimum Health works with a team of skilled and experienced surgeons who specialize in cosmetic and elective procedures. Patient safety and satisfaction are our top priorities.",
    },
    {
        id: 3,
        question: "How does Optimum Health ensure accessibility to all",
        answer: "Optimum Health is committed to providing accessible healthcare services. We strive to keep our services affordable and offer flexible payment options, making advanced surgeries accessible to a wide range of individuals.",
    },
    {
        id: 4,
        question: "What types of cosmetic surgeries does Optimum Health offer",
        answer: "Optimum Health offers a wide range of cosmetic surgeries, including but not limited to breast augmentation, liposuction, facelifts, septoplasty, rhinoplasty, gynecomastia, lipoma, and moles removal.",
    },
]

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const { treatments } = useDatas()
    const { register, handleSubmit } = useForm()

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null)
        } else {
            setActiveIndex(index)
        }
    }

    const [data, setData] = useState([])

    const fetchFaqs = async () => {
        try {
            const res = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/faq`
            )
            setData(
                res.data.filter((faq) => faq.category.toLowerCase() === "home")
            )
        } catch (e) {
            console.log(e)
        }
    }

    const postEnquire = async (data) => {
        try {
            const res = await axios.post(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/enquire`,
                data
            )
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchFaqs()
    }, [])

    return (
        <div className="w-full flex-col lg:flex-row gap-4 flex bg-gradient-to-br from-violet-500 to-violet-500 via-violet-800 py-16 px-10">
            {/* FAQS */}
            <div className="w-full lg:w-1/2 ">
                <h1 className="font-semibold text-center lg:text-left text-white text-3xl underline-offset-8 underline decoration-sec  mb-8 ">
                    Frequently Asked Questions
                </h1>
                {data &&
                    data.map((faq, index) => (
                        <div
                            key={index}
                            className=" rounded-lg p-4 mb-6 cursor-pointer bg-white border-4 border-sec "
                            onClick={() => toggleAccordion(index)}
                            ref={parent}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">
                                    {faq.question}
                                </h3>
                                {activeIndex === index ? (
                                    <IoIosArrowUp className="text-2xl" />
                                ) : (
                                    <IoIosArrowDown className="text-2xl" />
                                )}
                            </div>

                            <div
                                aria-hidden={
                                    activeIndex === index ? false : true
                                }
                                className={` acc-content
                           
                        `}
                            >
                                <div>
                                    <p className="text-gray-600 mt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            {/* Form */}
            <form className=" mx-auto bg-white border-4 border-pri mt-10 lg:mt-0 rounded-md shadow-md shadow-black/50  px-8 pt-6 pb-8 mb-4 lg:w-5/12">
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
                            {...register("name")}
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
                            {...register("useremail")}
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
                            {...register("mobileNumber")}
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
                        {...register("treatment")}
                    >
                        <option value="">Select Treatment</option>

                        {treatments.map((disease) => (
                            <option value={disease}>{disease}</option>
                        ))}
                    </select>
                </div>
                {/* check box */}
                <div className="flex gap-x-6 text-xs my-4 text-gray-600">
                    <input type="checkbox" {...register("email")} />
                    <p>
                        I confirm that I give my consent to receive future
                        emails to my inbox
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-gradient-to-bl from-sky-300 to-sky-500 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline "
                        type="button"
                        onClick={handleSubmit(postEnquire)}
                    >
                        Book Appointment
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FAQSection
