import React, { useEffect, useState } from "react"
import Hero from "./Hero"
import { useParams } from "react-router-dom"
import Doctors from "./Doctors"
import Clinics from "./Clinics"
import Contents from "./Contents"
import TreatFaq from "./TreatFaq"
import Patient from "./Patient"
import Section5 from "../home/Section5"
import useModal from "../../hooks/useModal"
import Popup from "../PopUp"
import SelectCity from "./SelectCity"
import axios from "axios"

const Treatments = () => {
    const { treatment } = useParams()
    const { onClose, setShowModal, showModal } = useModal()
    const [data, setData] = useState()
    const [home, setHome] = useState()

    const fetchTreat = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/treat/${treatment}`
            )
            setData(data)
        } catch (e) {
            console.log(e)
        }
    }

    const fetchHome = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/home`
            )
            setHome(data[0])
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchTreat()
        fetchHome()
    }, [treatment])

    return (
        <div className="font-pop">
            <Hero data={data} />
            <SelectCity />
            <Doctors />
            {/* What Sec */}
            <div className="px-4 md:px-10 lg:px-36 py-16 flex flex-col gap-y-6">
                <h1 className="text-center text-4xl text-sec  capitalize font-semibold underline underline-offset-8 decoration-pri">{`What Is ${treatment} Surgery`}</h1>
                <p className="text-justify">{data?.whatIs}</p>
            </div>
            <Clinics />
            <Contents data={data} />
            <TreatFaq />
            <Patient />
            <Section5 data={home} />
            {showModal && <Popup onClose={onClose} />}
        </div>
    )
}

export default Treatments
