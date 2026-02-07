import React, { useEffect, useState } from "react"
import OurDocHero from "./OurDocHero"
import OurDocs from "./OurDocs"
import DOC_IMG from "../../assets/doctors2.png"
import axios from "axios"

const OurDoctors = () => {
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
            <OurDocHero
                data={data}
                city={city}
                setCity={setCity}
                disease={disease}
                setDisease={setDisease}
            />
            {city && disease ? (
                <OurDocs city={city} disease={disease} />
            ) : (
                <img src={DOC_IMG} className=" my-4 mx-auto" />
            )}
        </div>
    )
}

export default OurDoctors
