import React, { useReducer, useState } from "react"
import { FaStar } from "react-icons/fa"
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md"
import DOCTOR_AVATAR from "../../assets/doctor-avatar-3d.png"
import getDeviceType from "../../utils/getScreenType"
import useScreen from "../../hooks/useScreen"

const doctors = [
    {
        name: "Dr Charan JC",
        specialization: "Plastic Surgeon",
        degree: "MBBS, MS - General Surgery, MCh - Plastic Surgery",
        experience: "15+ Years",
        location: "Anna Nagar",
        city: "Chennai",
    },
    {
        name: "Dr Ragunathan",
        specialization: "Orthopedic Surgeon",
        degree: "MS Orth., DNB Orth, MRCS Edin., FRCS Orth, CAS (UK)",
        experience: "20+ Years",
        location: "Anna Nagar",
        city: "Chennai",
    },
    {
        name: "Dr Rajkumar",
        specialization: "Plastic Surgeon",
        degree: "MBBS, MS - General Surgery, MCh - Plastic Surgery, DNB - General Surgery",
        experience: "20+ Years",
        location: "Mogapair",
        city: "Chennai",
    },
    {
        name: "Dr Murali K",
        specialization: "Plastic Surgeon",
        degree: "MBBS, MS - General Surgery, MCh - Plastic Surgery",
        experience: "15+ Years",
        location: "",
        city: "Chennai",
    },
    {
        name: "Dr Singaravelu",
        specialization: "Plastic Surgeon",
        degree: "MBBS, MS - General Surgery, MCh - Plastic & Reconstructive Surgery",
        experience: "15+ Years",
        location: "Nanganallur",
        city: "Chennai",
    },
    {
        name: "Dr Ibrahim",
        specialization: "Plastic Surgeon",
        degree: "MBBS, MS - General Surgery, MCh - Plastic Surgery",
        experience: "15+ Years",
        location: "Anna Nagar",
        city: "Chennai",
    },
    {
        name: "Dr Karthickeyan",
        specialization: "Plastic Surgeon",
        degree: "MBBS, MS - General Surgery, MCh - Plastic Surgery",
        experience: "15+ Years",
        location: "Anna Nagar",
        city: "Chennai",
    },
    {
        name: "Dr Udhesh",
        specialization: "Plastic Surgeon",
        degree: "MBBS, MS - General Surgery, MCh - Plastic Surgery",
        experience: "30+ Years",
        location: "Anna Nagar",
        city: "Chennai",
    },
    {
        name: "Dr Senthil Kumar",
        specialization: "General Surgeon",
        degree: "MBBS, MS - General Surgery",
        experience: "20+ Years",
        location: "Anna Nagar",
        city: "Chennai",
    },
    {
        name: "Dr Kamalakkhannan Chokkalingam",
        specialization: "Laproscopic Surgeon/GS",
        degree: "MBBS, MS, FMAS, FIAGES, FALS",
        experience: "11 years",
        location: "Velacherry",
        city: "Chennai",
    },
    {
        name: "Dr Ashiq Ahammed",
        specialization: "General Surgeon",
        degree: "MBBS, MS - General Surgery",
        experience: "15+ Years",
        location: "Alandur",
        city: "Chennai",
    },
    {
        name: "Dr Madhu",
        specialization: "General Surgeon",
        degree: "MBBS, MS - General Surgery",
        experience: "20+ Years",
        location: "Anna Nagar",
        city: "Chennai",
    },
    {
        name: "Dr Balamurugan",
        specialization: "Laproscopic Surgeon/GS",
        degree: "MBBS,MS-General Surgery,MCh Laproscopic Surgery",
        experience: "10+ Years",
        location: "Anna Nagar",
        city: "Chennai",
    },
    {
        name: "Dr Bharath",
        specialization: "General Surgeon",
        degree: "MBBS, MS - General Surgery",
        experience: "5+ Years",
        location: "Anna Nagar",
        city: "Chennai",
    },
    {
        name: "Dr Sujatha",
        specialization: "Gynecologist",
        degree: "MBBS, MS - General Surgery",
        experience: "15+ Years",
        location: "Anna Nagar",
        city: "Chennai",
    },
    {
        name: "Dr Arul Rajkumar",
        specialization: "General Surgeon",
        degree: "MBBS, MS - General Surgery",
        experience: "20+ Years",
        location: "",
        city: "Madurai",
    },
    {
        name: "Dr Saravana Muthu",
        specialization: "ENT Surgeon",
        degree: "MBBS, MS - ENT",
        experience: "30+ Years",
        location: "",
        city: "Madurai",
    },
    {
        name: "Dr Sunil Kumar",
        specialization: "General Surgeon",
        degree: "MBBS, MS - General Surgery",
        experience: "",
        location: "",
        city: "Nellore",
    },
]

