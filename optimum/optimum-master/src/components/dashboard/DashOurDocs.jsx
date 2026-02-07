import axios from "axios"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"

const DashOurDocs = () => {
    const { register, setValue, handleSubmit } = useForm()

    const fetchOurDocs = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/ourDocs`
            )
            Object.keys(data[0]).map((keys) => setValue(keys, data[0][keys]))
        } catch (e) {
            console.log(e)
        }
    }

    const handleSave = async (data) => {
        try {
            const res = await axios.post(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/ourDocs`,
                data
            )
            fetchOurDocs()
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchOurDocs()
    }, [])

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold text-pri">Our Doctors</h1>
            <h1 className="text-3xl font-semibold text-pri">Banner</h1>
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

            <h1 className="text-3xl font-semibold text-pri mt-10">
                Our Clinics
            </h1>
            <h1 className="text-3xl font-semibold text-pri">Banner</h1>
            <input
                {...register("cliTitle")}
                className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                type="text"
                placeholder="Title"
            />
            <input
                className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                type="text"
                {...register("cliSubtitle")}
                placeholder="Subtitle"
            />

            <h1 className="text-3xl font-semibold text-pri mt-20">BMI</h1>
            <textarea
                className="shadow h-20 appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                "
                {...register("bmi")}
                placeholder="BMI Description"
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

export default DashOurDocs
