import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    console.log(isLoggedIn)
    const handleLogin = () =>{
        localStorage.setItem('userIsLoggedIn', 'true')
        setIsLoggedIn(true)
        window.dispatchEvent(new Event('storage'));
        navigate('/')
    }
    return( 
        <>
            <div className="text-[black] w-1/2 mx-auto my-[50px]" >
                <form>
                    <div className="flex flex-row items-center justify-center m-[25px] ">
                        <label for="email" className="mx-[10px]">EMAIL ADDRESS:</label>
                        <input type="email" id="email" placeholder="EXAMPLE@GMAIL.COM" required
                            className="border border-solid border-[black] rounded-[5px] p-[5px]"
                        />
                    </div>
                    <div className="flex flex-row items-center justify-center m-[25px]">
                        <label for="password" className="mx-[10px]">PASSWORD:</label>
                        <input type="password" id="password" placeholder="****************"  required
                            className="border border-solid border-[black] rounded-[5px] p-[5px]"
                        />
                    </div>
                </form>
                <div className="flex flex-col items-center justify-around m-[25px]">
                    <p className="m-[10px]">DON'T HAVE AN ACCOUNT? <a href="#">SIGN UP</a></p>
                    <p className="m-[10px]">FORGET PASSWORD? <a href="#">CHANGE PASSWORD</a></p>
                </div>
                <div className="flex flex-col items-center justify-around m-[25px]">
                    <button
                    type="submit"
                    onClick={handleLogin}
                    className='w-1/3 text-[blue] border border-solid 
                    border-[rgb(67,67,255)] bg-transparent transition-[background-color] 
                    duration-[0.8s] hover:bg-[lightblue] hover:text-[rgb(71,70,70)]'
                    >LOGIN</button>
                </div>
                </div>
        </>
    )}