import React, { useEffect, useState } from "react"
import DocHero from "./DocHero"
import ChooseUs from "../partner/ChooseUs"
import axios from "axios"

const DoctorOnboarding = () => {
    const [data, setData] = useState()

    const fetchPartner = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/partner`
            )
            setData(data[0])
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPartner()
    }, [])

    return (
        <div className="font-pop">
            <DocHero data={data} />
            <ChooseUs data={data} page={"doc"} />
        </div>
    )
}

export default DoctorOnboarding
