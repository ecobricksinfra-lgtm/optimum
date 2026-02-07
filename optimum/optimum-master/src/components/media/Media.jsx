import React, { useEffect, useState } from "react"
import MediaHero from "./MediaHero"
import InNews from "./InNews"
import Stories from "./Stories"
import axios from "axios"

const Media = () => {
    const [data, setData] = useState()

    const fetchMedia = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/media`
            )
            setData(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchMedia()
    }, [])

    return (
        <div className="font-pop  ">
            <h1 className="py-6 px-3 lg:px-10">
                For Media Related Queries, Please Mail:{" "}
                <span className="font-semibold underline-offset-8 ">
                    info@optimumhealth.in
                </span>
            </h1>
            <MediaHero data={data} />
            <InNews />
            <Stories data={data} />
        </div>
    )
}

export default Media
