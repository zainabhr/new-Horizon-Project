import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import bookIcon from '../assets/books icon.png'
import priceIcon from '../assets/price icon.png'
import levelIcon from '../assets/level-icon.png'
import coursesArrayData from '../assets/courses Data';



export default function CourseDetails() {
    const [buttonText , setButtonText] = useState('Add to Cart')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const navigate = useNavigate()
    
    const params= useParams()
    const course = coursesArrayData.find(item => item.id === parseInt(params.id));
    if( !course ){
        navigate('*')
    }
    
    useEffect(() =>{
        const logged =  localStorage.getItem('userIsLoggedIn');
            if(logged === 'true'){
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setIsLoggedIn(true)
            }
        const savedCart = localStorage.getItem('cart')
            if(savedCart){
                const cart = JSON.parse(savedCart)
                if (cart.some(item => item.id === course.id))
                    setButtonText('Added')
            }
        
    }, [course.id])

    const handleAddToCart = () =>{
        if(!isLoggedIn){
            alert("You should login to add to the cart!!");
            return;
        }
        const savedCart = localStorage.getItem('cart') || '[]';
        const cart = JSON.parse(savedCart);

        if(cart.find(item => item.id === course.id)){
            alert("Already in cart!");
            return;
        }

        cart.push({
            id: course.id,
            title: course.title,
            price: course.price,
            shortDescription: course.shortDescription,
            lessonsCount: course.lessonsCount,
            level: course.level
        });

        localStorage.setItem('cart',JSON.stringify(cart));
        window.dispatchEvent(new Event('storage'));
        setButtonText("Added")
    }

    return(
            <div className=' h-full m-[25px] text-black flex flex-col bg-[white] pb-5 p-[13px] rounded-[10px]'>
                <h1 className='my-[20px]'>{course.title}</h1>
                <p className='my-[20px]'>{course.fullDescription}</p>
                <div className='flex'>
                    <img src={bookIcon} alt="book icon" className='w-[20px] mx-[5px] h-[20]' />
                    <p>{course.lessonsCount} lessons</p>
                </div>
                <div className='flex my-[15px]'>Language: {course.language}</div>
                <div className='flex my-[15px]'>Duration: {course.duration}</div>
                <div className='flex my-[15px]'>
                    <img src={levelIcon} alt="level icon" className='w-[20px] mx-[5px] h-[20]' />
                    <p>{course.level}</p>
                    </div>
                <div className='flex'>
                    <img src={priceIcon} alt="price icon" className='w-[20px] mx-[5px] h-[20]' />
                    <p>{course.price}$</p>
                </div>
                <div>
                    <button 
                    onClick={handleAddToCart}
                    className='w-1/3 bg-[rgb(67,67,255)] text-[lightblue] 
                    transition-[background-color] duration-[0.8s] m-[25px] 
                    hover:bg-[lightblue] hover:text-[rgb(71,70,70)] 
                    '>{buttonText}</button>
                </div>
            </div>
        )
}