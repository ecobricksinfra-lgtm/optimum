import React from "react"

const Stories = ({ data }) => {
    return (
        <div className="my-8 px-3 lg:px-10">
            <h1 className="text-4xl text-pri font-semibold underline underline-offset-8 decoration-sec text-center my-10 mb-20 ">
                Our Latest Media Stories
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2  mx-auto gap-6 ">
                {data?.map((d) => (
                    <Card
                        data={d}
                        style={" w-full lg:w-44"}
                        src={
                            "https://thumbs.dreamstime.com/b/hospital-ward-hallway-27489534.jpg"
                        }
                    />
                ))}
            </div>
        </div>
    )
}

export default Stories

const Card = ({ style, src, data }) => {
    return (
        <div className="flex flex-col lg:flex-row border-2 border-pri rounded-lg my-4 bg-white">
            <img src={src} alt="" className={`${style} `} />
            {/* Content */}
            <div className=" py-2 px-6  flex flex-col gap-y-4">
                <h1 className="font-semibold text-xl ">{data?.title}</h1>
                <p className="text-sm">{data?.subtitle}</p>
                <button className="px-6 w-max text-sm py-2  bg-gradient-to-tr from-sky-300 to-sky-500 text-white  rounded-md font-semibold  hover:scale-105 transition-all active:scale-95 shadow-md shadow-black/30">
                    Read More
                </button>
                <p className="mt-auto">{`Published By ${data?.publish} ( ${data?.date} )`}</p>
            </div>
        </div>
    )
}
