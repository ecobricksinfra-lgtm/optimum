import React, { useReducer, useState } from "react"
import { IoMdHeartEmpty } from "react-icons/io"
import { FaRegComment } from "react-icons/fa"
import BLOG_AVATAR from "../../assets/blog-3d.png"
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md"
import useScreen from "../../hooks/useScreen"

const blogs = [
    {
        image: "https://i0.wp.com/harilaserclinics.com/wp-content/uploads/2023/03/Piles-Surgery-What-to-Expect-and-How-to-Recover.jpg?fit=670%2C500&ssl=1",
        title: "Piles Surgery: Patient guide",
        disease: "Piles",
        date: "May 23,2022",
        description:
            "Piles, also known as haemorrhoids, are swollen veins in the rectum and anus that can cause discomfort and pain",
    },
    {
        image: "https://psrihospital.com/wp-content/uploads/2022/08/know-about-the-best-ways-of-kidney-stone-removal.jpg",
        title: "Kidney Stones: Causes, Prevention, and Treatment         ",
        disease: "Kidney Stones",
        date: "May 23,2020",
        description:
            "Stone diseases have been impacting human life since ancient times, there are incidences where kidney stones are found to occur in mummies of ancient Egypt",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-19LlmEiHiDUMw26kubNHG3PQ9LNE9JP8g&usqp=CAU",
        title: "Hernia- Meaning, symptoms, causes, and treatments    ",
        disease: "Hernia",
        date: "May 23,2020",
        description:
            "Hernia is  a condition where an internal organ or tissue pushes through a weak spot in the muscle or connective tissue that normally holds it in place. ",
    },
]

const Section7 = () => {
    const reducer = (state, action) => {
        switch (action) {
            case "inc":
                return state === 1 ? state : state + 1
            case "dec":
                return state === 0 ? 0 : state - 1
        }
    }
    const [sliderIndex, dispatch] = useReducer(reducer, 0)
    const { slidingUnit } = useScreen()

    return (
        <section className="px-6 py-12 overflow-hidden relative bg-white">
            <div className="flex justify-center lg:justify-between">
                <h1 className="font-semibold text-sec text-3xl underline-offset-8 underline decoration-pri px-6 text-center lg:text-left">
                    Latest Blogs
                </h1>
                {/* SLider Btn */}
                <div className="hidden lg:block">
                    <button onClick={() => dispatch("dec")}>
                        <MdOutlineArrowBackIos className="text-sec  text-2xl" />
                    </button>
                    <button onClick={() => dispatch("inc")}>
                        <MdArrowForwardIos className="text-sec  text-2xl" />
                    </button>
                </div>
            </div>

            <div
                style={{
                    transform: `translateX(${sliderIndex * slidingUnit}vw)`,
                }}
                className="flex mt-8 gap-x-8 transition-all"
            >
                {blogs.map((blog, i) => (
                    <Card {...blog} key={i} />
                ))}
            </div>
            {/* SLider Btn - mob */}
            <div className=" mt-8 flex gap-x-10 justify-center lg:hidden">
                <button onClick={() => dispatch("dec")}>
                    <MdOutlineArrowBackIos className="text-sec  text-2xl" />
                </button>
                <button onClick={() => dispatch("inc")}>
                    <MdArrowForwardIos className="text-sec  text-2xl" />
                </button>
            </div>
        </section>
    )
}

export default Section7

export const Card = ({ image, disease, title, description, date }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden shadow-black/40  w-full  shrink-0  lg:w-[30rem]">
            <img
                className="w-full h-48 object-cover object-center"
                src={image}
                alt={title}
            />
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-white font-semibold bg-pri px-2 rounded-md w-max text-sm uppercase">
                    {disease}
                </h2>
                <h3 className="text-gray-900 font-semibold text-xl ">
                    {title}
                </h3>
                <p className="text-sm text-gray-700 font-semibold tracking-wider">
                    {date}
                </p>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    )
}
