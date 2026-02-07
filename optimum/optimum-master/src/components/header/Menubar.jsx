import React, { useEffect, useState } from "react"
import { BsChevronDown } from "react-icons/bs"
import { BiSearchAlt2 } from "react-icons/bi"
import { FaMapMarkerAlt } from "react-icons/fa"
import CityModal from "./CityModal"
import DiseaseModal from "./DiseaseModal"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { Link, useLocation, useNavigate } from "react-router-dom"
// import { forCompany, forCorporate, forPatients } from "./Header"

const Text = ({ children }) => {
    return (
        <h1 className="text-sm hover:text-pri py-2 text-gray-700 cursor-pointer font-semibold ">
            {children}
        </h1>
    )
}

const DropdownText = ({ children }) => {
    return (
        <h1 className="text-sm hover:text-pri py-2 text-gray-700 cursor-pointer">
            {children}
        </h1>
    )
}

const NavText = ({ children }) => {
    return (
        <h1 className="text-lg hover:text-pri py-2 text-sec cursor-pointer border-b border-indigo-300 ">
            {children}
        </h1>
    )
}

export const proctologyArray = [
    { title: "Piles", link: "/treatments/piles" },
    { title: "Fistula", link: "/treatments/fistula" },
    { title: "Fissure", link: "/treatments/fissure" },
    { title: "Pilonidal sinus", link: "/treatments/pilonidal-sinus" },
]
export const laparoscopyArray = [
    {
        title: "Hernia",
        link: "/treatments/hernia",
    },
    {
        title: "Gall Stone",
        link: "/treatments/gall-stone",
    },
]
export const urologyArray = [
    { title: "Kidney stone", link: "/treatments/kidney-stone" },
    { title: "Frenuloplasty", link: "/treatments/frenuloplasty" },
    { title: "Hydrocele", link: "/treatments/hydrocele" },
    { title: "Circumcision", link: "/treatments/circumcision" },
]
export const vascularArray = [
    {
        title: "Varicose veins",
        link: "/treatments/varicose-veins",
    },
    {
        title: "Varicocele",
        link: "/treatments/varicocele",
    },
]
export const OphthalmologyArray = [
    {
        title: "Lasik",
        link: "/treatments/lasik",
    },
    {
        title: "Cataract",
        link: "/treatments/cataract",
    },
]
export const GynaecologyArray = [
    { title: "Vaginoplasty", link: "/treatments/vaginoplasty" },
    { title: "Hysterectomy", link: "/treatments/hysterectomy" },
    { title: "Vaginal tightening", link: "/treatments/vaginal-tightening" },
    { title: "Uterus Removal", link: "/treatments/uterus-removal" },
    {
        title: "Cyst & Fibroid Removal",
        link: "/treatments/cyst-&-fibroid-Removal",
    },
]

export const CosmeticArray = [
    {
        title: "Gynecomastia",
        link: "/treatments/gynecomastia",
    },
    {
        title: "Mole removal",
        link: "/treatments/mole-removal",
    },
    {
        title: "Lipoma removal",
        link: "/treatments/lipoma-removal",
    },
    {
        title: "Hymenoplasty",
        link: "/treatments/hymenoplasty",
    },
    {
        title: "Labiaplasty",
        link: "/treatments/labiaplasty",
    },
    {
        title: "Rhinoplasty",
        link: "/treatments/rhinoplasty",
    },
    {
        title: "PRP",
        link: "/treatments/prp",
    },
    {
        title: "Hair transplant",
        link: "/treatments/hair-transplant",
    },
    {
        title: "Breast Implant",
        link: "/treatments/breast-implant",
    },
    {
        title: "Breast Reduction",
        link: "/treatments/breast -reduction",
    },
    {
        title: "Breast Augmentation",
        link: "/treatments/breast-reduction",
    },
]

export const DentalArray = [
    { title: "IPR", link: "/treatments/ipr" },
    { title: "Root canal", link: "/treatments/root-canal" },
    { title: "Teeth alignment", link: "/treatments/teeth-alignment" },
    { title: "Teeth whitening", link: "/treatments/teeth-whitening" },
]
export const OrthoArray = [
    { title: "Knee replacement", link: "/treatments/knee-replacement" },
    { title: "Knee implant", link: "/treatments/knee-implant" },
    { title: "Hip replacement", link: "/treatments/hip-replacement" },
]

