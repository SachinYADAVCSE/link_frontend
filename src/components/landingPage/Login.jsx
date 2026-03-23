import React, { useEffect, useState } from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAsyncError, useNavigate } from 'react-router-dom'

const schema = yup
    .object()
    .shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(8).max(20),
    })

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitData = async () => {
        console.log("It's working or not");
        const data = { "email": email, "password": password };

        console.log("The Data is like this,", data)
        const response = await axios.post('http://localhost:4000/api/auth/login', data)
        if (response?.data?.code == 200) {
            Swal.fire({
                title: "Login",
                text: response?.data?.message,
                icon: "success"
            });

            console.log(response, "response");
            
            // ✅ use backend values
            console.log(response.data.token, "token");
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userInfo", JSON.stringify(response.data));

            console.log(response.data.isOnboarded, "Something like that");
            
            // ✅ routing logic
            if (!response.data.isOnboarded) {
                navigate("/user-onboarding");
            } else {
                navigate(`/user-tree`);
            }
        } else {
            Swal.fire({
                title: "Login",
                text: response?.data?.message,
                icon: "error"
            });
        }
    }


    return (
        <div className='flex flex-col justify-center items-center mt-50 border border-gray-400 mx-auto h-80 w-100 rounded-md'>

            <div className=' mx-auto w-90 h-70 bg-white boder gap-2 flex flex-col justify-center items-center'>
                <div className='flex  flex-col gap-3'>
                    {/* Login */}
                    <div className=" flex flex-col w-full gap-2">
                        <label className="block font-medium ">Your Email</label>
                        <div className="flex items-center border rounded-lg overflow-hidden ">
                            <span className="bg-gray-100 px-3 py-2 text-gray-600">
                                <FaEnvelope />
                            </span>
                            <input
                                type="email"
                                className=" px-3 py-2 outline-none w-70"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                    </div>

                    {/* Password */}
                    <div className=' flex flex-col gap-2'>

                        <label className="block font-medium mb-1 flex ">Password</label>
                        <div className="flex items-center border rounded-lg overflow-hidden">
                            <span className="bg-gray-100 px-3 py-2 text-gray-600">
                                <FaKey />
                            </span>
                            <input
                                type="password"
                                className="flex-1 px-3 py-2 outline-none"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button onClick={submitData} className='bg-blue-600 mt-2 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login