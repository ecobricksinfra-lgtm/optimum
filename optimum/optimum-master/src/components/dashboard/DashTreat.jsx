import axios from "axios"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import useDatas from "../../store/useDatas"

const DashTreat = () => {
    const { register, setValue, handleSubmit } = useForm()
    const { treatments } = useDatas()
    const [page, setPage] = useState()
    const [contents, setContents] = useState([])
    const [newContent, setNewContent] = useState({ title: "", desc: "" })

    const fetchTreat = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/treat/${page}`
            )
            console.log(data)
            if (data) {
                Object.keys(data).map((keys) => {
                    if (keys != "_id" || keys != "__v")
                        setValue(keys, data[keys])
                })
                setContents(data.contents)
            } else {
                console.log("heh")
                setValue("title", "")
                setValue("subtitle", "")
                setValue("_id", "")
                setValue("__v", "")
                setValue("whatIs", "")
                setContents([])
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleSave = async (data) => {
        try {
            const { _id, __v, ...te } = data
            const res = await axios.post(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/treat`,
                {
                    ...te,
                    contents,
                    page,
                }
            )
            fetchTreat()
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (page) {
            fetchTreat()
        }
    }, [page])

    return (
        <div className="flex flex-col gap-4">
            <p className="p-2 text-pri font-semibold">
                Choose A treatment Page
            </p>
            <select
                value={page}
                onChange={(e) => setPage(e.target.value)}
                className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
            >
                <option value="">-- Select Treatment --</option>
                {treatments.map((dis) => (
                    <option value={dis.toLowerCase()}>{dis}</option>
                ))}
            </select>
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

            <h1 className="text-3xl font-semibold text-pri">{`What Is ${page} Surgery`}</h1>
            <textarea
                className="shadow appearance-none h-20 border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                id="name"
                {...register("whatIs")}
                placeholder="description"
            />
            <h1 className="text-3xl font-semibold text-pri">Contents</h1>
            <div className="grid grid-cols-3 gap-4 items-center justify-center ">
                {contents.map((content, i) => (
                    <div className="flex flex-col gap-2 ">
                        <input
                            type="text"
                            className=" outline-0 border-b-2 border-pri w-full  text-lg font-semibold p-2 m-2"
                            value={content.title}
                            placeholder="Title"
                            onChange={(e) =>
                                setContents((pre) => {
                                    const temp = [...pre]
                                    temp[i].title = e.target.value
                                    return temp
                                })
                            }
                        />
                        <textarea
                            type="text"
                            value={content.desc}
                            placeholder="Description"
                            onChange={(e) =>
                                setContents((pre) => {
                                    const temp = [...pre]
                                    temp[i].desc = e.target.value
                                    return temp
                                })
                            }
                            className=" outline-0 border-b-2 border-pri w-full   p-2 m-2 h-10"
                        />
                    </div>
                ))}
                {/* New One */}
                <div className="flex flex-col gap-2 ">
                    <input
                        type="text"
                        className="text-lg outline-0 border-b-2 border-pri w-full font-semibold p-2 m-2"
                        placeholder="New Title"
                        value={newContent.title}
                        onChange={(e) =>
                            setNewContent((pre) => ({
                                ...pre,
                                title: e.target.value,
                            }))
                        }
                    />
                    <textarea
                        type="text"
                        value={newContent.desc}
                        placeholder="New Description"
                        className=" p-2 outline-0 border-b-2 border-pri w-full m-2 h-10"
                        onChange={(e) =>
                            setNewContent((pre) => ({
                                ...pre,
                                desc: e.target.value,
                            }))
                        }
                    />
                </div>
                <button
                    onClick={() => {
                        setContents((e) => [...e, newContent])
                        setNewContent({ title: "", desc: "" })
                    }}
                    className="bg-violet-800 py-2 rounded-md text-white font-semibold"
                >
                    Add
                </button>
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

export default DashTreat
