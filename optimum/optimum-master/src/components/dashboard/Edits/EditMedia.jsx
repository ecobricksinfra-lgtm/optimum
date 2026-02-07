import { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useForm } from "react-hook-form"
import axios from "axios"

const EditMedia = ({ editId, setEditId, setRefresh }) => {
    const { register, handleSubmit, setValue } = useForm()
    const [img, setImg] = useState(null)
    const [showDiseases, setShowDiseases] = useState(false)
    const [data, setData] = useState({})

    const onSubmit = async (data) => {
        try {
            const formData = new FormData()
            img && formData.append("image", img)
            formData.append("treatments", treatments)
            for (let key in data) {
                formData.append(key, data[key])
            }
            const res = await axios.put(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/media/${editId}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            setEditId(null)
            res && setRefresh((e) => !e)
        } catch (e) {
            console.log(e)
        }
    }

    const handleFile = (e) => {
        if (e.target.files[0]) setImg(e.target.files[0])
    }

    useEffect(() => {
        if (data && data.treatments) {
            Object.keys(data).map((key) => setValue(key, data[key]))
            // console.log(data.treatments)
            setTreatments(data.treatments)
        }
    }, [data])

    const fetchMedia = async () => {
        try {
            const medias = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/media/${editId}`
            )
            console.log(medias.data)
            setData(medias.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchMedia()
    }, [])

    return (
        <div className="fixed inset-0 z-50 flex bg-black/20 items-center justify-center backdrop-blur-sm  w-full overflow-hidden font-pop ">
            {/* PopUp */}
            <div className=" w-10/12 lg:w-6/12 relative bg-white rounded-lg px-4  md:px-6 overflow-idden shadow-xl shadow-black/40 pb-8 border-4 border-pri ">
                <button
                    className="absolute top-3 right-3 focus:outline-none text-white font-bold "
                    onClick={() => setEditId(null)}
                >
                    <AiOutlineClose className="h-6 w-8 text-pri font-bold" />
                </button>
                <div className="flex flex-col items-center p-6">
                    <h3 className="text-2xl text-pri font-semibold mb-4">
                        Edit Media
                    </h3>
                </div>
                {/* Form */}
                <form className="bg-white rounded-md w-full lg:grid-cols-2 grid-cols-1 grid gap-4">
                    <input
                        {...register("publish")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        type="text"
                        placeholder="Published By"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        {...register("title")}
                        type="text"
                        placeholder="Title"
                    />
                    <input
                        {...register("subtitle")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        type="text"
                        placeholder="Subtitle"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        type="date"
                        placeholder="Date"
                        {...register("date")}
                    />
                </form>
                {/* Image */}
                <input type="file" className="mt-4" onChange={handleFile} />
                <p className="text-red-500">Image Resolution: 172 x 192</p>

                {/* Button */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        onClick={handleSubmit(onSubmit)}
                        className=" bg-sky-500 w-full  hover:-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline 
                             "
                        type="button"
                    >
                        Update Media
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditMedia
