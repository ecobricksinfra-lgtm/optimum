import { FaCity } from "react-icons/fa"
import { cities } from "../header/CityModal"

const Locations = () => {
    return (
        <div className="bg-white pb-20 p-6 md:p-8">
            <h2 className="text-4xl text-pri font-bold mb-8">Our Locations</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
                {cities.map((loc) => (
                    <LocationCard>{loc}</LocationCard>
                ))}
            </div>
        </div>
    )
}

export default Locations

export const LocationCard = ({ children }) => {
    return (
        <div className="flex items-center space-x-2 text-gray-600">
            <FaCity className="text-sec text-xl md:text-2xl" />
            <span className="text-lg">{children}</span>
        </div>
    )
}
