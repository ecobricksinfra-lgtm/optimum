import React from "react"

const Contents = ({ data }) => {
    return (
        <div className="px-3 lg:px-10 py-10 flex flex-col gap-y-16">
            {data?.contents?.map((con, i) => (
                <Card i={i} data={con} />
            ))}
        </div>
    )
}

export default Contents

const Card = ({ i, data }) => {
    return (
        <div
            className={`flex flex-col-reverse ${
                i % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } lg:flex-row gap-6`}
        >
            {/* Contents */}
            <div className="flex flex-col gap-y-8 w-full">
                <h1 className="text-2xl font-semibold">{data?.title}</h1>
                <p>{data?.desc}</p>
            </div>
            {/* img */}
            <img
                className=" w-full lg:w-4/12 rounded-lg shadow-lg shadow-black/30"
                src="https://images.unsplash.com/photo-1584451049700-ec9b394f3805?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9zcGl0YWwlMjBoYWxsd2F5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
            />
        </div>
    )
}
