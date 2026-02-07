import axios from "axios"
import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { BiTrash } from "react-icons/bi"
import { BsPencilSquare } from "react-icons/bs"
import EditSurgery from "./Edits/EditSurgery"
import PopSurgery from "./Pops/PopSurgery"

const DashSurgery = () => {
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
            name: "Reason",
            selector: (row) => row.reason,
            wrap: true,
        },
        {
            name: "Nature",
            selector: (row) => row.nature,
        },
        {
            name: "Duration",
            selector: (row) => row.duration,
        },

        {
            name: "Recovery Time",
            selector: (row) => row.recoveryTime,
        },

        {
            name: "Technology",
            selector: (row) => row.technology,
        },
        {
            name: "Cost",
            selector: (row) => row.cost,
        },
        {
            name: "Effects",
            selector: (row) => row.effects,
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
            const surgerys = await axios.delete(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/surgery/${deleteId}`
            )
            console.log(surgerys.data)
            setDeleteId(null)
            setDeleteTitle(null)
            setRefresh((e) => !e)
        } catch (e) {
            console.log(e)
        }
    }

    const [surgerysData, setSurgerysData] = useState()
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

    const fetchSurgerys = async () => {
        try {
            const surgerys = await axios.get(
                "http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/surgery"
            )
            setSurgerysData(surgerys.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchSurgerys()
    }, [refresh])

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="block ml-auto px-6 py-2 bg-violet-800 text-white font-semibold rounded-md"
            >
                Add Surgery
            </button>
            {surgerysData && (
                <DataTable
                    columns={columns}
                    data={surgerysData}
                    className="mt-10"
                    customStyles={customStyles}
                />
            )}
            {showModal && (
                <PopSurgery
                    setRefresh={setRefresh}
                    setShowModal={setShowModal}
                />
            )}
            {editId && (
                <EditSurgery
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

export default DashSurgery
