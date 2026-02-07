import React from "react"
import heroImage from "../../assets/doctor.png"

const HomeHero = ({ data }) => {
    return (
        <div className="flex flex-col-reverse px-6 lg:flex-row items-center relative overflow-hidden bg-gradient-to-br  from-violet-950  to-violet-500">
            {/* Designs */}

            {/*   Designed Circle   */}
            <div className="w-[60vw] h-[90vh]  bg-gradient-to-bl from-violet-500  to-violet-950 absolute rounded-full -left-[25%]  shadow-lg hidden lg:block "></div>
            {/* <div className="w-96 h-96  bg-gradient-to-bl from-purple-400  to-purple-900 absolute rounded-full -right-24 -bottom-16  shadow-lg "></div> */}
            <div className="lg:w-5/12 z-20">
                <img src={heroImage} alt="Hero" className="w-full" />
            </div>
            <div className="lg:w-1/2 lg:ml-10 mt-10 lg:mt-0 z-20 flex-col gap-y-4">
                <h1 className="text-4xl  lg:text-6xl  text-white font-semibold  mb-4 text-center lg:text-left ">
                    {data?.title}
                </h1>
                {/* Slogan */}
                <p className="bg-white lg:w-max p-2 text-center font-semibold py-1 my-3 text-violet-700 text-lg tracking-wide uppercase ">
                    {data?.subtitle}
                </p>
                <p className="text-lg text-gray-100 leading-relaxed mb-8">
                    {data?.description}
                </p>
                <button className="w-full lg:w-auto bg-gradient-to-br from-sky-600 to-sky-400 hover:scale-105 text-white font-semibold py-3 active:scale-95 px-8 rounded-md transition-all mr-4 shadow-md shadow-black/50">
                    Book Appointment
                </button>
                {/* <button className=" w-full lg:w-auto mt-4 bg-sec hover:scale-x-110 text-white font-bold py-3 active:scale-90 px-8 rounded-md transition-all shadow-md shadow-black/50">
                    Learn More
                </button> */}
                {/* <h1 className="font-bold mt-10 text-lg text-gray-100">
                    Book Appointments With Our Expret Doctors Near You!!!
                </h1> */}
            </div>
        </div>
    )
}

export default HomeHero
