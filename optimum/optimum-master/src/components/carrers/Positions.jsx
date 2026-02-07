import React from "react"

const Positions = ({ data }) => {
    return (
        <div className="px-3 lg:px-10 my-16 ">
            <h1 className="my-4 text-3xl font-semibold text-sec underline underline-offset-8 decoration-pri mb-6">
                Positions
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {data?.positions.map((pos) => (
                    <Card {...pos} />
                ))}
            </div>
        </div>
    )
}

export default Positions

const Card = ({ domain, role, city }) => {
    return (
        <div className="p-3 rounded-lg bg-gradient-to-tr from-violet-500 to-violet-800 text-white flex flex-col gap-y-2 shadow-lg shadow-black/40">
            <p className="text-sm">{domain}</p>
            <h1 className="text-xl font-semibold">{role}</h1>
            <div className="flex items-center justify-between">
                <p>{city}</p>
                <button className=" bg-gradient-to-br from-sky-600 to-sky-400 hover:scale-105 text-white font-semibold py-2 active:scale-95 px-8 rounded-md transition-all mr-4 shadow-md shadow-black/30 ">
                    Apply
                </button>
            </div>
        </div>
    )
}
