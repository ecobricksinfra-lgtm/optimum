import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useForm } from "react-hook-form"
import axios from "axios"
import { allDiseases } from "../../header/DiseaseModal"

const PopDoctor = ({ setShowModal, setRefresh }) => {
    const { register, handleSubmit } = useForm()
    const [img, setImg] = useState({})

    const onSubmit = async (data) => {
        console.log(data)

        try {
            const formData = new FormData()
            formData.append("image", img)
            for (let key in data) {
                formData.append(key, data[key])
            }
            const res = await axios.post(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/doctor`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            setShowModal(false)
            res && setRefresh((e) => !e)
        } catch (e) {
            console.log(e)
        }
    }

    const handleFile = (e) => {
        if (e.target.files[0]) setImg(e.target.files[0])
    }

    return (
        <div className="fixed inset-0 z-50 flex bg-black/20 items-center justify-center backdrop-blur-sm  w-full overflow-hidden font-pop ">
            {/* PopUp */}
            <div className=" w-10/12 lg:w-6/12 relative bg-white rounded-lg px-4  md:px-6 overflow-idden shadow-xl shadow-black/40 pb-8 border-4 border-pri ">
                <button
                    className="absolute top-3 right-3 focus:outline-none text-white font-bold "
                    onClick={() => setShowModal(false)}
                >
                    <AiOutlineClose className="h-6 w-8 text-pri font-bold" />
                </button>
                <div className="flex flex-col items-center p-6">
                    <h3 className="text-2xl text-pri font-semibold mb-4">
                        Add Doctor
                    </h3>
                </div>
                {/* Form */}
                <form className="bg-white rounded-md w-full lg:grid-cols-2 grid-cols-1 grid gap-4">
                    <input
                        {...register("name")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        {...register("mobileNumber")}
                        id="name"
                        type="tel"
                        placeholder="Mobile Number"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        {...register("email")}
                        id="name"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        {...register("address")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="Address"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="City"
                        {...register("city")}
                    />
                    <input
                        {...register("qualification")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="Qualification"
                    />
                    <input
                        {...register("experience")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="Experience"
                    />
                    <input
                        {...register("department")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="Department"
                    />

                    <input
                        {...register("rating")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="number"
                        placeholder="Rating"
                    />
                </form>
                {/* Image */}
                <input type="file" className="mt-4" onChange={handleFile} />
                <p className="text-red-500">Image Resolution: 112 x 112</p>

                {/* Button */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        onClick={handleSubmit(onSubmit)}
                        className=" bg-sky-500 w-full  hover:-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline 
                             "
                        type="button"
                    >
                        Add Doctor
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PopDoctor
