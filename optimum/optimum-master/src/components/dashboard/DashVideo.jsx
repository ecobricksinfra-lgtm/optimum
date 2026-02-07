import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PopVideo from "./Pops/PopVideo"

const DashVideo = () => {
    const [videosData, setVideosData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const [deleteTitle, setDeleteTitle] = useState("")

    const fetchVideos = async () => {
        try {
            const res = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/video`
            )
            console.log(res.data)
            setVideosData(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleDelete = async () => {
        try {
            const appointments = await axios.delete(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/video/${deleteId}`
            )
            setDeleteId(null)
            setDeleteTitle(null)
            setRefresh((e) => !e)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchVideos()
    }, [refresh])

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="block ml-auto px-6 py-2 bg-violet-800 text-white font-semibold rounded-md"
            >
                Add Video
            </button>
            {/* videos grid */}
            <div className="grid grid-cols-3 gap-6 mt-10">
                {videosData.map((video) => (
                    // Card
                    <div className="p-3 rounded-lg border-2 border-pri">
                        <div className="w-full">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.url}`}
                                title={video.title}
                                height={"300px"}
                                allowFullScreen
                                className="w-full"
                            ></iframe>
                        </div>
                        <div className="card-title mt-4 flex justify-between">
                            <h3 className="text-xl font-semibold">
                                {video.title}
                            </h3>
                            <button
                                onClick={() => {
                                    setDeleteTitle(video.title)
                                    setDeleteId(video._id)
                                }}
                                className="px-3 py-1 text-white font-semibold bg-purple-800 rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <PopVideo setRefresh={setRefresh} setShowModal={setShowModal} />
            )}

            {deleteTitle && (
                <div className="fixed inset-0 z-50 flex bg-black/20 items-center justify-center backdrop-blur-sm  w-full overflow-hidden font-pop">
                    <div className="p-3 border-2 border-pri bg-white rounded-md w-max">
                        <h1 className="text-lg">{`Are You Sure? You Want To Delete ${deleteTitle}`}</h1>
                        <div className="flex justify-around mt-4">
                            <button
                                onClick={handleDelete}
                                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md"
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => setDeleteTitle("")}
                                className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-md"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DashVideo
