import { useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useForm } from "react-hook-form"
import axios from "axios"
import { allDiseases } from "../../header/DiseaseModal"

const EditAppointment = ({ editId, setEditId, setRefresh }) => {
    const { register, handleSubmit, setValue } = useForm()
    const [data, setData] = useState({})

    const onSubmit = async (data) => {
        try {
            const res = await axios.put(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/appointment/${editId}`,
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

    const fetchAppointment = async () => {
        try {
            const appointments = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/appointment/${editId}`
            )
            console.log(appointments.data)
            setData(appointments.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchAppointment()
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
                        Edit Appointment
                    </h3>
                </div>
                {/* Form */}
                <form className="bg-white rounded-md w-full lg:grid-cols-2 grid-cols-1 grid gap-4">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                        id="name"
                        type="text"
                        {...register("clinicId")}
                        placeholder="Clinic Id"
                    />

                    <input
                        {...register("patientId")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="Patient Id"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="Doctor Id"
                        {...register("doctorId")}
                    />
                    <input
                        {...register("date")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="date"
                        placeholder="Date"
                    />
                    <input
                        {...register("duration")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="Duration"
                    />
                    <input
                        {...register("notes")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="Notes"
                    />

                    <input
                        {...register("records")}
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                                 "
                        id="name"
                        type="text"
                        placeholder="Records"
                    />
                </form>

                {/* Button */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        onClick={handleSubmit(onSubmit)}
                        className=" bg-sky-500 w-full  hover:-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline 
                             "
                        type="button"
                    >
                        Update Appointment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditAppointment
