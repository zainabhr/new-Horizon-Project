import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from "react-router-dom"
import { useEffect, useState } from 'react';

export default function Header(){

        const [cart, setCart] = useState([])
        const [isLoggedIn, setIsLoggedIn] = useState(false)
    
        useEffect(() => {
            const logged =  localStorage.getItem('userIsLoggedIn');
            if(logged === 'true'){
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setIsLoggedIn(true)
            }
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
        }, []);
    
        useEffect(() =>{
            const handleStorageChange = () =>{
                const savedCart = localStorage.getItem('cart');
                if(savedCart){
                    setCart(JSON.parse(savedCart))
                }
                const logged =  localStorage.getItem('userIsLoggedIn');
                if(logged === 'true'){
                    setIsLoggedIn(true)
            }
            };
    
            window.addEventListener('storage', handleStorageChange);
    
            return () =>{
                window.removeEventListener('storage', handleStorageChange)
            }
        }, [])
        
        const handleLogout = () => {
            localStorage.setItem('userIsLoggedIn', 'false')
            setIsLoggedIn(false)
            // window.dispatchEvent(new Event('storage'));
        }

    return(
    <header className="h-[65px] bg-[rgb(67,67,255)] w-full flex items-center justify-around text-white">
            <Link to='/' className="text-xl text-[white] hover:text-[white] font-bold">NewHorizons</Link>
            <nav>
                <ul className="flex items-center justify-between list-none">
                    <li className="mx-[15px] my-0">
                        <Link to="/" className='text-[lightblue] hover:text-[rgb(71,70,70)] '>Home</Link></li>
                    <li className="mx-[15px] my-0">
                        <Link to="/courses" className='text-[lightblue] hover:text-[rgb(71,70,70)] '>Courses</Link></li>
                    <li className="mx-[15px] my-0">
                        <Link to="/cart" className='text-[lightblue] hover:text-[rgb(71,70,70)]'>Cart 
                        {cart.length > 0 && (
                            <span className="absolute top-[15px] right-[300px] bg-red-500 text-white text-xs 
                                            rounded-full w-4 h-4 flex items-center justify-center">
                                {cart.length}
                            </span>
                        )}
                        </Link></li>
                        <li className="mx-[15px] my-0">
                        {isLoggedIn ? (
                            <Link to="/login" onClick={handleLogout} className='text-[lightblue] hover:text-[rgb(71,70,70)]'>logout</Link>
                        ) : (
                            <Link to="/login" className='text-[lightblue] hover:text-[rgb(71,70,70)]'>login</Link>
                        )}</li>
                    
                </ul>
            </nav>
            </header>
    )

}
