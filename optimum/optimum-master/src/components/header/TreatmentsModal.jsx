import React, { useState } from "react"
import {
    CosmeticArray,
    DentalArray,
    GynaecologyArray,
    MentalArray,
    OphthalmologyArray,
    OrthoArray,
    laparoscopyArray,
    proctologyArray,
    urologyArray,
    vascularArray,
} from "./Menubar"
import { Link } from "react-router-dom"

export const diseases = [
    "Proctology",
    "Laparoscopy",
    "Urology",
    "Vascular",
    "Ophthalmology",
    "Gynaecology",
    "Cosmetic",
    "Dental",
    "Ortho",
    "Mental Wellness",
]

const TreatmentsModal = ({ treatments }) => {
    const [selectedDisease, setSelectedDisease] = useState(diseases[0])

    return (
        <div className={`  `}>
            {/* Left */}
            <div className="flex left-0 flex-col bg-white shadow-lg shadow-pri/10 border-2 border-violet-400 rounded-md z-50  text-gray-700  absolute top-full translate-y-2 w-max group-hover:scale-100 scale-0 hover:scale-100 transition-all origin-top  ">
                {treatments &&
                    Object.keys(treatments).map((key) => (
                        <h1
                            onMouseOver={() => setSelectedDisease(key)}
                            className={`p-2 capitalize hover:bg-pri/50 px-5 relative ${
                                selectedDisease === key && "bg-pri/50"
                            } `}
                        >
                            {key}
                            <div>
                                {selectedDisease === key && (
                                    <RightSide array={treatments[key]} />
                                )}
                            </div>
                        </h1>
                    ))}

                {/* {diseases.map((dis) => (
                    <h1
                        onMouseOver={() => setSelectedDisease(dis)}
                        className={`p-2 hover:bg-pri/50 px-5 relative ${
                            selectedDisease === dis && "bg-pri/50"
                        } `}
                    >
                        {dis}
                        <div>
                            {selectedDisease === "Proctology" &&
                                dis === "Proctology" && (
                                    <RightSide array={proctologyArray} />
                                )}
                            {selectedDisease === "Laparoscopy" &&
                                dis === "Laparoscopy" && (
                                    <RightSide array={laparoscopyArray} />
                                )}
                            {selectedDisease === "Urology" &&
                                dis === "Urology" && (
                                    <RightSide array={urologyArray} />
                                )}
                            {selectedDisease === "Vascular" &&
                                dis === "Vascular" && (
                                    <RightSide array={vascularArray} />
                                )}
                            {selectedDisease === "Ophthalmology" &&
                                dis === "Ophthalmology" && (
                                    <RightSide array={OphthalmologyArray} />
                                )}
                            {selectedDisease === "Gynaecology" &&
                                dis === "Gynaecology" && (
                                    <RightSide array={GynaecologyArray} />
                                )}
                            {selectedDisease === "Cosmetic" &&
                                dis === "Cosmetic" && (
                                    <RightSide array={CosmeticArray} />
                                )}
                            {selectedDisease === "Dental" &&
                                dis === "Dental" && (
                                    <RightSide array={DentalArray} />
                                )}
                            {selectedDisease === "Ortho" && dis === "Ortho" && (
                                <RightSide array={OrthoArray} />
                            )}
                            {selectedDisease === "Mental Wellness" &&
                                dis === "Mental Wellness" && (
                                    <RightSide array={MentalArray} />
                                )}
                        </div>
                    </h1>
                ))} */}
            </div>
            {/* right */}
        </div>
    )
}

export default TreatmentsModal

const RightSide = ({ array }) => {
    return (
        <div className="border-2 bg-white z-50 text-gray-700 top-full -translate-y-10 left-full border-violet-400 rounded-md absolute w-max group-hover:scal-100 cale-0 hover:scae-100 transition-all origin-top">
            {array.map((dis) => (
                <Link to={`${dis.link}`}>
                    <h1
                        className={`p-2 hover:text-pri/80 transition-all px-5  `}
                    >
                        {dis.name}
                    </h1>
                </Link>
            ))}
        </div>
    )
}
