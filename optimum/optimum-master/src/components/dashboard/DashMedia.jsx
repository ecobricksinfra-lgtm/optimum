import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import PopMedia from "./Pops/PopMedia"
import axios from "axios"
import { BsPencilSquare } from "react-icons/bs"
import { BiTrash } from "react-icons/bi"
import EditMedia from "./Edits/EditMedia"

const DashMedia = () => {
    const columns = [
        {
            name: "Published By",
            selector: (row) => row.publish,
        },
        {
            name: "Title",
            selector: (row) => row.title,
        },
        {
            name: "Subtitle",
            selector: (row) => row.subtitle,
        },
        {
            name: "date",
            selector: (row) => row.date,
        },

        {
            name: "Images (172 x 192)",
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
            const medias = await axios.delete(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/media/${deleteId}`
            )
            console.log(medias.data)
            setDeleteId(null)
            setDeleteTitle(null)
            setRefresh((e) => !e)
        } catch (e) {
            console.log(e)
        }
    }

    const [mediasData, setMediasData] = useState()
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

    const fetchMedias = async () => {
        try {
            const medias = await axios.get(
                "http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/media"
            )
            setMediasData(medias.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchMedias()
    }, [refresh])

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="block ml-auto px-6 py-2 bg-violet-800 text-white font-semibold rounded-md"
            >
                Add Media
            </button>
            {mediasData && (
                <DataTable
                    columns={columns}
                    data={mediasData}
                    className="mt-10"
                    customStyles={customStyles}
                />
            )}
            {showModal && (
                <PopMedia setRefresh={setRefresh} setShowModal={setShowModal} />
            )}
            {editId && (
                <EditMedia
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

export default DashMedia
