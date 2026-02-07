import axios from "axios"
import React, { useState } from "react"

const useEnquire = () => {
    const [name, setName] = useState("")
    const [treatment, setTreatment] = useState("")
    const [city, setCity] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [email, setEmail] = useState(false)

    const postEnquire = async () => {
        try {
            const res = await axios.post(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/enquire`,
                {
                    name,
                    treatment,
                    city,
                    mobileNumber,
                    email,
                }
            )
        } catch (e) {
            console.log(e)
        }
    }

    return {
        name,
        setName,
        treatment,
        setTreatment,
        city,
        setCity,
        mobileNumber,
        setMobileNumber,
        email,
        setEmail,
        postEnquire,
    }
}

export default useEnquire
