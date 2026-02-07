import React, { useEffect, useState } from "react"

import Contact from "./Contact"
import heroImage from "../assets/doctor.png"
import axios from "axios"

const ContactUs = () => {
    const [data, setData] = useState()

    const fetchHome = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/home`
            )
            setData(data[0])
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchHome()
    }, [])

    return (
        <div className="mx-auto  font-pop">
            <div className="flex flex-col-reverse px-6 lg:flex-row items-center pt-10 lg:pt-0 relative overflow-hidden bg-gradient-to-br  from-violet-950  to-violet-500 ">
                <div className="lg:w-5/12 z-20">
                    <img src={heroImage} alt="Hero" className="w-3/4" />
                </div>
                <div>
                    <h1 className="text-white font-semibold text-5xl lg:text-6xl">
                        Contact Us
                    </h1>
                    <p className="my-10 text-xl text-white">
                        Have questions about our products, support services, or
                        anything else? Let us know and we’ll get back to you.
                    </p>
                </div>
            </div>

            <Contact data={data} form />
        </div>
    )
}

export default ContactUs
