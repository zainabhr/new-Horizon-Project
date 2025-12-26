import '../App.css'
import aboutImg from '../assets/About Img.jpg'

export default function About(){
    return(
        <section className='text-[rgb(67,67,255)] bg-[#669bbc36] text-sm leading-[30px] p-[50px]'>
            <h2 className='text-[34px] font-bold mx-0 my-5'>NewHorizons: Where ambition meets opportunity</h2>
            <div className='flex flex-row justify-around items-center'>
                <img src={aboutImg} alt="Hero Illustration" 
                className="w-3/4 h-1/2 shadow-[-10px_0_15px_10px_gray] rounded-[25px] m-auto" />
                <div className='mx-5'>
                    <p className='mx-0 my-5'>
                        In a rapidly changing world, continuous learning is not a luxury, 
                        but a necessity. Hence comes the vision of NewHorizons - the leading e-learning platform 
                        that opens up new horizons of knowledge and professional growth for you.
                    </p>
                    <h3 className='text-base font-bold'>What do we offer?</h3>
                    <p className='mx-3 my-5'>
                    We provide a comprehensive learning experience that combines quality 
                    with flexibility. Through our diverse library of carefully designed courses, 
                    delivered by exceptional experts and specialists, we help you acquire 
                    the most in-demand skills in today's job market. Whether you're looking to develop 
                    your current skills or explore new fields, you'll find in NewHorizons a partner that
                    supports your learning journey from start to mastery.
                    </p>
                    <h3 className='text-base font-bold my-5'>Who Are These Courses For?</h3>
                    <ul className='mx-3'>
                        <li> <i className="fa fa-star"></i> Ambitious professionals seeking career advancement</li>
                        <li> <i className="fa fa-star"></i> Beginners wanting to enter new fields</li>
                        <li> <i className="fa fa-star"></i> University students looking for practical educational supplements</li>
                        <li> <i className="fa fa-star"></i> Entrepreneurs aiming to grow their businesses</li>
                        <li> <i className="fa fa-star"></i> Lifelong learners who believe education never stops</li>
                    </ul>
                </div>
            </div>
        </section>
    )}