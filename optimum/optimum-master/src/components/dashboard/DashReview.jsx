import axios from "axios"
import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { BiTrash } from "react-icons/bi"
import { BsPencilSquare } from "react-icons/bs"
import PopReview from "./Pops/PopReview"
import EditReview from "./Edits/EditReview"

const DashReview = () => {
    const columns = [
        {
            name: "Treatment",
            selector: (row) => row.treatment,
        },
        {
            name: "Surgery",
            selector: (row) => row.surgery,
        },
        {
            name: "Clinic",
            selector: (row) => row.clinic,
        },
        {
            name: "Rating",
            selector: (row) => row.rating,
        },
        {
            name: "Image (112 x 112)",
            selector: (row) => row.image,
            wrap: true,
        },
        {
            name: "Comments",
            selector: (row) => row.comments,
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
            const reviews = await axios.delete(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/review/${deleteId}`
            )
            console.log(reviews.data)
            setDeleteId(null)
            setDeleteTitle(null)
            setRefresh((e) => !e)
        } catch (e) {
            console.log(e)
        }
    }

    const [reviewsData, setReviewsData] = useState()
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

    const fetchReviews = async () => {
        try {
            const reviews = await axios.get(
                "http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/review"
            )
            setReviewsData(reviews.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchReviews()
    }, [refresh])

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="block ml-auto px-6 py-2 bg-violet-800 text-white font-semibold rounded-md"
            >
                Add Review
            </button>
            {reviewsData && (
                <DataTable
                    columns={columns}
                    data={reviewsData}
                    className="mt-10"
                    customStyles={customStyles}
                />
            )}
            {showModal && (
                <PopReview
                    setRefresh={setRefresh}
                    setShowModal={setShowModal}
                />
            )}
            {editId && (
                <EditReview
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

export default DashReview