const Section4 = () => {
    const reducer = (state, action) => {
        switch (action) {
            case "inc":
                return state === doctors.length / 2 + 1 ? state : state + 1
            case "dec":
                return state === 0 ? 0 : state - 1
        }
    }

    const [sliderIndex, dispatch] = useReducer(reducer, 0)
    const { slidingUnit } = useScreen()

    return (
        <section className="px-6 py-20 overflow-hidden relative">
            <div className="flex justify-between">
                <h1 className="font-semibold text-center lg:text-left text-pri text-3xl underline-offset-8 underline decoration-sec px-6">
                    We Provide Highly Qualified Doctors
                </h1>
                {/* SLider Btn */}
                <div className="hidden lg:block">
                    <button onClick={() => dispatch("dec")}>
                        <MdOutlineArrowBackIos className="text-pri  text-2xl" />
                    </button>
                    <button onClick={() => dispatch("inc")}>
                        <MdArrowForwardIos className="text-pri  text-2xl" />
                    </button>
                </div>
            </div>
            {/* Doc Img */}
            {/* <img
                src={DOCTOR_AVATAR}
                className="absolute top-0 w-32 right-1/4 hidden lg:block "
                alt=""
            /> */}

            <div
                style={{
                    transform: `translateX(${sliderIndex * -69}%)`,
                }}
                className="flex mt-8 gap-x-8 transition-all"
            >
                {doctors.map((doc, i) => (
                    <Card
                        i={i}
                        city={doc.city}
                        doctorName={doc.name}
                        qualification={doc.degree}
                        yearsOfExp={doc.experience}
                        specialization={doc.specialization}
                        imageUrl={
                            "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
                        }
                        rating={4}
                    />
                ))}
            </div>
            {/* SLider Btn - mob */}
            <div className=" mt-4 flex gap-x-10 justify-center lg:hidden">
                <button onClick={() => dispatch("dec")}>
                    <MdOutlineArrowBackIos className="text-pri text-2xl" />
                </button>
                <button onClick={() => dispatch("inc")}>
                    <MdArrowForwardIos className="text-pri text-2xl" />
                </button>
            </div>
        </section>
    )
}

export default Section4

const Card = ({
    imageUrl,
    doctorName,
    qualification,
    rating,
    city,
    yearsOfExp,
    specialization,
    i,
}) => {
    return (
        <div
            className={`flex  flex-col items-center md:flex-row md:justify-between px-6 py-4  rounded-lg shadow-md mb-8  shadow-black/30  gap-x-6 w-[82%] lg:w-5/12 flex-shrink-0 ${
                i % 2 == 0
                    ? "bg-gradient-to-tr from-sky-200 to-sky-400 "
                    : "bg-gradient-to-bl from-violet-200 to-violet-400 "
            } `}
        >
            {/* left */}
            <div className="w-full gap-y-4 mb-4 md:mb-0 md:mr-6 flex flex-col items-center justify-center  overflow-hidden">
                <img
                    src={imageUrl}
                    alt="Doctor"
                    className="w-32 h-32 object-cover rounded-lg border-2 border-white "
                />
                <div className="flex flex-col gap-y-2  justify-center items-center text-center ">
                    <button className="px-4 py-2 bg-gradient-to-br from-sky-400 to-sky-600 text-white rounded-md font-semibold hover:scale-105 active:scale-95 transition-all">
                        Learn More
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-br from-violet-500 to-violet-800 text-white rounded-md font-semibold hover:scale-105 active:scale-95 transition-all">
                        Book Now
                    </button>
                </div>
            </div>
            {/* right */}
            <div className="w-full  flex flex-col items-center md:items-start justify-between gap-y-1 ">
                <div className="text-2xl font-bold ">{doctorName}</div>
                <div className="text-gray-600 text-xs">{qualification}</div>
                <div className="bg-white text-black px-2 py-1 text-xs rounded-full">
                    {specialization}
                </div>
                <div className="flex items-center mr-2">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span>{rating}</span>
                </div>
                <hr className="bg-white border-b-2 " />
                <h1 className="text-gray-600 text-sm">{city}</h1>
                <div className="text-gray-600 text-sm mb-2">
                    {yearsOfExp} yrs exp
                </div>
            </div>
        </div>
    )
}
