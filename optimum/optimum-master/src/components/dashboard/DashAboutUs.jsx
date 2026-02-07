import axios from "axios"
import React, { useEffect, useState } from "react"
import ReactQuill from "react-quill"

const DashAboutUs = () => {
    const [aboutUsVal, setAboutUsVal] = useState("")
    const [patientPortalVal, setPatientPortalVal] = useState("")
    const [healthCareVal, setHealthCareVal] = useState("")
    const [founderVal, setFounderVal] = useState("")
    const [visionVal, setVisionVal] = useState("")
    const [audienceVal, setAudienceVal] = useState("")

    const [data, setData] = useState()

    const handleSave = () => {
        axios
            .post(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/aboutUs`,
                {
                    aboutUs: aboutUsVal,
                    patientPortal: patientPortalVal,
                    healthCare: healthCareVal,
                    aboutFounder: founderVal,
                    vision: visionVal,
                    audience: audienceVal,
                }
            )
            .catch((e) => {
                console.log(e)
            })
    }

    const fetchAboutUs = () => {
        axios
            .get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/aboutUs`
            )
            .then((res) => setData(res.data[0]))
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        fetchAboutUs()
    }, [])

    useEffect(() => {
        if (data) {
            setAboutUsVal(data.aboutUs)
            setPatientPortalVal(data.patientPortal)
            setHealthCareVal(data.healthCare)
            setFounderVal(data.aboutFounder)
            setVisionVal(data.vision)
            setAudienceVal(data.audience)
        }
    }, [data])

    return (
        <section>
            <h1 className="text-pri font-bold text-3xl">About Us</h1>
            <ReactQuill
                theme="snow"
                value={aboutUsVal}
                onChange={setAboutUsVal}
                className="border border-pri"
                modules={{
                    toolbar: {
                        container: [
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            ["bold", "italic", "underline"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["link"],
                            [{ color: ["#8b5cf6", "#0ea5e9", "#fff", "#000"] }], // Add the 'image' option to the toolbar
                        ],
                    },
                }}
            />
            <h1 className="text-pri font-bold text-3xl mt-10">
                Patient Portal
            </h1>
            <ReactQuill
                theme="snow"
                value={patientPortalVal}
                onChange={setPatientPortalVal}
                className="border border-pri "
                modules={{
                    toolbar: {
                        container: [
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            ["bold", "italic", "underline"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["link"],
                            [{ color: ["#8b5cf6", "#0ea5e9", "#fff", "#000"] }], // Add the 'image' option to the toolbar
                        ],
                    },
                }}
            />
            <h1 className="text-pri font-bold text-3xl mt-10">Health Care </h1>
            <ReactQuill
                theme="snow"
                value={healthCareVal}
                onChange={setHealthCareVal}
                className="border border-pri "
                modules={{
                    toolbar: {
                        container: [
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            ["bold", "italic", "underline"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["link"],
                            [{ color: ["#8b5cf6", "#0ea5e9", "#fff", "#000"] }], // Add the 'image' option to the toolbar
                        ],
                    },
                }}
            />
            <h1 className="text-pri font-bold text-3xl mt-10">
                About Founder{" "}
            </h1>
            <ReactQuill
                theme="snow"
                value={founderVal}
                onChange={setFounderVal}
                className="border border-pri "
                modules={{
                    toolbar: {
                        container: [
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            ["bold", "italic", "underline"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["link"],
                            [{ color: ["#8b5cf6", "#0ea5e9", "#fff", "#000"] }], // Add the 'image' option to the toolbar
                        ],
                    },
                }}
            />
            <h1 className="text-pri font-bold text-3xl mt-10">
                Founder's Vision{" "}
            </h1>
            <ReactQuill
                theme="snow"
                value={visionVal}
                onChange={setVisionVal}
                className="border border-pri "
                modules={{
                    toolbar: {
                        container: [
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            ["bold", "italic", "underline"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["link"],
                            [{ color: ["#8b5cf6", "#0ea5e9", "#fff", "#000"] }], // Add the 'image' option to the toolbar
                        ],
                    },
                }}
            />
            <h1 className="text-pri font-bold text-3xl mt-10">Our Audience </h1>
            <ReactQuill
                theme="snow"
                value={audienceVal}
                onChange={setAudienceVal}
                className="border border-pri "
                modules={{
                    toolbar: {
                        container: [
                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                            ["bold", "italic", "underline"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["link"],
                            [{ color: ["#8b5cf6", "#0ea5e9", "#fff", "#000"] }], // Add the 'image' option to the toolbar
                        ],
                    },
                }}
            />
            <button
                onClick={handleSave}
                className="py-2 w-full rounded-md bg-violet-800 text-white font-semibold mt-10"
            >
                Save Details
            </button>
        </section>
    )
}

export default DashAboutUs
