import React, { useState } from "react"
import FaqAside from "./FaqAside"
import Faqs from "./Faqs"

const FAQ = () => {
    const [selectedFAQ, setSelectedFAQ] = useState("")
    return (
        <div className="flex font-pop lg:flex-row flex-col gap-4">
            <FaqAside
                setSelectedFAQ={setSelectedFAQ}
                selectedFAQ={selectedFAQ}
            />
            <Faqs selectedFAQ={selectedFAQ} />
        </div>
    )
}

export default FAQ
