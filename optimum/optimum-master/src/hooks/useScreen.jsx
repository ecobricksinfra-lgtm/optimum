import React, { useEffect, useState } from "react"
import getDeviceType from "../utils/getScreenType"

const useScreen = () => {
    const [slidingUnit, setSlidingUnit] = useState(0)

    useEffect(() => {
        setSlidingUnit(getDeviceType() === "lap" ? -71 : -95)
    }, [])

    return { slidingUnit }
}

export default useScreen
