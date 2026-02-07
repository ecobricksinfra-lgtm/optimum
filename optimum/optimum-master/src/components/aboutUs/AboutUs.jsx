import React, { useEffect, useState } from "react"
import { FaUserMd, FaMobileAlt, FaUserFriends, FaMedkit } from "react-icons/fa"
import { RiComputerLine } from "react-icons/ri"
import parse from "html-react-parser"
import heroImage from "../../assets/doctors2.webp"
import PatientPortal from "./PatientPortal"
import HealthCareTeam from "./HealthTeam"
import Treatments from "./Treatments"
import Services from "./OtherServices"
import Locations from "./Locations"
import useModal from "../../hooks/useModal"
import Popup from "../PopUp"
import axios from "axios"

const AboutUs = () => {
    const { onClose, setShowModal, showModal } = useModal()
    const [data, setData] = useState()

    const fetchAboutUs = () => {
        axios
            .get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/aboutUs`
            )
            .then((res) => setData(res.data[0]))
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        fetchAboutUs()
    }, [])

    return (
        <div className="flex flex-col items-center justify-start w-full font-pop">
            {/* Hero Section */}
            <section className="relative w-full h-[30rem]">
                <img
                    src={heroImage}
                    alt="Optimum Hero"
                    className="w-full h-full object-top object-cover"
                />
                <div className="absolute bottom-0 left-0 p-10">
                    <h1 className="text-5xl font-bold text-white bg-black/50 p-2 rounded-md"></h1>
                </div>
            </section>

            <section className="w-full py-20 pb-10 px-10 md:px-20 lg:px-40 xl:px-60 bg-white ">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold text-pri mb-5">
                        About Us
                    </h2>
                    <p
                        dangerouslySetInnerHTML={{ __html: data?.aboutUs }}
                        className="text-lg text-gray-600 leading-7 mb-10"
                    ></p>
                    {/* <p className="text-lg text-gray-600 leading-7 mb-10">
                        Optimum Health is dedicated to making healthcare more
                        accessible, affordable, and efficient through its
                        advanced technology solutions. The company's
                        cutting-edge platforms and tools allow patients,
                        healthcare providers, and insurers to connect seamlessly
                        and improve the overall patient experience. Our mission
                        is to provide compassionate, personalised, and
                        comprehensive healthcare services to individuals of all
                        ages and backgrounds.
                    </p>
                    <p className="text-lg text-gray-600 leading-7 mb-10">
                        Our team of expert doctors, and product specialists who
                        are passionate about developing solutions that make a
                        real difference in people's lives. We're constantly
                        researching, testing, and refining our products and
                        services to ensure that they meet the highest standards
                        of quality and result efficacy.
                    </p>
                    <p className="text-lg text-gray-600 leading-7 mb-10">
                        We believe that technology can be a powerful tool for
                        improving health and wellness, and that's why we've
                        developed a range of smart, connected products that use
                        the latest technology to help individuals manage their
                        health more effectively. Our products are designed to be
                        intuitive and easy to use, so that anyone can benefit
                        from them, regardless of their age or technical ability.
                    </p>
                    <p className="text-lg text-gray-600 leading-7 mb-10">
                        We have partnered with 150+ highly specialised doctors
                        with decades of experience in their respective fields.
                        At Optimum Health, we're committed to making our
                        products and services highly accessible and affordable
                        to everyone who needs them. We believe that everyone
                        deserves to have access to the best healthcare products
                        and services, and we're determined to make that a
                        reality.
                    </p>
                    <p className="text-lg text-gray-600 leading-7 mb-10">
                        Our passion for improving people's lives is what drives
                        us every day. We're proud to be a company that is making
                        a real difference in the lives of individuals and their
                        families. We're excited to continue pushing the
                        boundaries of what's possible in the field of health
                        tech, and we invite you to join us on this journey.
                    </p> */}
                </div>
            </section>
            <PatientPortal data={data?.patientPortal} />
            <HealthCareTeam data={data?.healthCare} />
            {/* Abuut Found */}
            <div className="bg-white p-10 pt-20  px-10 md:px-20 lg:px-40 xl:px-60 ">
                <h2 className="text-4xl text-pri font-bold mb-6">
                    About Founder
                </h2>
                <p className="py-2 text-gray-600 pb-6 text-lg">
                    {data?.aboutFounder && parse(data?.aboutFounder)}
                </p>
            </div>
            {/* Founder Vision */}
            <div className="bg-white p-10 pt-20  px-10 md:px-20 lg:px-40 xl:px-60 ">
                <h2 className="text-4xl text-pri font-bold mb-6">
                    Founder’s Vision
                </h2>
                <p className="py-2 text-gray-600 pb-6 text-lg">
                    {data?.vision && parse(data.vision)}
                </p>
            </div>
            <Treatments />
            <Services />
            <Locations />
            {/*    Audience  */}
            <div className="bg-white py-10 flex items-center justify-start  px-10 md:px-20 lg:px-40 xl:px-60 ">
                <div className="text-left">
                    <h3 className="text-4xl text-pri font-bold mb-6">
                        Our Audience
                    </h3>
                    <p className="text-gray-500 text-lg">
                        {data?.audience && parse(data.audience)}
                    </p>
                </div>
            </div>
            {showModal && <Popup onClose={onClose} />}
        </div>
    )
}

export default AboutUs
