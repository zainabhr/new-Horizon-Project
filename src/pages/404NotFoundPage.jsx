import React from "react";
import image404 from '../assets/error404.png'
import { useNavigate } from "react-router-dom";

export default function NotFoundPage(){
    const navigate = useNavigate()
    
        const handleBackToHome = () =>{
            navigate('/')
        }
    return(
        <div className="flex flex-col items-center justify-center my-[50px]">
            <img src={image404}
            className="bg-[rgb(67,67,255)] w-[150px] h-[150px] rounded-[10px]" />
  	        <div  
            className="text-[black] flex flex-col items-center justify-center">

            <h1 className="text-[50px]">Page Not Found</h1>
            <p className=" text-xl my-[10px]">We looked everywhere for this page.
            Are you sure the website URL is Correct?
            Get in touch with the site owner.</p>

            <button 
            onClick={handleBackToHome}
            className="gap-2.5 w-[170px] h-10 text-base align-middle 
            text-[rgb(67,67,255)] bg-transparent font-[bold] px-5 py-0 border rounded-[10px]">Back To Home</button>
            </div>

        </div>
    )
}