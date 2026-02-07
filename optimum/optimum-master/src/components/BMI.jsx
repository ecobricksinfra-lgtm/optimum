import axios from "axios"
import React, { useEffect, useState } from "react"

const BMI = () => {
    const [gender, setGender] = useState("male")
    const [age, setAge] = useState(0)
    const [weight, setWeight] = useState("")
    const [heightInches, setHeightInches] = useState("")
    const [bmiPer, setBmiPer] = useState(0)
    const [bmiCat, setBmiCat] = useState("")

    const [data, setData] = useState()

    const fetchOurDocs = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/ourDocs`
            )
            setData(data[0])
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchOurDocs()
    }, [])

    const calculateBMI = () => {
        const weightKg = parseFloat(weight)
        const heightIn = parseFloat(heightInches)

        // Convert height from inches to meters
        const heightM = heightInches * 0.01

        // Calculate BMI
        const bmi = weight / (heightM * heightM)

        return bmi.toFixed(0) // Return BMI with 2 decimal places
    }

    const getBmiCategory = () => {
        const bmi = calculateBMI()
        let res = ""

        if (bmi < 18.5) {
            res = "Underweight"
        } else if (bmi >= 18.5 && bmi < 25) {
            res = "Normal"
        } else if (bmi >= 25 && bmi < 30) {
            res = "Overweight"
        } else if (bmi >= 30) {
            res = "Obesity"
        }

        setBmiCat(res)

        return res
    }

    return (
        <div className="px-6 lg:px-16 mx-auto min-h-[80vh] py-8 font-pop">
            <h1 className="text-4xl font-semibold mb-10 text-pri text-center">
                Body Mass Index (BMI) Calculator
            </h1>

            <p className="mb-8 text-gray-800">{data?.bmi}</p>

            <div className="flex  flex-col md:flex-row gap-x-20">
                {/* Form */}
                <div className="w-full flex flex-col gap-y-8 md:w-1/2 bg-white border-2 rounded-lg p-6 shadow-lg shadow-black/20  border-pri">
                    <h1 className="text-2xl font-bold  text-sec text-center">
                        BMI Calculator
                    </h1>
                    {/* Gender */}
                    <div className="flex gap-x-4">
                        <button
                            onClick={() => setGender("male")}
                            className={`px-6 py-2 border-2  rounded-md transition-all ${
                                gender === "male"
                                    ? "bg-pri text-white border-sec"
                                    : "bg-violet-100"
                            } `}
                        >
                            Male
                        </button>
                        <button
                            onClick={() => setGender("female")}
                            className={`px-6 py-2 border-2  rounded-md transition-all ${
                                gender === "female"
                                    ? "bg-pri text-white border-sec"
                                    : "bg-violet-100"
                            } `}
                        >
                            Female
                        </button>
                    </div>
                    {/* Weight */}
                    <div className="flex gap-x-6">
                        <h1 className=" font-semibold">Weight:</h1>
                        <input
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            type="number"
                            className="bg-transparent border-b-2 border-pri outline-none w-20 text-center"
                            min={0}
                        />
                        <p>Kg</p>
                    </div>
                    {/* height */}
                    <div className="flex gap-x-6">
                        <h1 className=" font-semibold">Height:</h1>
                        <input
                            value={heightInches}
                            onChange={(e) => setHeightInches(e.target.value)}
                            type="number"
                            className="bg-transparent border-b-2 border-pri outline-none w-20 text-center"
                            min={0}
                        />
                        <p>cm</p>
                    </div>
                    {/* Age*/}
                    <div className="flex gap-x-6 items-center">
                        <h1 className=" font-semibold">Age:</h1>
                        <input
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            type="range"
                            className="bg-pri  text-center"
                            min={0}
                            max={120}
                        />
                        <p>{age}</p>
                    </div>

                    <button
                        className="bg-gradient-to-br from-violet-400 to-violet-600 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-95 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => {
                            calculateBMI()
                            getBmiCategory()
                        }}
                    >
                        Calculate BMI
                    </button>
                </div>

                {/* Progress bar component */}
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                    <div className="bg-gray-200 rounded-lg h-8 overflow-hidden">
                        <div
                            className={`h-full transition-all ${
                                bmiCat === "Underweight"
                                    ? "bg-blue-500"
                                    : bmiCat === "Normal"
                                    ? "bg-green-500"
                                    : bmiCat === "Overweight"
                                    ? "bg-yellow-500"
                                    : bmiCat === "Obesity"
                                    ? "bg-red-500"
                                    : "bg-violet-50"
                            }`}
                            style={{
                                width: `${
                                    bmiCat === "Underweight"
                                        ? "25%"
                                        : bmiCat === "Normal"
                                        ? "45%"
                                        : bmiCat === "Overweight"
                                        ? "70%"
                                        : bmiCat === "Obesity"
                                        ? "95%"
                                        : "0%"
                                }`,
                            }}
                        />
                    </div>

                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                        <span
                            className={`${
                                bmiCat === "Underweight" &&
                                "text- ont-semibold "
                            }`}
                        >
                            Underweight
                        </span>
                        <span
                            className={`${
                                bmiCat === "Normal" &&
                                "text-black font-semibold "
                            }`}
                        >
                            Normal
                        </span>
                        <span
                            className={`${
                                bmiCat === "Overweight" &&
                                "text-black font-semibold "
                            }`}
                        >
                            Overweight
                        </span>
                        <span
                            className={`${
                                bmiCat === "Obesity" &&
                                "text-black font-semibold "
                            }`}
                        >
                            Obesity
                        </span>
                    </div>

                    {/* result */}
                    {bmiCat && (
                        <h1
                            className={`mt-10 text-center px-6 py-2 text-lg rounded-md font-semibold text-white  ${
                                bmiCat === "Underweight"
                                    ? "bg-blue-500"
                                    : bmiCat === "Normal"
                                    ? "bg-green-500"
                                    : bmiCat === "Overweight"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                            } `}
                        >
                            {bmiCat}
                        </h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BMI
