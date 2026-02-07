import React, { useEffect, useState } from "react"
import OurCli from "./OurCli"
import OurCliHero from "./OurCliHero"
import CLINICIMG from "../../assets/hospital2.png"
import axios from "axios"

const OurClinic = () => {
    const [city, setCity] = useState("")
    const [disease, setDisease] = useState("")

    const [data, setData] = useState()

    const fetchOurDocs = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/ourDocs`
            )
            setData(data[0])
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchOurDocs()
    }, [])

    return (
        <div className="font-pop ">
            <OurCliHero
                data={data}
                city={city}
                setCity={setCity}
                disease={disease}
                setDisease={setDisease}
            />
            {city && disease ? (
                <OurCli city={city} disease={disease} />
            ) : (
                <img src={CLINICIMG} className="mx-auto my-2" />
            )}
        </div>
    )
}

export default OurClinic
