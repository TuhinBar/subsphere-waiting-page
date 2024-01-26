import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlogCards from '../../components/BlogCards';
import Footer from '../../components/Footer';

const Blogs = () => {
    const navigate = useNavigate();
    return (
        <section>
            <div className='flex justify-between items-center md:py-4 md:px-8 px-6 pt-6'>
                <img src="/LOGO.svg" className='w-8 md:w-12' alt="logo" />
                <p className='text-white font-bold text-lg md:text-3xl'>Blogs</p>
                <button
                    onClick={() => navigate("/")}
                    className="relative font-semibold text-xs md:text-sm text-white bg-secondary rounded-2xl hover:bg-light-secondary transition-all duration-300 border-2 border-secondary hover:border-white p-2 hover:border-opacity-45 whitespace-nowrap  cursor-pointer"
                >
                    Join Now
                </button>
            </div>
            <BlogCards />
            <Footer />
        </section>
    )
}

export default Blogs