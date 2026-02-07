import React from "react"
import { RiUser3Line } from "react-icons/ri"
import { FiPhone } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"
import useDatas from "../../store/useDatas"
import { useForm } from "react-hook-form"
import axios from "axios"

const specialization = [
    "Aesthetic/Plastic Surgeon",
    "Dental Surgeon",
    "ENT Surgeon",
    "General Surgeon",
    "Gynae/IVF Expert",
    "Laproscopic Surgeon",
    "Ophthalmologist",
    "Orthopedic Surgeon",
    "Urologist Surgeon",
    "Vascular Surgeon",
    "Others",
]

const degrees = ["MBBS", "MS", "MCH", "DM", "Post Graduate Diploma", "Others"]

const DocHero = ({ data }) => {
    const { cities } = useDatas()
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        try {
            const enquires = await axios.post(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/enquireDoc`,
                data
            )
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section className="flex flex-col justify-around py-10 px-6 lg:px-10 lg:flex-row items-center relative overflow-hidden bg-gradient-to-br  from-violet-950  to-violet-500">
            {/* Content */}
            <div className="lg:max-w-[50%] flex flex-col  gap-y-8 ">
                <h1 className="text-4xl font-semibold text-white capitalize">
                    {data?.docTitle}
                </h1>
                <p className="text-white lg:w-max p-2 text-center font-semibold py-1 my-3 text-xl  ">
                    {data?.docSubtitle}
                </p>

                <button className="w-full lg:w-max  bg-gradient-to-br from-sky-600 to-sky-400 hover:scale-105 text-white font-semibold py-2 active:scale-95 px-16 rounded-md transition-all mr-4 shadow-md shadow-black/50">
                    info@optimumhealth.in{" "}
                </button>
            </div>
            {/* Form */}
            <form className="bg-white  mt-10 lg:mt-0 rounded-md shadow-md shadow-black/50  px-8 pt-6 pb-8 mb-4 lg:w-[35%]">
                <h1 className="font-semibold text-pri text-2xl mb-4 text-center  capitalize">
                    {`Share Your Details`}
                </h1>
                <p className="text-sec text-center capitalize font-semibold mb-4">
                    we will reach out to you with the next steps
                </p>
                <div className="flex flex-col lg:flex-row gap-x-4 ">
                    <div className="mb-4 w-full">
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
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div className="mb-4 w-full">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="mobile"
                        >
                            Mobile No.
                        </label>
                        <div className="relative flex items-center">
                            <div className="inline-block absolute left-1 top-1 h-full w-10 text-center text-gray-400">
                                <FiPhone className="mt-2" />
                            </div>
                            <input
                                className="pl-8  appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                id="mobile"
                                {...register("mobileNumber")}
                                type="tel"
                                placeholder="Mobile Number"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-x-4 ">
                    <div className="mb-4 w-full">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative flex items-center">
                            <div className="inline-block absolute left-1 top-1 h-full w-10 text-center text-gray-400">
                                <HiOutlineMail className="mt-2" />
                            </div>
                            <input
                                {...register("email")}
                                className="pl-8  appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="mb-4 w-full">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="city"
                        >
                            City
                        </label>
                        <select
                            {...register("city")}
                            className=" appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            id="city"
                        >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* spec and deg */}
                <div className="flex flex-col lg:flex-row gap-x-4 ">
                    <div className="mb-4 w-full">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="specialization"
                        >
                            Specialization
                        </label>
                        <select
                            className=" appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            id="specialization"
                            {...register("specialization")}
                        >
                            <option value="">Select Specialization</option>
                            {specialization.map((spl) => (
                                <option value={spl}>{spl}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4 w-full">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="degree"
                        >
                            Degree
                        </label>
                        <select
                            className=" appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            id="degree"
                            {...register("degree")}
                        >
                            <option value="">Select Degree</option>
                            {degrees.map((degree) => (
                                <option value={degree}>{degree}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* yrs of exp */}
                <div className="flex flex-col lg:flex-row gap-x-4 ">
                    <div className="mb-4 w-full">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="exp"
                        >
                            Exp (after MBBS/BDS)
                        </label>
                        <div className="relative flex items-center  ">
                            <input
                                className="  appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                id="exp"
                                type="text"
                                placeholder="Exp (After MBBS/BDS)"
                                {...register("exp")}
                            />
                        </div>
                    </div>
                    <div className="mb-4 w-full">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="exp2"
                        >
                            Exp (after PG)
                        </label>
                        <div className="relative flex items-center">
                            <input
                                className="  appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                id="exp2"
                                type="text"
                                placeholder=" Experiance (after PG)"
                                {...register("exp2")}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        onClick={handleSubmit(onSubmit)}
                        className="bg-gradient-to-bl from-sky-300 to-sky-500 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                        type="button"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    )
}

export default DocHero
