import { create } from "zustand"

const useLogin = create((set) => ({
    type: null,
    setType: (type) => set({ type }),
}))

export default useLogin
