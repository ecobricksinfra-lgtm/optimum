import React from "react"
import {
    RiBook2Line,
    RiHeartLine,
    RiEqualizerLine,
    RiTrophyLine,
    RiTeamLine,
} from "react-icons/ri"

const WhyWork = ({ data }) => {
    return (
        <div className="px-3 lg:px-10 my-12">
            <h1 className="my-4 text-3xl font-semibold text-pri underline underline-offset-8 decoration-sec mb-6">
                Why Work At Optimum Care
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-6  justify-between flex-wrap">
                <div className="flex flex-col items-center gap-y-8 border-2 p-4 border-gray-300 shadow-lg shadow-black/20 rounded-xl ">
                    <RiBook2Line size={50} className="text-sec" />
                    <p>{data?.work1}</p>
                </div>
                <div className="flex flex-col items-center gap-y-8 border-2 p-4 border-gray-300 shadow-lg shadow-black/20 rounded-xl ">
                    <RiHeartLine size={50} className="text-sec" />
                    <p>{data?.work2}</p>
                </div>
                <div className="flex flex-col items-center gap-y-8 border-2 p-4 border-gray-300 shadow-lg shadow-black/20 rounded-xl ">
                    <RiEqualizerLine size={50} className="text-sec" />
                    <p>{data?.work3}</p>
                </div>
                <div className="flex flex-col items-center gap-y-8 border-2 p-4 border-gray-300 shadow-lg shadow-black/20 rounded-xl ">
                    <RiTrophyLine size={50} className="text-sec" />
                    <p>{data?.work4}</p>
                </div>
                <div className="flex flex-col items-center gap-y-8 border-2 p-4 border-gray-300 shadow-lg shadow-black/20 rounded-xl ">
                    <RiTeamLine size={50} className="text-sec" />
                    <p>{data?.work5}</p>
                </div>
            </div>
        </div>
    )
}

export default WhyWork
