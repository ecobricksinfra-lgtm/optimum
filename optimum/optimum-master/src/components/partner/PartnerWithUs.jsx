import React, { useEffect, useState } from "react"
import PartnerHero from "./PartnerHero"
import ChooseUs from "./ChooseUs"
import axios from "axios"

const PartnerWithUs = () => {
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
            <PartnerHero data={data} />
            <ChooseUs data={data} page={"part"} />
        </div>
    )
}

export default PartnerWithUs
