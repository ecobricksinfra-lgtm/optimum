import axios from "axios"
import React, { useState } from "react"
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import useLogin from "../store/useLogin"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { type, setType } = useLogin()

    const handleLogIn = async () => {
        console.log("button clicked")
        try {
            const user = await axios.post(
               // "http://ec2-52-66-228-175.ap-south-1.compute.amazonaws.com:3000/api/user",
               "http://localhost:3000/api/user",
                {
                    username: email,
                    password:password,
                }
            )
            
            console.log("api is called",user)
            if (user.data.data.length > 0) {
                setType(user.data.data.username)
                navigate("/dashboard")
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <main className="w-full h-full flex justify-center items-center bg-gradient-to-br  from-violet-950  to-violet-500 py-60">
            <form className="bg-white border-4 border-pri mt-10 lg:mt-0 rounded-md shadow-md shadow-black/50  mx-auto px-8 pt-6 pb-8 mb-4 w-11/12 md:w-10/12 lg:w-5/12 ">
                <h1 className="font-semibold text-pri text-2xl mb-6 text-center underline-offset-8 underline decoration-sec ">
                    Log In
                </h1>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <div className="relative flex items-center  ">
                        <div className="inline-block absolute left-1 top-1 h-full text-center text-gray-400">
                            <AiOutlineMail className="mt-2" />
                        </div>
                        <input
                            className="pl-8  appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative flex items-center">
                        <div className="inline-block absolute left-1 top-1 h-full w-10 text-center text-gray-400">
                            <AiOutlineLock className="mt-2" />
                        </div>
                        <input
                            className="pl-8  appearance-none border-b-2 border-pri  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        onClick={handleLogIn}
                        className="bg-gradient-to-bl from-sky-300 to-sky-500 w-full  hover:scale-105 transition-all text-white mt-4 shadow-md shadow-black/20 active:scale-[0.99] font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline "
                        type="button"
                    >
                        Log In
                    </button>
                </div>
            </form>
        </main>
    )
}

export default Login