export const MentalArray = [
    { title: "Anxiety disorders", link: "/treatments/anxiety-disorder" },
    { title: "Mood disorders", link: "/treatments/mood-disorder" },
    { title: "Psychotic disorders", link: "/treatments/psychotic-disorder" },
    { title: "Eating disorders", link: "/treatments/eating-disorder" },
    {
        title: "Personality disorders",
        link: "/treatments/personality-disorder",
    },
    { title: "Sleep-wake disorders", link: "/treatments/sleep-wake-disorder" },
]

const Menubar = ({
    isNav,
    setIsNav,
    city,
    setCity,
    disease,
    setDisease,
    headers,
}) => {
    const [modalType, setModalType] = useState("")
    const [activeIndex, setActiveIndex] = useState(null)
    const [forPatients, setForPatients] = useState([])
    const [forCorporate, setForCorporates] = useState([])
    const [forCompany, setForCompany] = useState([])

    useEffect(() => {
        if (headers) {
            setForPatients(headers[0].forPatients)
            setForCompany(headers[0].forCompany)
            setForCorporates(headers[0].forCorporates)
        }
    }, [headers])

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null)
        } else {
            setActiveIndex(index)
        }
    }

    // const loc = useLocation().pathname

    return (
        <nav
            className={`w-full {
               lg:hidden
            }    lg:scale-100 lg:bg-white  shadow-md shadow-black/10 flex items-start justify-around px-3 z-30 relative font-pop `}
        >
            {/*    disease and city -  for mob  */}
            <div className="relative lg:hidden pb-2 z-50">
                <div className="flex">
                    <button
                        onClick={() => setModalType("city")}
                        className="bg-gradient-to-tr from-sky-300 to-sky-600 text-gray-700 py-2 pr-6 px-2 rounded-l-md flex items-center border-r-2 border-white  "
                    >
                        <FaMapMarkerAlt className="mr-2 text-white" />
                        <span className=" block text-white">{city}</span>
                    </button>
                    {/* Dieseases */}
                    <button
                        onClick={() => setModalType("disease")}
                        className="bg-gradient-to-br from-pri to-violet-800 text-gray-100 py-2  px-4 rounded-r-md flex items-center"
                    >
                        <input
                            value={disease}
                            onChange={(e) => setDisease(e.target.value)}
                            type="text"
                            placeholder="Search diesase, doctors, treatment "
                            className="block w-full md:w-52 2xl:w-60 bg-transparent text-gray-100 placeholder-gray-200 focus:outline-none focus:placeholder-gray-200 focus:ring-0 text-sm "
                        />
                        <BiSearchAlt2 className="ml-2 text-sec" />
                    </button>
                </div>

                {/*   City Drop Down   */}
                <div
                    className={`absolute right-0 w-full mt-2 z-50 ${
                        modalType == "city" ? "scale-100" : "scale-0"
                    } transition-all origin-top `}
                >
                    <CityModal setCity={setCity} setModalType={setModalType} />
                </div>
                {/*   Disease Drop Down   */}
                <div
                    className={`absolute right-0 w-full mt-2 z-50 ${
                        modalType == "disease" ? "scale-100" : "scale-0"
                    } transition-all origin-top `}
                >
                    <DiseaseModal
                        disease={disease}
                        setDisease={setDisease}
                        setModalType={setModalType}
                    />
                </div>
            </div>
            {/* Lap */}
            <div className="hidden lg:flex lg:justify-around w-full">
                {/* <Link to={"/"}>
                    <Text>Homepage</Text>
                </Link>
                <Link to={"/about"}>
                    <Text>About Us</Text>
                </Link> */}
                {/* Services  */}
                <Service disease={"Proctology"} array={proctologyArray} />
                <Service disease={"Laparoscopy"} array={laparoscopyArray} />
                <Service disease={"Urology"} array={urologyArray} />
                <Service disease={"Vascular"} array={vascularArray} />
                <Service disease={"Ophthalmology"} array={OphthalmologyArray} />
                <Service disease={"Gynaecology"} array={GynaecologyArray} />
                <Service disease={"Cosmetic"} array={CosmeticArray} />
                <Service disease={"Dental"} array={DentalArray} />
                <Service disease={"Ortho"} array={OrthoArray} />
                <Service disease={"Mental Wellness"} array={MentalArray} />
                {/* <Text>Blogs</Text>
                <Text>Contact Us</Text>
                <Text>Login / Signup</Text> */}
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`flex flex-col lg:hidden p-6 transition-all bg-white absolute z-50 ${
                    isNav ? "left-0" : "-left-full"
                } w-full`}
            >
                {/* <Link to={"/"}>
                    <NavText>Homepage</NavText>
                </Link>
                <Link to={"/about"}>
                    <NavText>About Us</NavText>
                </Link> */}

                <NavDropList
                    disease={"For Patients"}
                    array={forPatients}
                    toggleAccordion={toggleAccordion}
                    activeIndex={activeIndex}
                    setIsNav={setIsNav}
                />
                <NavDropList
                    disease={"For Corporate"}
                    array={forCorporate}
                    toggleAccordion={toggleAccordion}
                    activeIndex={activeIndex}
                    setIsNav={setIsNav}
                />
                <NavDropList
                    disease={"For Company"}
                    array={forCompany}
                    toggleAccordion={toggleAccordion}
                    activeIndex={activeIndex}
                    setIsNav={setIsNav}
                />
                {/*  */}
                <h1 className="font-semibold  text-2xl my-2 text-pri">
                    Our Specialities
                </h1>
                <NavDropList
                    disease={"Proctology"}
                    array={proctologyArray}
                    toggleAccordion={toggleAccordion}
                    activeIndex={activeIndex}
                    setIsNav={setIsNav}
                />
                <NavDropList
                    toggleAccordion={toggleAccordion}
                    activeIndex={activeIndex}
                    setIsNav={setIsNav}
                    disease={"Laparoscopy"}
                    array={laparoscopyArray}
                />
                <NavDropList
                    toggleAccordion={toggleAccordion}
                    activeIndex={activeIndex}
                    setIsNav={setIsNav}
                    disease={"Urology"}
                    array={urologyArray}
                />
                <NavDropList
                    toggleAccordion={toggleAccordion}
                    activeIndex={activeIndex}
                    setIsNav={setIsNav}
                    disease={"Vascular"}
                    array={vascularArray}
                />
                <NavDropList
                    toggleAccordion={toggleAccordion}
                    activeIndex={activeIndex}
                    setIsNav={setIsNav}
                    disease={"Ophthalmology"}
                    array={OphthalmologyArray}
                />
                <NavDropList
                    toggleAccordion={toggleAccordion}
                    activeIndex={activeIndex}
                    setIsNav={setIsNav}
                    disease={"Gynaecology"}
                    array={GynaecologyArray}
                />
                <NavDropList
                    toggleAccordion={toggleAccordion}
                    activeIndex={activeIndex}
                    setIsNav={setIsNav}
                    disease={"Cosmetic"}
                    array={CosmeticArray}
                />
                <NavDropList
                    toggleAccordion={toggleAccordion}
                    activeIndex={activeIndex}
                    setIsNav={setIsNav}
                    disease={"Dental"}
                    array={DentalArray}
                />
                <NavDropList
                    toggleAccordion={toggleAccordion}
                    activeIndex={activeIndex}
                    setIsNav={setIsNav}
                    disease={"Ortho"}
                    array={OrthoArray}
                />

                {/* <NavText>Blogs</NavText>
                <NavText>Contact Us</NavText> */}
            </div>
        </nav>
    )
}

