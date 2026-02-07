import axios from "axios"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const DashCareer = () => {
    const { register, setValue, handleSubmit } = useForm()
    const [positions, setPositions] = useState([])
    const [newPos, setNewPos] = useState({
        role: "",
        city: "",
        domain: "",
    })

    const fetchCareer = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/career`
            )
            Object.keys(data[0]).map((keys) => setValue(keys, data[0][keys]))
            setPositions(data[0].positions)
        } catch (e) {
            console.log(e)
        }
    }

    const handleSave = async (data) => {
        try {
            const res = await axios.post(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/career`,
                {
                    ...data,
                    positions,
                }
            )
            fetchCareer()
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchCareer()
    }, [])

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-pri">Banner</h1>
            <input
                {...register("title")}
                className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                type="text"
                placeholder="Title"
            />
            <input
                className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                type="text"
                {...register("subtitle")}
                placeholder="Subtitle"
            />
            <textarea
                className="shadow appearance-none h-20 border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                id="name"
                {...register("description")}
                placeholder="description"
            />
            <h1 className="text-3xl font-semibold text-pri">Positions</h1>
            <div className="grid grid-cols-3 justify-center items-center gap-4">
                {/* pos */}
                {positions.map((pos, i) => (
                    <div className="p-2 border-2 rounded-lg flex flex-col gap-1">
                        <input
                            value={pos.domain}
                            onChange={(e) =>
                                setPositions((pre) => {
                                    const temp = [...pre]
                                    temp[i].domain = e.target.value
                                    return temp
                                })
                            }
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                            type="text"
                            placeholder="Domain"
                        />
                        <input
                            value={pos.role}
                            onChange={(e) =>
                                setPositions((pre) => {
                                    const temp = [...pre]
                                    temp[i].role = e.target.value
                                    return temp
                                })
                            }
                            className="shadow appearance-none border-b-2 text-lg font-semibold border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                            type="text"
                            placeholder="Role"
                        />
                        <input
                            value={pos.city}
                            onChange={(e) =>
                                setPositions((pre) => {
                                    const temp = [...pre]
                                    temp[i].city = e.target.value
                                    return temp
                                })
                            }
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                            type="text"
                            placeholder="city"
                        />
                    </div>
                ))}
                {/* New One */}
                <div className="p-2 border-2 rounded-lg flex flex-col gap-1">
                    <input
                        value={newPos.domain}
                        onChange={(e) =>
                            setNewPos((pre) => {
                                const temp = { ...pre }
                                temp.domain = e.target.value
                                return temp
                            })
                        }
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        type="text"
                        placeholder="New Domain"
                    />
                    <input
                        value={newPos.role}
                        onChange={(e) =>
                            setNewPos((pre) => {
                                const temp = { ...pre }
                                temp.role = e.target.value
                                return temp
                            })
                        }
                        className="shadow appearance-none border-b-2 text-lg font-semibold border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        type="text"
                        placeholder="New Role"
                    />
                    <input
                        value={newPos.city}
                        onChange={(e) =>
                            setNewPos((pre) => {
                                const temp = { ...pre }
                                temp.city = e.target.value
                                return temp
                            })
                        }
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        type="text"
                        placeholder="City"
                    />
                </div>
                <button
                    onClick={() => {
                        setPositions((e) => [...e, newPos])
                        setNewPos({
                            role: "",
                            city: "",
                            domain: "",
                        })
                    }}
                    className="px-4 py-2 bg-violet-800 text-white font-semibold rounded-md"
                >
                    Add
                </button>
            </div>
            <h1 className="text-3xl font-semibold text-pri">
                Why Work At Optimum Care
            </h1>
            <div className="grid grid-cols-5 gap-4">
                <input
                    className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                    type="text"
                    {...register("work1")}
                    placeholder="Text"
                />
                <input
                    className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                    type="text"
                    {...register("work2")}
                    placeholder="Text"
                />
                <input
                    className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                    type="text"
                    {...register("work3")}
                    placeholder="Text"
                />
                <input
                    className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                    type="text"
                    {...register("work4")}
                    placeholder="Text"
                />
                <input
                    className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                    type="text"
                    {...register("work5")}
                    placeholder="Text"
                />
            </div>

            <button
                onClick={handleSubmit(handleSave)}
                className="bg-violet-800 py-2 rounded-md text-white font-semibold"
            >
                Save{" "}
            </button>
        </div>
    )
}

export default DashCareer
