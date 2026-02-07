import React from "react"

const MediaHero = ({ data }) => {
    return (
        <div className="flex flex-col lg:flex-row py-6 gap-x-4 w-full justify-around bg-gradient-to-br px-3 lg:px-10 from-violet-950  to-violet-500">
            {/* <div className="w-/12"> */}
            <Card
                style={" w-full lg:w-80"}
                src={
                    "https://thumbs.dreamstime.com/b/hospital-ward-hallway-27489534.jpg"
                }
                data={data && data[0]}
            />
            {/* </div> */}
            <div className="w6/12 flex flex-col gap-y-2">
                <Card
                    style={" w-full lg:w-44"}
                    src={
                        "https://thumbs.dreamstime.com/b/hospital-ward-hallway-27489534.jpg"
                    }
                    data={data && data[1]}
                />
                <Card
                    style={" w-full lg:w-44"}
                    src={
                        "https://thumbs.dreamstime.com/b/hospital-ward-hallway-27489534.jpg"
                    }
                    data={data && data[2]}
                />
            </div>
        </div>
    )
}

export default MediaHero

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
