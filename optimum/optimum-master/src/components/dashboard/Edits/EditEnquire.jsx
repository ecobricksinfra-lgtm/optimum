import { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useForm } from "react-hook-form"
import axios from "axios"

const EditEnquire = ({ editId, setEditId, setRefresh }) => {
    const { register, handleSubmit, setValue } = useForm()
    const [data, setData] = useState({})

    const onSubmit = async (data) => {
        try {
            const res = await axios.put(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/enquire/${editId}`,
                data
            )
            setEditId(null)
            res && setRefresh((e) => !e)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (data) {
            Object.keys(data).map((key) => setValue(key, data[key]))
        }
    }, [data])

    const fetchEnquire = async () => {
        try {
            const enquires = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/enquire/${editId}`
            )
            console.log(enquires.data)
            setData(enquires.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchEnquire()
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
                        Edit Enquire
                    </h3>
                </div>
                {/* Form */}
                <form className="bg-white rounded-md w-full lg:grid-cols-2 grid-cols-1 grid gap-4">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                        id="name"
                        readOnly
                        type="text"
                        {...register("name")}
                        placeholder="Name"
                    />

                    <input
                        {...register("mobileNumber")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        readOnly
                        id="name"
                        type="text"
                        placeholder="Mobile Number"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        readOnly
                        id="name"
                        type="text"
                        placeholder="City"
                        {...register("city")}
                    />
                    <input
                        {...register("treatment")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        readOnly
                        id="name"
                        type="text"
                        placeholder="Treatment"
                    />
                    <input
                        {...register("appointmentDate")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="date"
                        placeholder="Appointment Date"
                    />
                    <select
                        {...register("doctor")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                    >
                        <option value="">-- Select Doctor --</option>
                        {[].map((dis) => (
                            <option value={dis.toLowerCase()}>{dis}</option>
                        ))}
                    </select>
                </form>

                {/* Button */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        onClick={handleSubmit(onSubmit)}
                        className=" bg-sky-500 w-full  hover:-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline 
                             "
                        type="button"
                    >
                        Update Enquire
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditEnquire
