function getDeviceType() {
    const width = window.innerWidth
    if (width < 768) {
        return "mob"
    } else if (width < 1024) {
        return "tab"
    } else {
        return "lap"
    }
}

export default getDeviceType
