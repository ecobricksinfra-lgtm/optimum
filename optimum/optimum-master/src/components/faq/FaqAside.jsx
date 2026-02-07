import React from "react"
import { diseases } from "../header/TreatmentsModal"
import { BsChevronRight } from "react-icons/bs"
import { Link } from "react-router-dom"

const FaqAside = ({ selectedFAQ, setSelectedFAQ }) => {
    return (
        <aside className="p-4 px-10 bg-gradient-to-tr from-pri to-violet-800 lg:w-4/12">
            <h1 className="text-3xl font-semibold  my-4 text-white">
                {" "}
                Self Help Topics
            </h1>
            {/* diseases */}
            <div className="flex flex-col gap-4">
                {diseases.map((dis) => (
                    <a href={`#faqs`}>
                        <div
                            onClick={() => setSelectedFAQ(dis)}
                            className={` cursor-pointer py-2 border-2 flex justify-between items-center  shadow-lg shadow-black/20 rounded-md border-sec px-4 ${
                                selectedFAQ === dis
                                    ? "bg-gradient-to-bl from-violet-500 to-violet-800 border-white text-white"
                                    : "bg-white "
                            } `}
                        >
                            <h1 className="">{dis}</h1>
                            <BsChevronRight
                                className={`text-xl ${
                                    selectedFAQ == dis
                                        ? "text-white"
                                        : "text-sec"
                                } `}
                            />
                        </div>
                    </a>
                ))}
            </div>
        </aside>
    )
}

export default FaqAside
