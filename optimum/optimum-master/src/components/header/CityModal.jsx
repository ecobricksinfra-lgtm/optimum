import React from "react"
import { GiModernCity } from "react-icons/gi"
import { MdLocationCity } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"
export const cities = [
    "Delhi",
    "Bangalore",
    "Mumbai",
    "Hyderabad",
    "Pune",
    "Chandigarh",
    "Chennai",
    "Noida",
    "Gurgaon",
    "Ghaziabad",
    "Faridabad",
    "Ahmedabad",
    "Kanpur",
    "Patna",
    "Indore",
    "Mysore",
    "Madurai",
    "Lucknow",
    "Bhubaneshwar",
    "Coimbatore",
    "Kochi",
]

import DELHI from "../../assets/delhi.jpeg"
import CHENNAI from "../../assets/chennai.jpeg"
import MUMBAI from "../../assets/mumbai.jpeg"
import BANGALORE from "../../assets/bangalore.jpeg"
import HYDERABAD from "../../assets/hyderabad.jpg"

const CityModal = ({ setCity, setModalType }) => {
    const popCities = [
        {
            city: "Chennai",
            img: CHENNAI,
        },
        {
            city: "Delhi",
            img: DELHI,
        },
        {
            city: "Mumbai",
            img: MUMBAI,
        },
        {
            city: "Hyderabad",
            img: HYDERABAD,
        },
        {
            city: "Bangalore",
            img: BANGALORE,
        },
    ]

    return (
        <div className="p-4 rounded-md shadow-black/30 bg-white shadow-lg w-full max-h-[80vh] relative overflow-auto z-50">
            {/* Close Btn */}
            <button
                className="absolute top-3 right-3 focus:outline-none text-white font-bold "
                onClick={() => setModalType("")}
            >
                <AiOutlineClose className="h-6 w-8 text-black  font-bold" />
            </button>
            {/* Popular Ctites */}
            <div className="">
                <h1 className="font-semibold mb-3">Popular Cities</h1>
                <div className="grid grid-cols-2 gap-3">
                    {popCities.map((city) => (
                        <div
                            onClick={() => {
                                setCity(city.city)
                                setModalType("")
                            }}
                            className=" gap-x-2 p-2 bg-white border-2 border-pri/60 rounded-md cursor-pointer hover:bg-pri/30 transition-all"
                        >
                            {/* <GiModernCity className="text-orange-600" /> */}
                            <img
                                src={city.img}
                                alt=""
                                className="w-full h-20"
                            />
                            <h1 className="text-sm text-center mt-4">
                                {city.city}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
            {/*   Other   */}
            <div className="">
                <h1 className="font-semibold my-3">Other Cities</h1>
                <div className="">
                    {cities.map((city) => (
                        <div
                            onClick={() => {
                                setCity(city)
                                setModalType("")
                            }}
                            className="flex gap-x-2  py-2 border-b  border-pri/40 hover:bg-sky-100  cursor-pointer  transition-all"
                        >
                            <MdLocationCity className="text-orange-600" />
                            <h1 className="text-sm">{city}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CityModal
