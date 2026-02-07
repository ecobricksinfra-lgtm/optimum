import axios from "axios"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"

const DashHome = () => {
    const { register, setValue, handleSubmit } = useForm()

    const fetchHome = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/home`
            )
            Object.keys(data[0]).map((keys) => setValue(keys, data[0][keys]))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSave = async (data) => {
        try {
            const res = await axios.post(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/home`,
                data
            )
            fetchHome()
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchHome()
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
            <h1 className="text-3xl font-semibold text-pri">
                Optimum Care In Number
            </h1>
            <div className="grid grid-cols-4 gap-4">
                <div className="p-2 border-2">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        type="text"
                        {...register("number1")}
                        placeholder="Numbers"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
            "
                        type="text"
                        {...register("number1_sub")}
                        placeholder="Subtitle"
                    />
                </div>
                <div className="p-2 border-2">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        type="text"
                        {...register("number2")}
                        placeholder="Numbers"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
            "
                        type="text"
                        {...register("number2_sub")}
                        placeholder="Subtitle"
                    />
                </div>
                <div className="p-2 border-2">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        type="text"
                        {...register("number3")}
                        placeholder="Numbers"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
            "
                        type="text"
                        {...register("number3_sub")}
                        placeholder="Subtitle"
                    />
                </div>
                <div className="p-2 border-2">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        type="text"
                        {...register("number4")}
                        placeholder="Numbers"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
            "
                        type="text"
                        {...register("number4_sub")}
                        placeholder="Subtitle"
                    />
                </div>
            </div>
            <h1 className="text-3xl font-semibold text-pri">
                Why Choose Optimum Care
            </h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg ">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        type="text"
                        {...register("care1Title")}
                        placeholder="title"
                    />
                    <textarea
                        className="shadow appearance-none h-20 border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        id="name"
                        {...register("care1Desc")}
                        placeholder="description"
                    />
                </div>
                <div className="p-3 rounded-lg ">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        type="text"
                        {...register("care2Title")}
                        placeholder="title"
                    />
                    <textarea
                        className="shadow appearance-none h-20 border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        id="name"
                        {...register("care2Desc")}
                        placeholder="description"
                    />
                </div>
                <div className="p-3 rounded-lg ">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        type="text"
                        {...register("care3Title")}
                        placeholder="title"
                    />
                    <textarea
                        className="shadow appearance-none h-20 border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        id="name"
                        {...register("care3Desc")}
                        placeholder="description"
                    />
                </div>
                <div className="p-3 rounded-lg ">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        type="text"
                        {...register("care4Title")}
                        placeholder="title"
                    />
                    <textarea
                        className="shadow appearance-none h-20 border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                        id="name"
                        {...register("care4Desc")}
                        placeholder="description"
                    />
                </div>
            </div>
            <h1 className="text-3xl font-semibold text-pri">Get In Touch</h1>
            <textarea
                className="shadow appearance-none h-20 border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                id="name"
                {...register("touch")}
                placeholder="description"
            />
            <button
                onClick={handleSubmit(handleSave)}
                className="bg-violet-800 py-2 rounded-md text-white font-semibold"
            >
                Save{" "}
            </button>
        </div>
    )
}

export default DashHome
