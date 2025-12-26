import priceIcon from '../assets/price icon.png'
import { Link } from 'react-router-dom';
import { useState, useEffect} from "react";


export default function Cart(){
    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() =>{
        const handleStorageChange = () =>{
            const savedCart = localStorage.getItem('cart');
            if(savedCart){
                setCart(JSON.parse(savedCart))
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () =>{
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    const removeFromCart = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        window.dispatchEvent(new Event('storage'));
    };

    if(cart.length == 0){
        return(
            <div className='text-[black] flex flex-col items-center'>
                <h1 className='my-[10px]'>The Cart is empty now</h1>
                <p className='my-[10px]'>You Haven't add any course to the cart yet</p>
                <Link to='/courses'
                className='bg-[rgb(67,67,255)] text-[lightblue] p-[5px] 
                transition-[background-color] duration-[0.8s] m-[25px] 
                hover:bg-[lightblue] hover:text-[rgb(71,70,70)] rounded-[5px]
                '>Back to courses
                </Link>
            </div>
        )
    }
    
    return(
        <>
            <section >
                {cart.map(item =>(
                    <div key={item.id} className='w-1/2 h-full m-[25px] text-black shadow-[1px_1px_8px_rgba(0,0,0,0.25)] flex flex-col bg-[white] pb-5 p-[13px] rounded-[10px]'>
                        <h1 className='my-[20px]'>{item.title}</h1>
                        <div className='flex'>
                            <img src={priceIcon} alt="price icon" className='w-[20px] m-[5px] h-[20]' />
                            <p>{item.price}$</p>
                        </div>
                    <div>
                        <button 
                        onClick={() => removeFromCart(item.id)}
                        className='w-1/3 bg-[rgb(67,67,255)] text-[red] 
                        transition-[background-color] duration-[0.8s] m-[25px] 
                        hover:bg-[lightblue] hover:text-[red] 
                        '>Remove</button>
                    </div>
                    </div>
                ))}
            </section>
            <hr />
            <div className="text-[black]">
                <p className='text-xl  m-[10px]'>Number of Added Courses: {cart.length} </p>
                <p className='text-xl  m-[10px]'>Total Price: {cart.reduce((total, item) => total + item.price, 0)}</p>
            </div>
        </>
    )
}