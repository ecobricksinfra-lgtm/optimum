import React, { useEffect, useState } from "react"

const useModal = () => {
    const [showModal, setShowModal] = useState(false)

    const onClose = () => {
        setShowModal(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 2000)
    }, [])

    return { showModal, setShowModal, onClose }
}

export default useModal
