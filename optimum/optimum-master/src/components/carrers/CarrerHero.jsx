import React from "react"
import heroImage from "../../assets/doctor.png"

const CarrerHero = ({ data }) => {
    return (
        <>
            <div className=" -z-10 flex flex-col justify-around  py-6 pb-20  px-10 lg:flex-row items-center relative overflow-hidden bg-gradient-to-br  from-violet-950  to-violet-500">
                <div>
                    <p className="text-white text-lg mb-4">{data?.title}</p>
                    <h1 className="text-white font-semibold text-4xl capitalize">
                        {data?.subtitle}
                    </h1>
                </div>
                <img src={heroImage} className="w-60" alt="" />
            </div>
            {/* cont */}
            <div className="p-6 px-10 rounded-xl -mt-20 z-50 bg-white shadow-lg shadow-black/30 max-w-[95%] lg:max-w-[75%]   mx-auto ">
                <h1 className="text-3xl font-semibold text-pri capitalize text-center underline underline-offset-8 decoration-sec">
                    We make the world work better for everyone
                </h1>
                <p className="text-gray-700 mt-6 leading-7 ">
                    {data?.description}
                </p>
            </div>
        </>
    )
}

export default CarrerHero
