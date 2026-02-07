import { create } from "zustand"

const useDatas = create((set) => ({
    treatments: [],
    treatmentCategories: [],
    cities: [],
    setTreatments: (treatments) => set({ treatments }),
    setTreatmentCategories: (treatmentCategories) =>
        set({ treatmentCategories }),
    setCities: (cities) => set({ cities }),
}))

export default useDatas
