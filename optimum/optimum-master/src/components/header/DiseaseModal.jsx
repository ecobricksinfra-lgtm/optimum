import React, { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

export const diseases = [
    {
        name: "Piles",
        img: "https://img.pristyncare.com/website-search-icon%2Fpiles.svg",
    },
    {
        name: "Kidney Stone",
        img: "https://img.pristyncare.com/website-search-icon%2Fkidney-stone.svg",
    },
    {
        name: "Umbilical Hernia",
        img: "https://img.pristyncare.com/website-search-icon%2Fumbilical-hernia.svg",
    },
    {
        name: "Gynecomastia",
        img: "https://img.pristyncare.com/website-search-icon%2Fgynecosmatia.svg",
    },
    {
        name: "Laser Circumcision",
        img: "https://img.pristyncare.com/website-search-icon%2Flaser-circumcision.svg",
    },
    {
        name: "Piles & Fissure",
        img: "https://img.pristyncare.com/website-search-icon%2Fpiles.svg",
    },
    {
        name: "Abortion",
        img: "https://img.pristyncare.com/website-search-icon%2Fabortion.svg",
    },
    {
        name: "Fistula",
        img: "https://img.pristyncare.com/website-search-icon%2Ffistula.svg",
    },
]

export const allDiseases = [
    "Piles",
    "Fistula",
    "Fissure",
    "Pilonidal sinus",
    "Hernia",
    "Gall Stone",
    "Kidney stone",
    "Frenuloplasty",
    "Hydrocele",
    "Circumcision",
    "Varicose veins",
    "Varicocele",
    "Lasik",
    "Cataract",
    "Vaginoplasty",
    "Hysterectomy",
    "Vaginal tightening",
    "Uterus Removal",
    "Cyst & Fibroid Removal",
    "Gynecomastia",
    "Mole removal",
    "Lipoma removal",
    "Hymenoplasty",
    "Labiaplasty",
    "Rhinoplasty",
    "PRP",
    "Hair transplant",
    "Breast Implant",
    "Breast Reduction",
    "Breast Augmentation",
    "IPR",
    "Root canal",
    "Teeth alignment",
    "Teeth whitening",
    "Knee replacement",
    "Knee implant",
    "Hip replacement",
    "Anxiety disorders",
    "Mood disorders",
    "Psychotic disorders",
    "Eating disorders",
    "Personality disorders",
    "Sleep-wake disorders",
]

const DiseaseModal = ({ disease, setDisease, setModalType }) => {
    const [filteredDiseases, setFilteredDiseases] = useState([])

    useEffect(() => {
        if (disease) {
            setFilteredDiseases(
                allDiseases.filter((dis) =>
                    dis.toLowerCase().startsWith(disease.toLowerCase())
                )
            )
        }
    }, [disease])

    return (
        <div className="p-4 rounded-md shadow-black/30 bg-white shadow-lg w-full max-h-[80vh] relative overflow-auto">
            {/* Close Btn */}
            <button
                className="absolute top-3 right-3 focus:outline-none text-white font-bold "
                onClick={() => setModalType("")}
            >
                <AiOutlineClose className="h-6 w-8 text-black  font-bold" />
            </button>
            {/* Spotlight */}
            {disease === "" ? (
                <div className="">
                    <h1 className="font-semibold mb-3">In the Spotlight</h1>

                    <div className="grid grid-cols-2 gap-3">
                        {diseases.map((disease, i) => (
                            <div
                                key={i}
                                onClick={() => {
                                    setDisease(disease.name)
                                    setModalType("")
                                }}
                                className="flex gap-x-2 p-2 bg-pri/30 border-2 border-pri/60 rounded-md cursor-pointer hover:bg-pri/30 transition-all items-center"
                            >
                                <img src={disease.img} alt="" />
                                <h1 className="text-xs capitalize">
                                    {disease.name}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            ) : filteredDiseases.length > 0 ? (
                filteredDiseases.map((dis) => (
                    <h1
                        onClick={() => {
                            setDisease(dis)
                            setModalType("")
                        }}
                        className="hover:text-pri cursor-pointer "
                    >
                        {dis}
                    </h1>
                ))
            ) : (
                <h1>No Results Found</h1>
            )}
        </div>
    )
}

export default DiseaseModal
