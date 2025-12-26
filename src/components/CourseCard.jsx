import { useNavigate } from 'react-router-dom'
import bookIcon from '../assets/books icon.png'
import priceIcon from '../assets/price icon.png'
import levelIcon from '../assets/level-icon.png'
import { useState, useEffect } from 'react';



export default function CourseCard(props){

    const [buttonText , setButtonText] = useState('Add to Cart')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const navigate = useNavigate(); 

    useEffect(() => {
        const logged =  localStorage.getItem('userIsLoggedIn');
            if(logged === 'true'){
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setIsLoggedIn(true)
            }
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const cart = JSON.parse(savedCart);
            if (cart.some(item => item.id === props.id)) {
                setButtonText("Added");
            }
        }
    }, [props.id]);

    

    const handleAddToCart = () => {
        if(!isLoggedIn){
            alert("You should login to add to the cart!!");
            return;
        }
        const savedCart = localStorage.getItem('cart') || '[]';
        const cart = JSON.parse(savedCart);
        
        if (cart.find(item => item.id === props.id)) {
            alert("Already in cart!");
            return;
        }
        
        cart.push({
            id: props.id,
            title: props.title,
            price: props.price,
            shortDescription: props.shortDescription,
            lessonsCount: props.lessonsCount,
            level: props.level
        });
        
        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('storage'));

        setButtonText("Added");
    }

    const handleViewDetails = () =>{
        navigate(`/courses/${props.id}`)
    }
    return(
        <div className='w-6/7 h-full m-[25px] text-black shadow-[1px_1px_8px_rgba(0,0,0,0.25)] flex flex-col bg-[white] pb-5 p-[13px] rounded-[10px]'>
            <h1 className='my-[20px]'>{props.title}</h1>
            <p className='my-[20px]'>{props.shortDescription}</p>
            <div className='flex'>
                <img src={bookIcon} alt="book icon" className='w-[20px] m-[5px] h-[20]' />
                <p>{props.lessonsCount} lessons</p>
            </div>
            <div className='flex my-[25px]'>
                <img src={levelIcon} alt="level icon" className='w-[20px] m-[5px] h-[20]' />
                <p>{props.level}</p>
                </div>
            <div className='flex'>
                <img src={priceIcon} alt="price icon" className='w-[20px] m-[5px] h-[20]' />
                <p>{props.price}$</p>
            </div>
            <div>
                <button 
                onClick={handleAddToCart}
                className='w-1/3 bg-[rgb(67,67,255)] text-[lightblue] 
                transition-[background-color] duration-[0.8s] m-[25px] 
                hover:bg-[lightblue] hover:text-[rgb(71,70,70)] 
                '>{buttonText}</button>
                <button 
                onClick={handleViewDetails}
                className='w-1/3 text-[blue] border border-solid 
                border-[rgb(67,67,255)] bg-transparent transition-[background-color] 
                duration-[0.8s]  hover:bg-[lightblue] hover:text-[rgb(71,70,70)] 
                '>View Details</button>
            </div>
        </div>
    )
}