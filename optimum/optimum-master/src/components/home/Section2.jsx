import React, { useState } from "react"

const diseases = [
    "Proctology",
    "Laparoscopy",
    "Urology",
    "Vascular",
    "Ophthalmology",
    "Gynaecology",
    "Cosmetic",
    "Dental",
    "Ortho",
]

const Cosmetic = [
    {
        name: "Gynecomastia",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___gynecomastia.png",
    },
    {
        name: "Lipoma",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___lipoma.png",
    },
    {
        name: "Liposuction",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___liposuction.png",
    },
    {
        name: "Mole removal",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___mole-removal.png",
    },
    {
        name: "Sebaceous Cyst",
        img: "https://backend.glamyohealth.in/storage/icons/1679378856___Sebaceous%20cyst.png",
    },
]

const Proctology = [
    {
        name: "Piles",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___piles.png",
    },
    {
        name: "Fissure",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___fissure.png",
    },
    {
        name: "Fitsula",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___fistula.png",
    },
    {
        name: "Pilonidal sinus",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___pilonidal-sinus.png",
    },
    {
        name: "Anal Abscess",
        img: "https://backend.glamyohealth.in/storage/icons/1679379851___Anal%20Abscess.png",
    },
]

const Laparoscopy = [
    {
        name: "hernia",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___hernia.png",
    },
    {
        name: "gallstone",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___gallstone.png",
    },
    {
        name: "Appendix",
        img: "https://backend.glamyohealth.in/storage/icons/1679378957___Appendix.png",
    },
]
const Urology = [
    {
        name: "circumcision",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___circumcision.png",
    },
    {
        name: "hydrocele",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___hydrocele.png",
    },
    {
        name: "frenuloplasty",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___frenuloplasty.png",
    },
    {
        name: "vasectomy",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___vasectomy.png",
    },
]

const Vascular = [
    {
        name: "varicose veins",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___varicose-veins.png",
    },
    {
        name: "varicocele",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___varicocele.png",
    },
    {
        name: "Sclerotherapy",
        img: "https://backend.glamyohealth.in/storage/icons/1679378811___Sclerotherapy.png",
    },
]
const Ophthalmology = [
    {
        name: "lasik",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___lasik.png",
    },
    {
        name: "cataract",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___cataract.png",
    },
    {
        name: "glaucoma",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___glaucoma.png",
    },
]

const Gynaecology = [
    {
        name: "Vaginoplasty",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___vaginoplasty.png",
    },
    {
        name: "Hysterectomy",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___hysterectomy.png",
    },
    {
        name: "Vaginal tightening",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___vaginal-tightening.png",
    },
    {
        name: "Uterus Removal",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___hymenoplasty.png",
    },
    {
        name: "Cyst & Fibroid Removal",
        img: "https://backend.glamyohealth.in/storage/icons/1679382221___Ovarian%20Cyst.png",
    },
]

const Dental = [
    {
        name: "IPR",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___implants.png",
    },
    {
        name: "Root canal",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___dentures.png",
    },
    {
        name: "Teeth alignment",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___aligners.png",
    },
    {
        name: "Teeth whitening",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___teeth-whitening.png",
    },
]
const Ortho = [
    {
        name: "Knee replacement",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___knee-replacement.png",
    },
    {
        name: "Knee implant",
        img: "https://backend.glamyohealth.in/storage/icons/1679390581___ACL%20reconstruction.png",
    },
    {
        name: "Hip replacement",
        img: "https://backend.glamyohealth.in/storage/icons/1664359366___hip-replacement.png",
    },
]

const Section2 = () => {
    const [selectedDisease, setSelectedDisease] = useState("Proctology")

    console.log(selectedDisease)

    return (
        <section className="px-6 py-16 bg-gradient-to-br from-violet-500 via-violet-800 to-violet-500">
            <h1 className="font-semibold text-white text-center lg:text-left text-3xl underline-offset-8 underline decoration-sec ">
                Search By Conditions
            </h1>
            {/* Diseases list */}
            <div className="flex gap-4 mt-8 justify-around flex-wrap ">
                {diseases.map((disease) => (
                    <button
                        onMouseOver={() => setSelectedDisease(disease)}
                        className={`capitalize p-2 rounded-md px-3 text-white    transition-all  ${
                            selectedDisease !== disease
                                ? " border-2 border-white shadow-md shadow-black/40 bg-gradient-to-br from-violet-500  to-violet-800 "
                                : "bg-gradient-to-br from-sky-400 to-sky-600 border-2 border-whote shadow-sm shadow-black/20 font-semibold"
                        } `}
                    >
                        {disease}
                    </button>
                ))}
            </div>
            {/* Images */}
            {selectedDisease === "Proctology" ? (
                <DiseaseImgs array={Proctology} />
            ) : selectedDisease === "Laparoscopy" ? (
                <DiseaseImgs array={Laparoscopy} />
            ) : selectedDisease === "Urology" ? (
                <DiseaseImgs array={Urology} />
            ) : selectedDisease === "Vascular" ? (
                <DiseaseImgs array={Vascular} />
            ) : selectedDisease === "Ophthalmology" ? (
                <DiseaseImgs array={Ophthalmology} />
            ) : selectedDisease === "Cosmetic" ? (
                <DiseaseImgs array={Cosmetic} />
            ) : selectedDisease === "Gynaecology" ? (
                <DiseaseImgs array={Gynaecology} />
            ) : selectedDisease === "Dental" ? (
                <DiseaseImgs array={Dental} />
            ) : (
                selectedDisease === "Ortho" && <DiseaseImgs array={Ortho} />
            )}
        </section>
    )
}

export default Section2

const DiseaseImgs = ({ array }) => (
    <div className="flex flex-wrap px-6 justify-around mt-12">
        {array.map((dis) => (
            <div className="text-center text-white font-semibold">
                <img
                    src={dis.img}
                    alt={dis.name}
                    className="border-4 border-sec rounded-full w-28 h-28"
                />
                <h1 className="mt-2 capitalize">{dis.name}</h1>
            </div>
        ))}
    </div>
)
