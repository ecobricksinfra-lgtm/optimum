import React from "react"
import { FaStar } from "react-icons/fa"
import { useParams } from "react-router-dom"

const patient = {
    photoSrc: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "John Doe",
    disease: "Piles",
    rating: 4.5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat euismod justo, eget vehicula nibh ultricies id. Nulla facilisi.",
}

const Patient = () => {
    const { treatment } = useParams()

    return (
        <section className="px-4 lg:px-10 py-16 flex flex-col gap-y-8">
            <h1 className="text-center text-4xl text-pri font-semibold capitalize underline underline-offset-8 decoration-sec">{`Our Patient Love Us`}</h1>
            <div className="flex  flex-col  lg:flex-row gap-8 justify-around mt-4">
                <Card {...patient} treatment={treatment} />
                <Card {...patient} treatment={treatment} />
                <Card {...patient} treatment={treatment} />
            </div>
        </section>
    )
}

export default Patient

export const Card = ({ photoSrc, name, rating, review, treatment }) => {
    return (
        <div className="bg-white  border-2 border-pri rounded-lg shadow-md shadow-black/40 p-6 flex  ">
            <div className="">
                <div className="flex items-center mb-4 justify-between">
                    <div className="flex flex-col gap-y-1">
                        <h3 className="font-bold text-lg">{name}</h3>
                        <p className="text-gray-600 capitalize">{treatment}</p>
                        <div className="flex items-center ">
                            <FaStar className="text-yellow-500 mr-1" />
                            <span className="font-semibold">{rating}</span>
                        </div>
                    </div>
                    <img
                        className=" w-24 h-24 rounded-lg object-cover mr-4 brder-2 border-gray-600"
                        src={photoSrc}
                        alt={`${name}'s profile`}
                    />
                </div>

                <p className="text-gray-600 mt-3">{review}</p>
            </div>
        </div>
    )
}
