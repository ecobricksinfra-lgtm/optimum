import React, { useState, useEffect } from "react"
import { Line, Bar } from "react-chartjs-2"
import moment from "moment"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import axios from "axios"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

const exampleData = {
    enquiries: {
        today: 10,
        yesterday: 15,
        lastWeek: 40,
        lastMonth: 100,
        lastSixMonths: 500,
        custom: 300,
    },
    appointments: {
        today: 5,
        yesterday: 7,
        lastWeek: 20,
        lastMonth: 50,
        lastSixMonths: 200,
        custom: 150,
    },
}

const DashReport = () => {
    const [enquiries, setEnquiries] = useState({})
    const [appointments, setAppointments] = useState({})
    const [selectedRange, setSelectedRange] = useState("today")
    const [enquiresData, setEnquiresData] = useState([])
    const [eData, setEData] = useState([])
    const [aData, setAData] = useState([])
    const [labels, setLabels] = useState([])

    useEffect(() => {
        if (selectedRange === "today") {
            let ECount = 0
            let ACount = 0
            enquiresData.forEach((enquire) => {
                if (
                    moment(enquire.createdAt.split("T")[0]).isSame(
                        moment().format("YYYY-MM-DD")
                    )
                ) {
                    ECount = ECount + 1
                    if (enquire.appointmentDate) ACount = ACount + 1
                }
            })

            setEData([ECount])
            setAData([ACount])
            setLabels(["Today"])
        } else if (selectedRange === "yesterday") {
            let ECount = 0
            let ACount = 0
            enquiresData.forEach((enquire) => {
                if (
                    moment(enquire.createdAt.split("T")[0]).isSame(
                        moment().clone().add(-1, "day").format("YYYY-MM-DD")
                    )
                ) {
                    ECount = ECount + 1
                    if (enquire.appointmentDate) ACount = ACount + 1
                }
            })
            console.log(ACount)
            setEData([ECount])
            setAData([ACount])
            setLabels(["Yesterday"])
        } else if (selectedRange === "lastWeek") {
            let ECount = 0
            let ACount = 0
            enquiresData.forEach((enquire) => {
                if (
                    moment(enquire.createdAt.split("T")[0]).isSameOrAfter(
                        moment().clone().add(-1, "week").format("YYYY-MM-DD")
                    )
                ) {
                    ECount = ECount + 1
                    if (enquire.appointmentDate) ACount = ACount + 1
                }
            })
            console.log(ACount)
            setEData([ECount])
            setAData([ACount])
            setLabels(["Last Week"])
        } else if (selectedRange === "lastMonth") {
            let ECount = 0
            let ACount = 0
            enquiresData.forEach((enquire) => {
                if (
                    moment(enquire.createdAt.split("T")[0]).isSameOrAfter(
                        moment().clone().add(-1, "month").format("YYYY-MM-DD")
                    )
                ) {
                    ECount = ECount + 1
                    if (enquire.appointmentDate) ACount = ACount + 1
                }
            })
            console.log(ACount)
            setEData([ECount])
            setAData([ACount])
            setLabels(["Last Month"])
        } else if (selectedRange === "lastSixMonth") {
            let ECount = 0
            let ACount = 0
            enquiresData.forEach((enquire) => {
                if (
                    moment(enquire.createdAt.split("T")[0]).isSameOrAfter(
                        moment().clone().add(-6, "month").format("YYYY-MM-DD")
                    )
                ) {
                    ECount = ECount + 1
                    if (enquire.appointmentDate) ACount = ACount + 1
                }
            })
            console.log(ACount)
            setEData([ECount])
            setAData([ACount])
            setLabels(["Last 6 Months"])
        } else if (selectedRange === "lastYear") {
            let ECount = 0
            let ACount = 0
            enquiresData.forEach((enquire) => {
                if (
                    moment(enquire.createdAt.split("T")[0]).isSameOrAfter(
                        moment().clone().add(-1, "year").format("YYYY-MM-DD")
                    )
                ) {
                    ECount = ECount + 1
                    if (enquire.appointmentDate) ACount = ACount + 1
                }
            })
            console.log(ACount)
            setEData([ECount])
            setAData([ACount])
            setLabels(["Last 1 Year"])
        }
    }, [selectedRange])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const enquires = await axios.get(
                    "http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/enquire"
                )
                setEnquiresData(enquires.data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, [])

    const handleRangeChange = (event) => {
        setSelectedRange(event.target.value)
    }

    const generateGraphData = () => {
        const data = {
            labels,
            datasets: [
                {
                    label: "Enquiries",
                    data: eData,
                    fill: false,
                    backgroundColor: ["rgba(75,192,192,0.4)"],
                    borderColor: ["rgba(75,192,192,1)"],
                    borderWidth: 2,
                },
                {
                    label: "Appointment",
                    data: aData,
                    fill: false,
                    backgroundColor: ["rgba(75,192,19,.4)"],
                    borderColor: ["rgba(75,192,19,1)"],
                    borderWidth: 2,
                },
            ],
        }

        return data
    }

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">
                Enquiries and Appointments Graph
            </h1>

            <div className="flex items-center mb-4">
                <label className="mr-4">Select Range:</label>
                <select
                    className="outline-0 p-1 border-b-2 border-pri"
                    value={selectedRange}
                    onChange={handleRangeChange}
                >
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="lastWeek">Last Week</option>
                    <option value="lastMonth">Last Month</option>
                    <option value="lastSixMonths">Last 6 Months</option>
                    <option value="lastYear">Last 1 Year</option>
                </select>
            </div>

            <div className="w-full max-w-xl mx-auto mt-4">
                <Bar data={generateGraphData()} />
            </div>
        </div>
    )
}

export default DashReport
