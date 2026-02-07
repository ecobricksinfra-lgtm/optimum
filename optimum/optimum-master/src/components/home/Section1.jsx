import React from "react"
import { allDiseases, diseases } from "../header/DiseaseModal"
import USER_IMG from "../../assets/user-3d.png"
import useEnquire from "../../hooks/useEnquire"
import useDatas from "../../store/useDatas"

const Section1 = () => {
    const enquire = useEnquire()
    const { cities, treatments } = useDatas()

    return (
        <section className="pt-16 items-center px-4 md:px-8   flex  py-12 ">
            <div className="w-full">
                <h1 className="font-semibold text-pri  text-center lg:text-left text-3xl underline underline-offset-8 decoration-sec  capitalize ">
                    Book Your surgery consultation
                </h1>

                {/* Card.. */}
                <div className=" bg-gradient-to-br from-sky-600 to-sky-400 rounded-md p-10 grid grid-cols-1 gap-4 lg:flex items-center mt-8 shadow-md shadow-black/30 justify-around  ">
                    {/* name */}
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-2 rounded-md outline-0   "
                        value={enquire.name}
                        onChange={(e) => enquire.setName(e.target.value)}
                    />
                    {/* contact */}
                    <input
                        type="tel"
                        placeholder="Contact"
                        className="p-2 rounded-md outline-0   "
                        value={enquire.mobileNumber}
                        onChange={(e) =>
                            enquire.setMobileNumber(e.target.value)
                        }
                    />
                    {/* City */}
                    <select
                        value={enquire.city}
                        onChange={(e) => enquire.setCity(e.target.value)}
                        className="p-2 rounded-md outline-0 px-3 "
                    >
                        {cities.map((city) => (
                            <option value={city}>{city}</option>
                        ))}
                    </select>
                    {/*   disease   */}
                    <select
                        value={enquire.treatment}
                        onChange={(e) => enquire.setTreatment(e.target.value)}
                        className="p-2 rounded-md outline-0 px-3 "
                    >
                        {treatments.map((diesase) => (
                            <option className="capitalize" value={diesase}>
                                {diesase}
                            </option>
                        ))}
                    </select>
                    {/* btn */}
                    <button
                        onClick={() => enquire.postEnquire()}
                        className="px-8 py-3  bg-gradient-to-br from-violet-500 to-violet-800 uppercase text-white  rounded-md font-semibold ml-4 hover:scale-105 transition-all active:scale-95 shadow-md shadow-black/30"
                    >
                        Submit
                    </button>
                </div>
            </div>
            {/* <img src={USER_IMG} alt="" className="w-60 hidden lg:block" /> */}
        </section>
    )
}

export default Section1
