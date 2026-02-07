import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useForm } from "react-hook-form"
import axios from "axios"
import { allDiseases } from "../../header/DiseaseModal"

const PopClinic = ({ setShowModal, setRefresh }) => {
    const { register, handleSubmit } = useForm()
    const [img, setImg] = useState({})
    const [treatments, setTreatments] = useState([])
    const [showDiseases, setShowDiseases] = useState(false)

    const onSubmit = async (data) => {
        console.log(data)

        try {
            const formData = new FormData()
            formData.append("image", img)
            formData.append("treatments", treatments)
            for (let key in data) {
                formData.append(key, data[key])
            }
            const res = await axios.post(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/clinic`,
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
                        Add Clinic
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
                        {...register("phoneNumber")}
                        id="name"
                        type="tel"
                        placeholder="Phone Number"
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
                        {...register("timing")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="Timing"
                    />
                    {/* <input
                        {...register("location")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="Location"
                    /> */}
                    <input
                        {...register("rating")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="number"
                        placeholder="Rating"
                    />

                    {/* Multi Select */}
                    <div
                        onClick={() => setShowDiseases((e) => !e)}
                        className="flex gap-1 border-b-2  border-pri items-center  relative flex-wrap"
                    >
                        {treatments.length > 0 ? (
                            treatments.map((treatment, i) => (
                                <h1 className="text-xs px-1 bg-gray-300">
                                    {treatment}
                                </h1>
                            ))
                        ) : (
                            <p className="text-gray-400 p-1">
                                Select Treatments
                            </p>
                        )}
                        {showDiseases && (
                            <div className="flex  flex-col gap-1 h-60 w-full overflow-auto  left-0 absolute top-full bg-white p-2 rounded-md shadow-xl border border-gray-300">
                                {allDiseases.map((dis) => (
                                    <p
                                        onClick={() => {
                                            // setShowDiseases(false)
                                            setTreatments((e) => {
                                                let res = []
                                                if (
                                                    e.find((tr) => tr == dis) !=
                                                    undefined
                                                ) {
                                                    res = e.filter(
                                                        (tr) => tr != dis
                                                    )
                                                } else res = [...e, dis]
                                                return res
                                            })
                                        }}
                                        className="cursor-pointer"
                                    >
                                        {dis}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </form>
                {/* Image */}
                <input type="file" className="mt-4" onChange={handleFile} />
                <p className="text-red-500">Image Resolution: 112 x 96</p>
                {/* Button */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        onClick={handleSubmit(onSubmit)}
                        className=" bg-sky-500 w-full  hover:-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline 
                             "
                        type="button"
                    >
                        Add Clinic
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PopClinic
