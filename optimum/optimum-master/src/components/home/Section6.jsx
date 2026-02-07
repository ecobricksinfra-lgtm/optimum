import React, { useReducer, useState } from "react"
import { FaStar } from "react-icons/fa"
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md"
import PATIENT_AVATAR from "../../assets/patient-avatar-3d.png"
import useScreen from "../../hooks/useScreen"

const patient = [
    {
        name: "Dhruva Prasad",
        rating: 5,
        photoSrc: "https://randomuser.me/api/portraits/men/10.jpg",
        review: "Thank you Optimum Health for getting my kidney stones out. Before surgery I was so anxious about the procedure and the results, because I was thinking I would get a lot of stitches but their advanced minimally invasive surgery procedure is really wonderful.",
        disease: "Kidney stones",
    },
    {
        name: "Ramshad",
        rating: 4,
        photoSrc: "https://randomuser.me/api/portraits/men/10.jpg",
        review: "I had gallstone surgery 5 days ago. My experience at Optimum Health has been amazing. From the professional staff to my procedure it all went smoothly. I am not feeling that pain now.",
        disease: "Gallstone surgery",
    },
    {
        name: "Indumathi",
        rating: 5,
        photoSrc: "https://randomuser.me/api/portraits/men/10.jpg",
        review: "Varicose Veins laser treatment\nMy expectations are fulfilled. Optimum Health has got such supportive staff and Dr. … blew me away and I am so happy with my painless transformation. I have waited years to feel good in my legs.",
        disease: "Varicose Veins",
    },
    {
        name: "Teertha",
        rating: 5,
        photoSrc: "https://randomuser.me/api/portraits/men/10.jpg",
        review: "I highly recommend Optimum Health for anyone who is looking for varicose veins treatment. Their advanced laser technology corrected all my varicose veins within 45 minutes. Now I can wear my dresses without stockings.",
        disease: "Varicose Veins",
    },
    {
        name: "Pawan Bhardwaj",
        rating: 4,
        photoSrc: "https://randomuser.me/api/portraits/men/10.jpg",
        review: "I had zone 1 gynecomastia fixed last week by the brilliant Dr Rajkumar, the whole went smooth as the Optimum Health team did an outstanding job.",
        disease: "Gynecomastia",
    },
    {
        name: "Rahul Verma",
        rating: 5,
        photoSrc: "https://randomuser.me/api/portraits/men/10.jpg",
        review: "Optimum Health returned my confidence. I was getting awkward reactions due to my enlarged breasts, but the Dr. .. and the gynecomastia team at Optimum Health provided an incredible change and carried the whole gynecomastia surgery procedure smoothly.",
        disease: "Gynecomastia",
    },
    {
        name: "S. Gopalakrishnan",
        rating: 5,
        photoSrc: "https://randomuser.me/api/portraits/men/10.jpg",
        review: "There are not enough positive words to describe Dr. … and Optimum Health team. Their professionalism, expertise and unmatched skills gave beautiful results after my gynecomastia surgery. I am completely satisfied with their work and I love my results.",
        disease: "Gynecomastia",
    },
    {
        name: "Parvati Bisht",
        rating: 4,
        photoSrc: "https://randomuser.me/api/portraits/men/10.jpg",
        review: "Having struggled with a hernia for years, I finally decided to undergo surgery. It was the best decision I ever made! Thanks to the skilled surgeons and modern techniques, my hernia was successfully repaired, and I feel like a new person. I am now pain-free and able to enjoy life to the fullest.",
        disease: "Hernia",
    },
    {
        name: "Hansi Tyagi",
        rating: 5,
        photoSrc: "https://randomuser.me/api/portraits/men/10.jpg",
        review: "Living with a hernia was incredibly uncomfortable and limited my daily activities. But thanks to the compassionate care and expertise of the Optimum Health team, I underwent a successful hernia repair procedure. I am amazed at the speed of my recovery and grateful to be back to my normal routine. If you're suffering from a hernia, don't hesitate to seek treatment - it can truly change your life.",
        disease: "Hernia",
    },
]

const Section6 = () => {
    const reducer = (state, action) => {
        switch (action) {
            case "inc":
                return state === Math.floor(patient.length / 2)
                    ? state
                    : state + 1
            case "dec":
                return state === 0 ? 0 : state - 1
        }
    }
    const [sliderIndex, dispatch] = useReducer(reducer, 0)

    const { slidingUnit } = useScreen()

    return (
        <section className="px-6 py-20 overflow-hidden relative bg-white from-sky-400  to-sky-600">
            <div className="flex justify-center  lg:justify-between  ">
                <h1 className="font-semibold text-pri text-3xl underline-offset-8 underline decoration-sec px-6 text-center lg:text-left">
                    Patient Diaries
                </h1>
                {/* SLider Btn -lap*/}
                <div className="hidden lg:block">
                    <button onClick={() => dispatch("dec")}>
                        <MdOutlineArrowBackIos className="text-pri  text-2xl" />
                    </button>
                    <button onClick={() => dispatch("inc")}>
                        <MdArrowForwardIos className="text-pri  text-2xl" />
                    </button>
                </div>
            </div>
            {/* Doc Img */}
            {/* <img
                src={PATIENT_AVATAR}
                className="absolute top-0 w-32 right-1/4 hidden lg:block"
                alt=""
            /> */}

            <div
                style={{
                    transform: `translateX(${sliderIndex * slidingUnit}vw)`,
                }}
                className="flex mt-8 gap-x-8 transition-all"
            >
                {patient.map((pat) => (
                    <Card {...pat} />
                ))}
            </div>
            {/* SLider Btn - mob */}
            <div className=" mt-4 flex gap-x-10 justify-center lg:hidden">
                <button onClick={() => dispatch("dec")}>
                    <MdOutlineArrowBackIos className="text-white  text-2xl" />
                </button>
                <button onClick={() => dispatch("inc")}>
                    <MdArrowForwardIos className="text-white  text-2xl" />
                </button>
            </div>
        </section>
    )
}

export default Section6

export const Card = ({ photoSrc, name, disease, rating, review }) => {
    return (
        <div className="bg-gray-100  border-2 border-violet-600 rounded-lg shadow-md shadow-black/40 p-6 flex w-full lg:w-[30rem] shrink-0 ">
            <div className="">
                <div className="flex items-center mb-4">
                    <div>
                        <h3 className="font-bold text-lg">{name}</h3>
                        <p className="text-gray-600">{disease}</p>
                    </div>
                </div>
                <div className="flex items-center mr-2">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="font-semibold">{rating}</span>
                </div>
                <p className="text-gray-600 mt-3">{review}</p>
            </div>

            {/* <img
                className="w-40 lg:h-full rounded-lg object-cover mr-4 border-2 border-gray-600"
                src={photoSrc}
                alt={`${name}'s profile`}
            /> */}
        </div>
    )
}
