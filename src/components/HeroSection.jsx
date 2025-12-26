import heroImage from '../assets/hero Img 1.jpg'
import { useNavigate } from 'react-router-dom';


export default function HeroSection(){
    const navigate = useNavigate()

    const handleExploreOurCourses = () =>{
        navigate(`/courses`)
    }
    return(
        <>
        <div className="mobile-container w-full h-screen flex flex-row justify-around items-center p-[25px]">

            <div className='w-1/2'>
                <h1 className="text-5xl font-bold text-[rgb(67,67,255)] mx-2.5 my-[25px]">Welcome to New Horizons</h1>
                <p className='text-xl text-[gray] mx-2.5 my-[25px]'>Unlock New Skills, Discover New Horizons.</p>
                <p className='text-xl text-[gray] mx-2.5 my-[25px] italic'>Build the career you've imagined.</p>
                <button 
                onClick={handleExploreOurCourses}
                className='bg-[rgb(67,67,255)] text-[lightblue] transition-[background-color] duration-[0.8s] 
                m-[25px] hover:bg-[lightblue] hover:text-[rgb(71,70,70)] hover:scale-[1.2]'>Explore our Courses</button>
            </div>
            <div className='right'>
                <img src={heroImage} alt="Hero Illustration" className="w-full h-full shadow-[-10px_0_15px_10px_gray] rounded-[25px]" />
            </div> 
        </div>
        </>
    );
}
