import React, { useEffect, useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { faqs } from "../home/FAQs"
import axios from "axios"

const Faqs = ({ selectedFAQ }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null)
        } else {
            setActiveIndex(index)
        }
    }

    const [faqsData, setFaqsData] = useState([])
    const [filteredfaq, setFilteredFaq] = useState([])

    const fetchFaqs = async () => {
        try {
            const res = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/faq`
            )
            setFaqsData(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (selectedFAQ) {
            const filter = faqsData.filter(
                (faq) => faq.category.toLowerCase() == selectedFAQ.toLowerCase()
            )
            setFilteredFaq(filter)
        } else {
            setFilteredFaq(faqsData)
        }
    }, [selectedFAQ])

    useEffect(() => {
        fetchFaqs()
    }, [])

    console.log(filteredfaq)

    return (
        <div id="faqs" className="px-3 lg:px-10 w-full">
            <h1 className="text-center text-3xl leading-9 lg:text-4xl font-semibold text-sec ">
                {selectedFAQ ? `${selectedFAQ} Related FAQs` : "FAQs"}
            </h1>
            <div className="my-10">
                {filteredfaq.map((faq, index) => (
                    <div
                        key={index}
                        className=" rounded-lg p-4 mb-4 cursor-pointer bg-white border-2 border-sec "
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
                                <p className="text-gray-600 mt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faqs
