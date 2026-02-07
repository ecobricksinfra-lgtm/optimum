import React, { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { FaWheelchair } from "react-icons/fa"
// import { FaUserDoctor } from "react-icons/fi
import { MdOutlineRateReview } from "react-icons/md"
import { BiInjection } from "react-icons/bi"
import { BsCapsulePill } from "react-icons/bs"
import DashClinics from "./DashClinics"
import DashDocs from "./DashDocs"
import DashPatients from "./DashPatients"
import DashHistory from "./DashHistory"
import DashFAQ from "./DashFAQ"
import DashSurgery from "./DashSurgery"
import DashTreatment from "./DashTreatment"
import DashReview from "./DashReview"
import DashAppointment from "./DashAppointment"
import DashBlog from "./DashBlog"
import NewBlog from "./Blog/NewBlog"
import { Link } from "react-router-dom"
import DashVideo from "./DashVideo"
import DashHeader from "./DashHeader"
import DashAboutUs from "./DashAboutUs"
import DashEnquire from "./DashEnquire"
import DashHome from "./DashHome"
import DashTreat from "./DashTreat"
import DashOurDocs from "./DashOurDocs"
import DashPartner from "./DashPartner"
import DashMedia from "./DashMedia"
import DashCareer from "./DashCareers"
import { useNavigate } from "react-router-dom"
import useLogin from "../../store/useLogin"
import DashReport from "./DashReport"

const Dashboard = () => {
    const [showAside, setShowAside] = useState(false)
    const [tab, setTab] = useState("report")
    const navigate = useNavigate()
    const { type, setType } = useLogin()

    const sidebarData = [
        type == "admin" && {
            label: "Content",
            childTabs: [
                { label: "header & city" },
                { label: "home" },
                { label: "treatment page" },
                { label: "FAQ" },
                { label: "video" },
                { label: "our docs & clinics & BMI" },
                { label: "partner & doctor onboarding" },
                { label: "media" },
                { label: "aboutUs" },
                { label: "careers" },
                { label: "blog" },
            ],
        },
        type == "admin" && {
            label: "CRM",
            childTabs: [{ label: "website" }, { label: "others" }],
        },
        {
            label: "Content",
            childTabs: [
                { label: "header & city" },
                { label: "home" },
                { label: "treatment page" },
                { label: "FAQ" },
                { label: "video" },
                { label: "our docs & clinics & BMI" },
                { label: "partner & doctor onboarding" },
                { label: "media" },
                { label: "aboutUs" },
                { label: "careers" },
                { label: "blog" },
            ],
        },
        {
            label: "Data",
            childTabs: [
                { label: "clinics" },
                { label: "doctors" },
                { label: "patients" },
                { label: "patient history" },
                { label: "surgery" },
                { label: "treatment" },
                { label: "review" },
                { label: "appointment" },
            ],
        },
        {
            label: "report",
        },
    ]

    // if (!type) navigate("/")

    return (
        <div className="font-pop">
            {/* Header */}
            <nav className="bg-violet-800 py-4 px-6 flex gap-x-10 items-center  z-50">
                <AiOutlineMenu
                    onClick={() => setShowAside((e) => !e)}
                    className="text-xl text-white cursor-pointer"
                />
                <Link to={"/"}>
                    <h1 className="text-3xl font-semibold text-white">
                        Optimum
                    </h1>
                </Link>
            </nav>
            {/* Aside */}
            <aside
                className={` ${
                    showAside ? "left-0" : "-left-full"
                }  text-lg text-white z-40 h-full overflow-y-auto items-start font-semibold bg-violet-800    w-[20%] transition-all group fixed top-0 py-4   `}
            >
                <button className="py-4 px-6">
                    <AiOutlineMenu
                        onClick={() => setShowAside((e) => !e)}
                        className="text-xl text-white cursor-pointer "
                    />
                </button>
                {/* <div className="flex flex-col gap-y-2 mt-2 h-[90vh] overflow-y-auto  px-6">
                    {menus.map((menu) => (
                        <button
                            onClick={() =>
                                typeof menu == "string"
                                    ? setTab(menu)
                                    : setTab("CRM")
                            }
                            className={`capitalize w-full  text-left px-6 py-2 hover:bg-violet-200 rounded-md transition-all hover:text-violet-600 ${
                                tab == menu
                                    ? "bg-violet-200 text-violet-600"
                                    : ""
                            } `}
                        >
                            {typeof menu == "string"
                                ? menu
                                : Object.keys(menu).map((key) => key)}
                            {tab == "CRM" &&
                                typeof menu != "string" &&
                                Object.keys(menu).map((key) =>
                                    menu[key].map((d) => (
                                        <p
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setTab(d)
                                            }}
                                            className="p-2 hover:bg-purple-600 rounded-md transition-all hover:text-white "
                                        >
                                            {d}
                                        </p>
                                    ))
                                )}
                        </button>
                    ))}
                </div> */}
                <ul className="px-2 pr-6">
                    {sidebarData.map((tabs, index) => (

                        <li
                            key={index}
                            className={`p-2 cursor-pointer capitalize ${
                                tab === tabs.label ? "bg-white text-pri" : ""
                            }`}
                            onClick={() => setTab(tabs.label)}
                        >
                            {tabs.label}
                            {tabs.childTabs && tab == tabs.label && (
                                <ul className="ml-4">
                                    {tabs.childTabs.map(
                                        (childTab, childIndex) => (
                                            <li
                                                key={childIndex}
                                                className={`p-2 cursor-pointer capitalize hover:bg-pri hover:text-white ${
                                                    tab === childTab.label
                                                        ? "bg-pri text-white"
                                                        : ""
                                                }`}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setTab(childTab.label)
                                                }}
                                            >
                                                {childTab.label}
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>
            {/* Main */}
            <main className="p-10">
                {/* Heading */}
                <h1 className="capitalize text-3xl font-semibold text-center">
                    {tab}
                </h1>
                {tab === "header & city" && <DashHeader />}
                {tab === "clinics" && <DashClinics />}
                {tab === "doctors" && <DashDocs />}
                {tab === "patients" && <DashPatients />}
                {tab === "patient history" && <DashHistory />}
                {tab === "FAQ" && <DashFAQ />}
                {tab === "surgery" && <DashSurgery />}
                {tab === "treatment" && <DashTreatment />}
                {tab === "review" && <DashReview />}
                {tab === "appointment" && <DashAppointment />}
                {tab === "video" && <DashVideo />}
                {tab === "blog" && <DashBlog setTab={setTab} />}
                {tab === "newBlog" && <NewBlog setTab={setTab} />}
                {tab === "aboutUs" && <DashAboutUs />}
                {tab === "website" && <DashEnquire />}
                {tab === "home" && <DashHome />}
                {tab === "treatment page" && <DashTreat />}
                {tab === "our docs & clinics & BMI" && <DashOurDocs />}
                {tab === "partner & doctor onboarding" && <DashPartner />}
                {tab === "media" && <DashMedia />}
                {tab === "careers" && <DashCareer />}
                {tab === "report" && <DashReport />}
            </main>
        </div>
    )
}

export default Dashboard