export default Menubar

const Service = ({ disease, array }) => {
    return (
        <div className="  group relative flex items-center z-40 font-pop">
            {/* proc */}
            <Text>{disease}</Text>
            <BsChevronDown className="text-xs ml-1 group-hover:text-pri " />

            {/* Dropdown */}
            <div className="  shadow-black/50  absolute bg-white border-2 border-pri/80 shadow-md translate-y-1 group-hover:scale-100 scale-0 hover:scale-100 transition-all w-max p-2 px-4 rounded-md top-full z-[100]">
                {array.map((dis) => (
                    <Link to={`${dis.link}`}>
                        <DropdownText>{dis.title}</DropdownText>
                    </Link>
                ))}
            </div>
        </div>
    )
}

const NavDropList = ({
    disease,
    array,
    toggleAccordion,
    activeIndex,
    setIsNav,
}) => {
    const navigate = useNavigate()

    return (
        <div
            className="  border-b border-violet-600 pb-2 cursor-pointer bg-white  "
            onClick={() => toggleAccordion(disease)}
        >
            <div className="flex justify-between items-center">
                <h3 className="text-lg pt-2 text-sky-500 ">{disease}</h3>
                {activeIndex === disease ? (
                    <IoIosArrowUp className="text-2xl text-sec  " />
                ) : (
                    <IoIosArrowDown className="text-2xl text-sec" />
                )}
            </div>
            {activeIndex === disease &&
                array.map((dis) => (
                    // <Link to={`/${dis.link}`}>
                    <p
                        onClick={() => {
                            navigate(`${dis.link}`)
                            setIsNav(false)
                        }}
                        className=" bg-emerald-20 py-2 pl-4 text-pri capitalize"
                    >
                        {dis.name}
                    </p>
                    // </Link>
                ))}
        </div>
    )
}
