import axios from "axios"
import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { BiTrash } from "react-icons/bi"
import { BsPencilSquare } from "react-icons/bs"
// import PopEnquire from "./Pops/PopEnquire"
import EditEnquire from "./Edits/EditEnquire"

const DashEnquire = () => {
    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Mobile Number",
            selector: (row) => row.mobileNumber,
        },
        {
            name: "Email",
            selector: (row) => row.useremail,
        },
        {
            name: "City",
            selector: (row) => row.city,
        },
        {
            name: "Treatment",
            selector: (row) => row.treatment,
        },
        {
            name: "Appointment Date",
            selector: (row) => row.appointmentDate,
        },
        {
            name: "Doctor",
            selector: (row) => row.doctor,
            wrap: true,
        },

        {
            name: "Actions",
            cell: (row, index) => {
                return (
                    <div className="flex gap-x-2 items-center ">
                        <BsPencilSquare
                            onClick={() => setEditId(row._id)}
                            className="text-green-500 text-lg cursor-pointer"
                        />
                        <BiTrash
                            onClick={() => {
                                setDeleteTitle(row.name)
                                setDeleteId(row._id)
                                setDeleteModal("enquire")
                            }}
                            className="text-red-500 text-lg cursor-pointer "
                        />
                    </div>
                )
            },
        },
    ]

    const docColumns = [
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Mobile Number",
            selector: (row) => row.mobileNumber,
        },
        {
            name: "City",
            selector: (row) => row.city,
        },
        {
            name: "Email",
            selector: (row) => row.email,
        },
        {
            name: "Specialization",
            selector: (row) => row.specialization,
        },
        {
            name: "Degree",
            selector: (row) => row.degree,
            wrap: true,
        },
        {
            name: "Exp After MBBS ",
            selector: (row) => row.exp,
            wrap: true,
        },
        {
            name: "Exp After PG ",
            selector: (row) => row.exp2,
            wrap: true,
        },

        {
            name: "Actions",
            cell: (row, index) => {
                return (
                    <div className="flex gap-x-2 items-center ">
                        <BiTrash
                            onClick={() => {
                                setDeleteTitle(row.name)
                                setDeleteId(row._id)
                                setDeleteModal("enquireDoc")
                            }}
                            className="text-red-500 text-lg cursor-pointer "
                        />
                    </div>
                )
            },
        },
    ]

    const handleDelete = async () => {
        try {
            const enquires = await axios.delete(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/${deleteModal}/${deleteId}`
            )
            setDeleteId(null)
            setDeleteTitle(null)
            setDeleteModal("")
            setRefresh((e) => !e)
        } catch (e) {
            console.log(e)
        }
    }

    const [enquiresData, setEnquiresData] = useState()
    const [enquiresDocData, setEnquiresDocData] = useState()
    const [showModal, setShowModal] = useState(false)
    const [editId, setEditId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [deleteTitle, setDeleteTitle] = useState("")
    const [deleteModal, setDeleteModal] = useState("")
    const [refresh, setRefresh] = useState(false)

    const customStyles = {
        rows: {
            style: {
                minHeight: "72px",
            },
        },
        headCells: {
            style: {
                paddingLeft: "8px", // override the cell padding for head cells
                paddingRight: "8px",
                backgroundColor: "#5c35b7",
                color: "white",
                fontWeight: 600,
            },
        },
        cells: {
            style: {
                paddingLeft: "8px", // override the cell padding for data cells
                paddingRight: "8px",
            },
        },
    }

    const fetchEnquires = async () => {
        try {
            const enquires = await axios.get(
                "http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/enquire"
            )
            setEnquiresData(enquires.data)
        } catch (e) {
            console.log(e)
        }
    }

    const fetchDocEnquires = async () => {
        try {
            const enquires = await axios.get(
                "http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/enquireDoc"
            )
            setEnquiresDocData(enquires.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchEnquires()
        fetchDocEnquires()
    }, [refresh])

    return (
        <>
            <h1 className="text-pri font-semibold text-xl ">
                Call Us Enquiries
            </h1>
            {enquiresData && (
                <DataTable
                    columns={columns}
                    data={enquiresData}
                    className="mt-10"
                    customStyles={customStyles}
                />
            )}

            {editId && (
                <EditEnquire
                    setRefresh={setRefresh}
                    editId={editId}
                    setEditId={setEditId}
                />
            )}
            {deleteTitle && (
                <div className="fixed inset-0 z-50 flex bg-black/20 items-center justify-center backdrop-blur-sm  w-full overflow-hidden font-pop">
                    <div className="p-3 border-2 border-pri bg-white rounded-md w-max">
                        <h1 className="text-lg">{`Are You Sure? You Want To Delete ${deleteTitle}`}</h1>
                        <div className="flex justify-around mt-4">
                            <button
                                onClick={handleDelete}
                                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md"
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => setDeleteTitle("")}
                                className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-md"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <h1 className="text-pri font-semibold text-xl ">
                Doctors Enquiries
            </h1>
            {enquiresDocData && (
                <DataTable
                    columns={docColumns}
                    data={enquiresDocData}
                    className="mt-10"
                    customStyles={customStyles}
                />
            )}
        </>
    )
}

export default DashEnquire
