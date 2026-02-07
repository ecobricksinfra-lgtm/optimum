import React, { useEffect, useState } from "react"
import { FaLocationArrow } from "react-icons/fa"
import { FiChevronDown, FiMapPin } from "react-icons/fi"
import { BsSearch } from "react-icons/bs"
import useDatas from "../../store/useDatas"

const OurDocHero = ({ city, setCity, disease, setDisease, data }) => {
    const { treatments, cities } = useDatas()

    return (
        <div className="flex justify-center py-20 flex-col px-6  gap-y-6 items-center relative  bg-gradient-to-br  from-violet-950  to-violet-500">
            <h1 className="text-white text-4xl text-center font-semibold">
                {data?.docTitle}
            </h1>
            <p className="text-gray-200 text-lg">{data?.docSubtitle}</p>
            <div className="flex gap-10 flex-col lg:flex-row">
                <Datalist
                    arr={cities}
                    placeholder={"Selecr Cities"}
                    icon={<FiMapPin />}
                    state={city}
                    setState={setCity}
                />
                <Datalist
                    arr={treatments}
                    placeholder={"Select Treatment"}
                    icon={<BsSearch />}
                    state={disease}
                    setState={setDisease}
                />
            </div>
        </div>
    )
}

export default OurDocHero

const Datalist = ({ arr, placeholder, icon, state, setState }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleInputChange = (e) => {
        setState(e.target.value)
    }

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const filteredCities = arr.filter((city) =>
        city.toLowerCase().includes(state.toLowerCase())
    )

    useEffect(() => {
        window.addEventListener("click", () => {
            setIsDropdownOpen(false)
        })

        return () =>
            window.removeEventListener("click", () => {
                setIsDropdownOpen(false)
            })
    }, [])

    return (
        <div className="relative ">
            <div className="flex gap-x-6 bg-white rounded-md cursor-pointer items-center border-2 border-sec text-sky-600  px-4 py-2">
                {icon}
                <input
                    onClick={(e) => e.stopPropagation()}
                    type="text"
                    className="flex-1 outline-none bg-transparent  text-lg text-black placeholder:text-gray-700"
                    placeholder={placeholder}
                    value={state}
                    onChange={handleInputChange}
                    onFocus={() => setIsDropdownOpen(true)}
                />
                <button
                    className="ml-2 text-gray-500 focus:outline-none"
                    onClick={(e) => {
                        e.stopPropagation()
                        handleDropdownToggle()
                    }}
                >
                    <FiChevronDown
                        className={`text-xl text-sec transition-all ${
                            isDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                    />
                </button>
            </div>
            {isDropdownOpen && (
                <ul className="mt-2 border border-gray-300  max-h-80 shadow-lg shadow-black/20 rounded overflow-y-auto bg-white absolute left-0 w-full z-30">
                    {filteredCities.map((city, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => {
                                setState(city)
                                setIsDropdownOpen(false)
                            }}
                        >
                            {city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
