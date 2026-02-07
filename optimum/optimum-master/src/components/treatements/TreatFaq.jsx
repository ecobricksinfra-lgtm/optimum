import React, { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { useParams } from "react-router-dom"

const TreatFaq = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null)
        } else {
            setActiveIndex(index)
        }
    }

    const { treatment } = useParams()

    const faqs = [
        {
            id: 1,
            question: "What is Lorem Ipsum?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            id: 2,
            question: "Why do we use it?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
    ]

    return (
        <div className="w-full flex flex-col justify-center bg-gradient-to-br from-violet-500 to-violet-500 via-violet-800 py-16 px-10 text-center">
            <h1 className="font-semibold text-center lg:text-left text-white text-3xl underline-offset-8 underline decoration-sec  mb-8 capitalize lg:w-max mx-auto">
                {`Frequently Asked Questions About ${treatment} Surgery `}
            </h1>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className=" rounded-lg p-4 mb-4 cursor-pointer bg-white border-4 border-sec mt-4"
                    onClick={() => toggleAccordion(index)}
                    ref={parent}
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">
                            {faq.question}
                        </h3>
                        {activeIndex === index ? (
                            <IoIosArrowUp className="text-2xl" />
                        ) : (
                            <IoIosArrowDown className="text-2xl" />
                        )}
                    </div>

                    <div
                        aria-hidden={activeIndex === index ? false : true}
                        className={` acc-content
                           
                        `}
                    >
                        <div>
                            <p className="text-gray-600 mt-4">{faq.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TreatFaq
