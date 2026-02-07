import React, { useState, useEffect } from "react"
import DataTable from "react-data-table-component"
import { BiTrash } from "react-icons/bi"
import { BsPencilSquare } from "react-icons/bs"
import EditPatient from "./Edits/EditPatient"
import PopPatient from "./Pops/PopPatient"
import axios from "axios"

const DashPatients = () => {
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
            selector: (row) => row.email,
        },
        {
            name: "Address",
            selector: (row) => row.address,
        },
        {
            name: "City",
            selector: (row) => row.city,
        },

        {
            name: "Profile Pic (112 x 112)",
            selector: (row) => row.profilePic,
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
            const patients = await axios.delete(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/patient/${deleteId}`
            )
            console.log(patients.data)
            setDeleteId(null)
            setDeleteTitle(null)
            setRefresh((e) => !e)
        } catch (e) {
            console.log(e)
        }
    }

    const [patientsData, setPatientsData] = useState()
    const [showModal, setShowModal] = useState(false)
    const [editId, setEditId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [deleteTitle, setDeleteTitle] = useState("")
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

    const fetchPatients = async () => {
        try {
            const patients = await axios.get(
                "http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/patient"
            )
            setPatientsData(patients.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPatients()
    }, [refresh])

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="block ml-auto px-6 py-2 bg-violet-800 text-white font-semibold rounded-md"
            >
                Add Patient
            </button>
            {patientsData && (
                <DataTable
                    columns={columns}
                    data={patientsData}
                    className="mt-10"
                    customStyles={customStyles}
                />
            )}
            {showModal && (
                <PopPatient
                    setRefresh={setRefresh}
                    setShowModal={setShowModal}
                />
            )}
            {editId && (
                <EditPatient
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
        </>
    )
}

export default DashPatients
