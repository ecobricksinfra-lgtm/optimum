import axios from "axios"
import React, { useEffect, useState } from "react"

const MoreVideos = () => {
    const [videos, setVideos] = useState([])

    const fetchVideos = async () => {
        try {
            const videos = await axios.get(
                "http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/video"
            )
            console.log(videos.data)
            setVideos(videos.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchVideos()
    }, [])

    return (
        <div className="px-3 lg:px-10 py-10">
            {/* videos */}
            <h1 className="text-4xl font-semibold underline underline-offset-8 text-pri decoration-sec mb-10 text-center">
                Videos
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
                {videos.map((vid) => (
                    <VideoCard title={vid.title} videoId={vid.url} />
                ))}
                {/* <VideoCard title={""} videoId={"1G4isv_Fylg"} />
                <VideoCard title={""} videoId={"1G4isv_Fylg"} />
                <VideoCard title={""} videoId={"1G4isv_Fylg"} />
                <VideoCard title={""} videoId={"1G4isv_Fylg"} /> */}
            </div>
        </div>
    )
}

export default MoreVideos

const VideoCard = ({ videoId, title }) => {
    return (
        <div className="p-3 rounded-lg border-2 border-pri">
            <div className="w-full">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    height={"300px"}
                    title={title}
                    allowFullScreen
                    className="w-full"
                ></iframe>
            </div>
            <div className="card-title mt-4">
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
        </div>
    )
}
