import axios from "axios"
import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { BiTrash } from "react-icons/bi"
import { BsPencilSquare } from "react-icons/bs"
import PopTreatment from "./Pops/PopTreatment"
import EditTreatment from "./Edits/EditTreatment"

const DashTreatment = () => {
    const columns = [
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Department",
            selector: (row) => row.department,
        },
        {
            name: "Subcategory",
            selector: (row) => row.subcategory,
        },
        {
            name: "Description",
            selector: (row) => row.description,
            wrap: true,
        },
        {
            name: "Image (112 x 112)",
            selector: (row) => row.image,
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
            const treatments = await axios.delete(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/treatment/${deleteId}`
            )
            console.log(treatments.data)
            setDeleteId(null)
            setDeleteTitle(null)
            setRefresh((e) => !e)
        } catch (e) {
            console.log(e)
        }
    }

    const [treatmentsData, setTreatmentsData] = useState()
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

    const fetchTreatments = async () => {
        try {
            const treatments = await axios.get(
                "http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/treatment"
            )
            setTreatmentsData(treatments.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchTreatments()
    }, [refresh])

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="block ml-auto px-6 py-2 bg-violet-800 text-white font-semibold rounded-md"
            >
                Add Treatment
            </button>
            {treatmentsData && (
                <DataTable
                    columns={columns}
                    data={treatmentsData}
                    className="mt-10"
                    customStyles={customStyles}
                />
            )}
            {showModal && (
                <PopTreatment
                    setRefresh={setRefresh}
                    setShowModal={setShowModal}
                />
            )}
            {editId && (
                <EditTreatment
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

export default DashTreatment
