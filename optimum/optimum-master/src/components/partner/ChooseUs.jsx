import React from "react"
import heroImage from "../../assets/doctors2.png"
import { TbShieldCheckFilled } from "react-icons/tb"

const docArr = [
    "Increased patient flow",
    "Better engagement with patients through our patient portals",
    "Exciting Referral benefits",
    "Better cash flow - Payments within 24 hrs",
    "Cases planned and sorted by Glamyo team",
]

const hospArr = [
    "Brand Exposure",
    "Streamlined Workflow",
    "Capacity Utilization",
]

const ChooseUs = ({ data, page }) => {
    return (
        <>
            <div className="px-3 lg:px-10 py-10 flex flex-col gap-y-10">
                <h1 className="text-4xl font-semibold text-pri text-center ">
                    Why Choose Us?
                </h1>
                {data && (
                    <>
                        {/* doc  */}
                        <div className="flex lg:flex-row flex-col gap-y-6 items-center justify-around">
                            <img src={heroImage} alt="" />
                            {/* for doc conte */}
                            <div className="flex flex-col gap-y-2">
                                <h1 className="text-3xl font-semibold text-sec text-center mb-4">
                                    For Doctors
                                </h1>
                                {data[
                                    page == "part" ? "partDoc" : "docDoc"
                                ].map((doc) => (
                                    <Text text={doc} />
                                ))}
                            </div>
                        </div>
                        {/* hosp  */}
                        <div className="flex lg:flex-row flex-col-reverse gap-y-6 items-center justify-around">
                            {/* for hosp conte */}
                            <div className="flex flex-col gap-y-2">
                                <h1 className="text-3xl font-semibold text-sec text-center mb-4">
                                    For Hospitals
                                </h1>
                                {data[
                                    page == "part" ? "partHos" : "docHos"
                                ].map((doc) => (
                                    <Text text={doc} />
                                ))}
                            </div>
                            <img
                                className="lg:w-5/12 w-full rounded-xl"
                                src={
                                    "https://images.unsplash.com/photo-1584451049700-ec9b394f3805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zcGl0YWwlMjBoYWxsd2F5fGVufDB8fDB8fHww&w=1000&q=80"
                                }
                                alt=""
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default ChooseUs

const Text = ({ text }) => {
    return (
        <div className="flex gap-x-4 items-center">
            <TbShieldCheckFilled className="text-xl text-emerald-500" />
            <h1 className="text-xl capitalize">{text}</h1>
        </div>
    )
}
