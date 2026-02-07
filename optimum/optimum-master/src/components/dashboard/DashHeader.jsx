import axios from "axios"
import React, { useState } from "react"
import { useEffect } from "react"
import { BiTrash } from "react-icons/bi"

const DashHeader = () => {
    // for patients
    const handleAdd = () => {
        setForPatients((e) => [...e, newPatient])
        setNewPatient({ name: "", link: "" })
    }

    const handleDelete = (index) => {
        setForPatients((e) => {
            return e.filter((_pat, i) => i != index)
        })
    }

    // for corporates
    const handleAddCorporate = () => {
        setForCorporates((e) => [...e, newCorporate])
        setNewCorporate({ name: "", link: "" })
    }

    const handleDeleteCorporate = (index) => {
        setForCorporates((e) => {
            return e.filter((_pat, i) => i != index)
        })
    }

    // for company
    const handleAddCompany = () => {
        setForCompanys((e) => [...e, newCompany])
        setNewCompany({ name: "", link: "" })
    }

    const handleDeleteCompany = (index) => {
        setForCompanys((e) => {
            return e.filter((_pat, i) => i != index)
        })
    }

    // for treatment
    const handleAddTreatment = (key) => {
        setForTreatments((e) => ({ ...e, [key]: [...e[key], newTreatment] }))
        setNewTreatment({ name: "", link: "/treatments/" })
    }

    const handleDeleteTreatment = (remKey, index) => {
        setForTreatments((e) => {
            let res = {}
            let ans = {}
            res = Object.keys(e).map((key) =>
                e[key].filter((treat, i) => {
                    // console.log(key != remKey || index != i)
                    return key != remKey || index != i
                })
            )

            Object.keys(e).forEach((key, i) => {
                ans = { ...ans, [key]: res[i] }
            })

            return ans
        })
    }

    const handleSave = async () => {
        try {
            const res = await axios.post(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/header`,
                {
                    treatments: forTreatments,
                    forPatients: forPatients,
                    forCorporates,
                    forCompany: forCompanys,
                    cities,
                }
            )
            fetchHeaders()
        } catch (e) {
            console.log(e)
        }
    }

    const fetchHeaders = async () => {
        try {
            const { data } = await axios.get(
                `http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/header`
            )
            setForTreatments(data[0].treatments)
            setForPatients(data[0].forPatients)
            setForCorporates(data[0].forCorporates)
            setForCompanys(data[0].forCompany)
            setCities(data[0].cities)
        } catch (e) {
            console.log(e)
        }
    }

    const handleAddTreat = () => {
        setForTreatments((e) => {
            const temp = { ...e, [newTreat]: [] }
            return temp
        })

        setNewTreat("")
    }

    const handleDelTreat = (remKey) => {
        setForTreatments((e) => {
            console.log(Object.keys(e).filter((key) => key != remKey))
            let res = Object.keys(e).filter((key) => key != remKey)
            let ans = {}
            res.forEach((key) => {
                ans = { ...ans, [key]: e[key] }
            })
            return ans
        })
    }

    useEffect(() => {
        fetchHeaders()
    }, [])

    const [forTreatments, setForTreatments] = useState({})
    const [forPatients, setForPatients] = useState([])
    const [forCorporates, setForCorporates] = useState([])
    const [forCompanys, setForCompanys] = useState([])
    const [cities, setCities] = useState([])

    const [newCities, setNewCities] = useState("")
    const [newPatient, setNewPatient] = useState({ name: "", link: "/" })
    const [newCorporate, setNewCorporate] = useState({ name: "", link: "" })
    const [newCompany, setNewCompany] = useState({ name: "", link: "/" })
    const [newTreatment, setNewTreatment] = useState({
        name: "",
        link: "/treatments/",
    })
    const [newTreat, setNewTreat] = useState()

    if (forPatients.length === 0) return <></>

    return (
        <div className="flex flex-col gap-4">
            {/* Treatments */}
            <div className="border-b-2 border-black pb-6">
                <h1 className="text-lg  font-semibold text-pri">Treatments</h1>
                {/* new Cat */}
                <div className="flex items-center">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                    "
                        value={newTreat}
                        type="text"
                        onChange={(e) => setNewTreat(e.target.value)}
                        placeholder="New Treatment Category"
                    />
                    <button
                        onClick={handleAddTreat}
                        className="bg-violet-800 font-semibold text-white px-2 py-1 rounded-md"
                    >
                        Add
                    </button>
                </div>
                {Object.keys(forTreatments).map((key, i) => (
                    <div className="ml-4 ">
                        <div className="flex gap-x-4 items-center">
                            <p className="text-lg mt-6 font-semibold text-pri">
                                {key}
                            </p>
                            <button
                                onClick={() => handleDelTreat(key)}
                                className="bg-violet-800 font-semibold text-white px-2 py-1 rounded-md"
                            >
                                Delete
                            </button>
                        </div>

                        {forTreatments[key].map((pat, i) => (
                            <div className="flex gap-10 my-2 justify-around items-center">
                                <input
                                    className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                                    value={pat.name}
                                    type="text"
                                    onChange={(e) =>
                                        setForTreatments((pre) => {
                                            const temp = { ...pre }
                                            temp[key][i].name = e.target.value
                                            return temp
                                        })
                                    }
                                    placeholder="Name"
                                />
                                <input
                                    className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                                    value={pat.link}
                                    onChange={(e) =>
                                        setForTreatments((pre) => {
                                            const temp = { ...pre }
                                            temp[key][i].link = e.target.value
                                            return temp
                                        })
                                    }
                                    type="text"
                                    placeholder="Link eg: /aboutUs"
                                />
                                <BiTrash
                                    onClick={() =>
                                        handleDeleteTreatment(key, i)
                                    }
                                    className="text-red-600 text-xl w-10"
                                />
                            </div>
                        ))}

                        {/* New One */}
                        <p>Add New</p>
                        <div className="flex gap-10 my-2 justify-around">
                            <input
                                className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                                value={newTreatment.name}
                                type="text"
                                onChange={(e) =>
                                    setNewTreatment((pre) => {
                                        const temp = { ...pre }
                                        temp.name = e.target.value
                                        return temp
                                    })
                                }
                                placeholder="Name"
                            />
                            <input
                                className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                                value={newTreatment.link}
                                onChange={(e) =>
                                    setNewTreatment((pre) => {
                                        const temp = { ...pre }
                                        temp.link = e.target.value
                                        return temp
                                    })
                                }
                                type="text"
                                placeholder="Link eg: /aboutUs"
                            />
                            <button
                                onClick={() => handleAddTreatment(key)}
                                className="bg-violet-800 font-semibold text-white px-2 py-1 rounded-md"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Patients */}
            <div className="border-b-2 border-black pb-6">
                <h1 className="text-lg  font-semibold text-pri">
                    For Patients
                </h1>
                {forPatients.map((pat, i) => (
                    <div className="flex gap-10 my-2 justify-around items-center">
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                            value={pat.name}
                            type="text"
                            onChange={(e) =>
                                setForPatients((pre) => {
                                    const temp = [...pre]
                                    temp[i].name = e.target.value
                                    return temp
                                })
                            }
                            placeholder="Name"
                        />
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                            value={pat.link}
                            onChange={(e) =>
                                setForPatients((pre) => {
                                    const temp = [...pre]
                                    temp[i].link = e.target.value
                                    return temp
                                })
                            }
                            type="text"
                            placeholder="Link eg: /aboutUs"
                        />
                        <BiTrash
                            onClick={() => handleDelete(i)}
                            className="text-red-600 text-xl w-10"
                        />
                    </div>
                ))}
                {/* New One */}
                <p>Add New</p>
                <div className="flex gap-10 my-2 justify-around">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                        value={newPatient.name}
                        type="text"
                        onChange={(e) =>
                            setNewPatient((pre) => {
                                const temp = { ...pre }
                                temp.name = e.target.value
                                return temp
                            })
                        }
                        placeholder="Name"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                        value={newPatient.link}
                        onChange={(e) =>
                            setNewPatient((pre) => {
                                const temp = { ...pre }
                                temp.link = e.target.value
                                return temp
                            })
                        }
                        type="text"
                        placeholder="Link eg: /aboutUs"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-violet-800 font-semibold text-white px-2 py-1 rounded-md"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Corporates */}
            <div className="border-b-2 border-black pb-6">
                <h1 className="text-lg  font-semibold text-pri">
                    For Corporates
                </h1>
                {forCorporates.map((pat, i) => (
                    <div className="flex gap-10 my-2 justify-around items-center">
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                            value={pat.name}
                            type="text"
                            onChange={(e) =>
                                setForCorporates((pre) => {
                                    const temp = [...pre]
                                    temp[i].name = e.target.value
                                    return temp
                                })
                            }
                            placeholder="Name"
                        />
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                            value={pat.link}
                            onChange={(e) =>
                                setForCorporates((pre) => {
                                    const temp = [...pre]
                                    temp[i].link = e.target.value
                                    return temp
                                })
                            }
                            type="text"
                            placeholder="Link eg: /aboutUs"
                        />
                        <BiTrash
                            onClick={() => handleDeleteCorporate(i)}
                            className="text-red-600 text-xl w-10"
                        />
                    </div>
                ))}
                {/* New One */}
                <p>Add New</p>
                <div className="flex gap-10 my-2 justify-around">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                        value={newCorporate.name}
                        type="text"
                        onChange={(e) =>
                            setNewCorporate((pre) => {
                                const temp = { ...pre }
                                temp.name = e.target.value
                                return temp
                            })
                        }
                        placeholder="Name"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                        value={newCorporate.link}
                        onChange={(e) =>
                            setNewCorporate((pre) => {
                                const temp = { ...pre }
                                temp.link = e.target.value
                                return temp
                            })
                        }
                        type="text"
                        placeholder="Link eg: /aboutUs"
                    />
                    <button
                        onClick={handleAddCorporate}
                        className="bg-violet-800 font-semibold text-white px-2 py-1 rounded-md"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Companys */}
            <div className="border-b-2 border-black pb-6">
                <h1 className="text-lg  font-semibold text-pri">For Company</h1>
                {forCompanys.map((pat, i) => (
                    <div className="flex gap-10 my-2 justify-around items-center">
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                            value={pat.name}
                            type="text"
                            onChange={(e) =>
                                setForCompanys((pre) => {
                                    const temp = [...pre]
                                    temp[i].name = e.target.value
                                    return temp
                                })
                            }
                            placeholder="Name"
                        />
                        <input
                            className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                            value={pat.link}
                            onChange={(e) =>
                                setForCompanys((pre) => {
                                    const temp = [...pre]
                                    temp[i].link = e.target.value
                                    return temp
                                })
                            }
                            type="text"
                            placeholder="Link eg: /aboutUs"
                        />
                        <BiTrash
                            onClick={() => handleDeleteCompany(i)}
                            className="text-red-600 text-xl w-10"
                        />
                    </div>
                ))}
                {/* New One */}
                <p>Add New</p>
                <div className="flex gap-10 my-2 justify-around">
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                        value={newCompany.name}
                        type="text"
                        onChange={(e) =>
                            setNewCompany((pre) => {
                                const temp = { ...pre }
                                temp.name = e.target.value
                                return temp
                            })
                        }
                        placeholder="Name"
                    />
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                        value={newCompany.link}
                        onChange={(e) =>
                            setNewCompany((pre) => {
                                const temp = { ...pre }
                                temp.link = e.target.value
                                return temp
                            })
                        }
                        type="text"
                        placeholder="Link eg: /aboutUs"
                    />
                    <button
                        onClick={handleAddCompany}
                        className="bg-violet-800 font-semibold text-white px-2 py-1 rounded-md"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Cities */}
            <div className="border-b-2 border-black pb-6">
                <h1 className="text-lg  font-semibold text-pri">Cities</h1>
                <div className="grid grid-cols-4 gap-4">
                    {cities.map((pat, i) => (
                        <div className="flex gap-10 my-2 justify-around items-center">
                            <input
                                className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                                value={pat}
                                type="text"
                                onChange={(e) =>
                                    setCities((pre) => {
                                        const temp = [...pre]
                                        temp[i] = e.target.value
                                        return temp
                                    })
                                }
                                placeholder="City"
                            />

                            <BiTrash
                                onClick={() =>
                                    setCities((e) =>
                                        e.filter((city) => city != pat)
                                    )
                                }
                                className="text-red-600 text-xl w-10"
                            />
                        </div>
                    ))}
                    {/* New  */}
                    <input
                        className="shadow appearance-none border-b-2  border-pri py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full
                        "
                        value={newCities}
                        type="text"
                        onChange={(e) => setNewCities(e.target.value)}
                        placeholder="New City"
                    />
                    {/* Add */}
                    <button
                        onClick={() => {
                            setCities((e) => [...e, newCities])
                            setNewCities("")
                        }}
                        className="bg-violet-800 font-semibold text-white px-2 py-1 rounded-md"
                    >
                        Add
                    </button>
                </div>
            </div>

            <button
                onClick={handleSave}
                className="bg-violet-800 font-semibold text-white px-8 text-xl py-2 rounded-md"
            >
                Save Changes
            </button>
        </div>
    )
}

export default DashHeader
