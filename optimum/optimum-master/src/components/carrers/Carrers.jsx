import React, { useEffect, useState } from "react"
import CarrerHero from "./CarrerHero"
import Positions from "./Positions"
import Section3 from "../home/Section3"
import WhyWork from "./WhyWork"
import axios from "axios"

const Carrers = () => {
    const [data, setData] = useState()

    const [home, setHome] = useState()

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

    const fetchCareer = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/career`
            )
            setData(data[0])
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchCareer()
        fetchHome()
    }, [])

    return (
        <div className="font-pop">
            <CarrerHero data={data} />
            <Positions data={data} />
            <WhyWork data={data} />
            <Section3 data={home} />
        </div>
    )
}

export default Carrers
