import React from "react"
import { RiHeart3Line } from "react-icons/ri"
import { FaAmbulance } from "react-icons/fa"
import { MdLocalHospital } from "react-icons/md"
import Img from "../../assets/sec_5.png"

const Section5 = ({ data }) => {
    return (
        <section className="bg-gradient-to-br from-violet-500 to-violet-800 py-12  px-10 ">
            <h1 className="font-semibold text-center lg:text-left text-white text-3xl underline-offset-8 underline decoration-sec">
                Why Choose Optimum Health Care
            </h1>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row mt-10 items-center gap-x-10 ">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
                    <Card
                        icon={
                            <RiHeart3Line className="text-gray-800 text-3xl mb-2" />
                        }
                        title={data?.care1Title}
                        desc={data?.care1Desc}
                    />

                    <Card
                        icon={
                            <FaAmbulance className="text-gray-800 text-3xl mb-2" />
                        }
                        title={data?.care2Title}
                        desc={data?.care2Desc}
                    />
                    <Card
                        icon={
                            <MdLocalHospital className="text-gray-800 text-3xl mb-2" />
                        }
                        title={data?.care3Title}
                        desc={data?.care3Desc}
                    />
                    <Card
                        icon={
                            <RiHeart3Line className="text-gray-800 text-3xl mb-2" />
                        }
                        title={data?.care4Title}
                        desc={data?.care4Desc}
                    />
                </div>
                <div className="md:w-full mt-10 md:mt-0 h-full">
                    <img
                        src={Img}
                        alt="Your Image"
                        className="w-full rounded-lg "
                    />
                </div>
            </div>
        </section>
    )
}

export default Section5

const Card = ({ icon, title, desc }) => {
    return (
        <div className="flex flex-col items-center bg-white p-6 shadow-lg shadow-black/30 rounded-lg border-4 border-sec ">
            {icon}
            <h3 className="text-lg font-semibold text-gray-800 capitalize ">
                {title}
            </h3>
            <p className="text-gray-500 mt-2">{desc}</p>
        </div>
    )
}
