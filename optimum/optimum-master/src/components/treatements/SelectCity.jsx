import React, { useState } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import CityModal from "../header/CityModal"

const SelectCity = () => {
    const [city, setCity] = useState("Select City")
    const [modalType, setModalType] = useState("")

    return (
        <>
            <h1 className="text-3xl font-semibold text-sec mt-20 text-center underline und decoration-pri">
                Find Right City For Your Treatement
            </h1>
            <div className="relative px-4 lg:px-10 my-10  w-full lg:w-4/12 mx-auto cursor-pointer">
                <div className="flex">
                    <h1
                        className="  w-full  p-2 rounded-md border-2 border-pri"
                        onClick={() => setModalType("city")}
                    >
                        {city}
                    </h1>
                </div>
                {/*   City Drop Down   */}
                <div
                    className={`absolute right-0 w-full mt-2 z-50 ${
                        modalType == "city" ? "scale-100" : "scale-0"
                    } transition-all origin-top `}
                >
                    <CityModal setCity={setCity} setModalType={setModalType} />
                </div>
            </div>
        </>
    )
}

export default SelectCity
