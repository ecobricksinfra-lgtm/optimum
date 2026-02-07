import React, { useState, useEffect } from "react"
import DOCTORS_IMG from "../../assets/doctors.png"
import PATIENT_IMG from "../../assets/patient2.png"
import HOSPITAL_IMG from "../../assets/hospital2.png"
import CITY_IMG from "../../assets/city.jpeg"

const Section3 = ({ data }) => {
    return (
        <div id="sec-3" className="bg-white from-sky-300  to-sky-500 py-16">
            <h1 className="font-semibold text-center lg:text-left text-sec text-3xl underline-offset-8 underline decoration-pri px-6">
                Optimum Care in Numbers
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-max mx-auto gap-x-6 justify-around items-center mt-8 bg-gradient-to-br from-sky-300 to-sky-500 p-12 rounded-lg">
                <Card
                    finalCnt={data?.number1}
                    initialCnt={20}
                    img={PATIENT_IMG}
                    title={data?.number1_sub}
                />
                <Card
                    finalCnt={Number(data?.number2)}
                    initialCnt={150}
                    img={DOCTORS_IMG}
                    title={data?.number2_sub}
                />
                <Card
                    finalCnt={Number(data?.number3)}
                    initialCnt={80}
                    img={HOSPITAL_IMG}
                    title={data?.number3_sub}
                />
                <Card
                    finalCnt={Number(data?.number4)}
                    initialCnt={0}
                    img={CITY_IMG}
                    title={data?.number4_sub}
                />
            </div>
        </div>
    )
}

export default Section3

export const Card = ({ title, initialCnt, finalCnt, img }) => {
    const [count, setCount] = useState(0)

    const handleScroll = () => {
        const cardPosition = document
            .getElementById("sec-3")
            .getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (cardPosition < windowHeight) {
            let i = initialCnt
            const intervalId = setInterval(() => {
                if (i < finalCnt + 1) {
                    setCount(i)
                    i++
                } else {
                    clearInterval(intervalId)
                }
            }, 1)
            window.removeEventListener("scroll", handleScroll)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div
            id="card"
            className="bg-gradient-to-br from-white to-white px-3 border-4 border-pri rounded-lg shadow-lg overflow-hidden mb-4 text-center  pt-6 "
        >
            <img src={img} alt="Card" className="w-[16rem] h-[10rem] " />
            <div className="p-4">
                <p className="text-4xl text-gray-800 font-bold">{`${finalCnt} +`}</p>

                <h2 className="text-2xl text-gray-800 font-semibold mb-2">
                    {title}
                </h2>
            </div>
        </div>
    )
}
