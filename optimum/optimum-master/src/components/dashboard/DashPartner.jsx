import axios from "axios"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const DashPartner = () => {
    const { register, setValue, handleSubmit } = useForm()
    const [partDoc, setpartDoc] = useState([])
    const [partHos, setpartHos] = useState([])
    const [docDoc, setdocDoc] = useState([])
    const [docHos, setdocHos] = useState([])

    const [newText, setNewText] = useState("")

    const fetchPartner = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/partner`
            )
            Object.keys(data[0]).map((keys) => setValue(keys, data[0][keys]))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSave = async (data) => {
        try {
            const res = await axios.post(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/partner`,
                {
                    ...data,
                    docDoc,
                    docHos,
                    partDoc,
                    partHos,
                }
            )
            fetchPartner()
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPartner()
    }, [])

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-pri">Partner With Us</h1>
            <h1 className="text-2xl font-semibold text-pri">Banner</h1>
            <input
                {...register("partTitle")}
                className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                type="text"
                placeholder="Title"
            />
            <input
                className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                type="text"
                {...register("partSubtitle")}
                placeholder="Subtitle"
            />
            <h1 className="text-2xl font-semibold text-pri">Why Choose Us</h1>
            <div className="flex gap-6 w-full ">
                {/* docs */}
                <div className="flex flex-col gap-1 w-full ">
                    <h1 className="text-2xl font-semibold text-pri">
                        For Doctors
                    </h1>
                    {partDoc.map((data, i) => (
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                            type="text"
                            placeholder="Text"
                            value={data}
                            onChange={(e) =>
                                setpartDoc((pre) => {
                                    const temp = [...pre]
                                    temp[i] = e.target.value
                                    return temp
                                })
                            }
                        />
                    ))}
                    <div className="flex gap-2">
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                            type="text"
                            placeholder="New Text"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                setpartDoc((e) => [...e, newText])
                                setNewText("")
                            }}
                            className="bg-violet-800 py-2 rounded-md px-6 text-white font-semibold"
                        >
                            Add
                        </button>
                    </div>
                </div>
                {/* Host */}
                <div className="flex flex-col gap-1 w-full ">
                    <h1 className="text-2xl font-semibold text-pri">
                        For Hospitals
                    </h1>
                    {partHos.map((data, i) => (
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                            type="text"
                            placeholder="Text"
                            value={data}
                            onChange={(e) =>
                                setpartHos((pre) => {
                                    const temp = [...pre]
                                    temp[i] = e.target.value
                                    return temp
                                })
                            }
                        />
                    ))}
                    <div className="flex gap-2">
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                            type="text"
                            placeholder="New Text"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                setpartHos((e) => [...e, newText])
                                setNewText("")
                            }}
                            className="bg-violet-800 py-2 rounded-md px-6 text-white font-semibold"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <h1 className="text-3xl font-semibold text-pri">
                Doctor On Boarding
            </h1>
            <h1 className="text-2xl font-semibold text-pri">Banner</h1>
            <input
                {...register("docTitle")}
                className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                type="text"
                placeholder="Title"
            />
            <input
                className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                type="text"
                {...register("docSubtitle")}
                placeholder="Subtitle"
            />
            <h1 className="text-2xl font-semibold text-pri">Why Choose Us</h1>
            <div className="flex gap-6 w-full ">
                {/* docs */}
                <div className="flex flex-col gap-1 w-full ">
                    <h1 className="text-2xl font-semibold text-pri">
                        For Doctors
                    </h1>
                    {docDoc.map((data, i) => (
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                            type="text"
                            placeholder="Text"
                            value={data}
                            onChange={(e) =>
                                setdocDoc((pre) => {
                                    const temp = [...pre]
                                    temp[i] = e.target.value
                                    return temp
                                })
                            }
                        />
                    ))}
                    <div className="flex gap-2">
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                            type="text"
                            placeholder="New Text"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                setdocDoc((e) => [...e, newText])
                                setNewText("")
                            }}
                            className="bg-violet-800 py-2 rounded-md px-6 text-white font-semibold"
                        >
                            Add
                        </button>
                    </div>
                </div>
                {/* Host */}
                <div className="flex flex-col gap-1 w-full ">
                    <h1 className="text-2xl font-semibold text-pri">
                        For Hospitals
                    </h1>
                    {docHos.map((data, i) => (
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                            type="text"
                            placeholder="Text"
                            value={data}
                            onChange={(e) =>
                                setdocHos((pre) => {
                                    const temp = [...pre]
                                    temp[i] = e.target.value
                                    return temp
                                })
                            }
                        />
                    ))}
                    <div className="flex gap-2">
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                            type="text"
                            placeholder="New Text"
                            value={newText}
                            onChange={(e) => setNewText(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                setdocHos((e) => [...e, newText])
                                setNewText("")
                            }}
                            className="bg-violet-800 py-2 rounded-md px-6 text-white font-semibold"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>

            <button
                onClick={handleSubmit(handleSave)}
                className="bg-violet-800 py-2 rounded-md px-6 text-white font-semibold"
            >
                Save{" "}
            </button>
        </div>
    )
}

export default DashPartner
