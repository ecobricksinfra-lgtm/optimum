import React from "react"

const InNews = () => {
    return (
        <div className="px-3 lg:px-10 py-8 ">
            <h1 className="font-semibold text-4xl text-sec underline underline-offset-8 decoration-pri py-2 text-center">
                Optimum Care In News
            </h1>
            <div className="flex flex-col lg:flex-row gap-x-6 justify-around items-center  mt-10">
                <img
                    src="https://www.pngitem.com/pimgs/m/218-2186575_thehindu-logo-logo-of-the-hindu-newspaper-hd.png"
                    alt=""
                    className=" w-40 flex transition-all grayscale hover:grayscale-0"
                />
                <img
                    src="https://mgcchennai.ac.in//admin/library/Times_of_India.png"
                    alt=""
                    className=" w-40 flex transition-all grayscale hover:grayscale-0"
                />
                <img
                    src="https://play-lh.googleusercontent.com/hob_fdd8pV3AI8K2rv49MumzgdqmBcYW8BfuquYzGtFpsDu-JabZmvZhxm8oNNIX3bg"
                    alt=""
                    className=" w-40 flex transition-all grayscale hover:grayscale-0"
                />
            </div>
        </div>
    )
}

export default InNews
