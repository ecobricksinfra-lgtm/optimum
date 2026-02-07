import React, { useEffect, useState } from "react"
import HomeHero from "./HomeHero"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
import Section6 from "./Section6"
import Section7 from "./Section7"
import FAQSection from "./FAQs"
import Contact from "../Contact"
import Popup from "../PopUp"
import useModal from "../../hooks/useModal"
import Footer from "../Footer"
import axios from "axios"

const Home = () => {
    const { onClose, setShowModal, showModal } = useModal()
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
        <div className="font-pop ">
            <HomeHero data={data} />
            <Section1 />
            <Section2 />
            <Section3 data={data} />
            {/* <Section4 /> */}
            <Section5 data={data} />
            <Section6 />
            <Section7 />
            <FAQSection />
            <Contact data={data} />
            {showModal && <Popup onClose={onClose} />}
        </div>
    )
}

export default Home
