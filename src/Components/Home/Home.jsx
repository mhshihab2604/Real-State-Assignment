import 'animate.css';
import Residentials from '../Residentials/Residentials';
import { Helmet } from 'react-helmet';
import { IoIosHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="carousel w-full">
                <div id="slide1" className="hero carousel-item relative w-full h-full lg:h-[700px]" style={{backgroundImage: 'url(https://i.ibb.co/thQC3pg/banner1.jpg)'}}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content flex lg:flex-row flex-col  gap-52 text-center text-neutral-content">
                        <div className="max-w-md space-y-5 text-[#FFFFFF] text-start">
                            <h1 className="font-medium text-xl animate__animated animate__backInLeft">Luxury Houses</h1>
                            <h1 className="mb-5 text-2xl lg:text-5xl font-semibold animate__animated animate__backInUp">Luxury <br /> Residence Here</h1>
                            <p className="mb-5 animate__animated animate__lightSpeedInLeft">Whether you are looking to sell or let your home or want to buy or rent a home,we really are the people for you to come to</p>
                            <button className="btn btn-ghost border-2 border-[#71B100] hover:bg-[#71B100]">Read more</button>
                        </div>
                        <div className="space-y-5 bg-[#27282E] text-[#FFFFFF] p-5 rounded-lg  animate__animated animate__zoomInDown">
                            <h1 className="text-xl font-semibold">Sale Price</h1>
                            <p className="text-5xl">$250,199</p>
                            <button className="btn bg-[#71B100] border-none text-white">More Details</button>
                        </div>
                    </div>
                    <div
                        className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-square">❮</a>
                        <a href="#slide2" className="btn btn-square">❯</a>
                    </div>
                </div>
                <div id="slide2" className="hero carousel-item relative w-full h-full lg:h-[700px]" style={{backgroundImage: 'url(https://i.ibb.co/gZNHrwk/banner5.jpg)'}}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content flex lg:flex-row flex-col  gap-52 text-center text-neutral-content">
                        <div className="max-w-md space-y-5 text-[#FFFFFF] text-start">
                            <h1 className="font-medium text-xl animate__animated animate__backInLeft">Luxury Houses</h1>
                            <h1 className="mb-5 text-2xl lg:text-5xl font-semibold animate__animated animate__backInUp">Luxury <br /> Residence Here</h1>
                            <p className="mb-5 animate__animated animate__lightSpeedInLeft">Whether you are looking to sell or let your home or want to buy or rent a home,we really are the people for you to come to</p>
                            <button className="btn btn-ghost border-2 border-[#71B100] hover:bg-[#71B100]">Read more</button>
                        </div>
                        <div className="space-y-5 bg-[#27282E] text-[#FFFFFF] p-5 rounded-lg  animate__animated animate__zoomInDown">
                            <h1 className="text-xl font-semibold">Sale Price</h1>
                            <p className="text-5xl">$250,199</p>
                            <button className="btn bg-[#71B100] border-none text-white">More Details</button>
                        </div>
                    </div>
                    <div
                        className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-square">❮</a>
                        <a href="#slide3" className="btn btn-square">❯</a>
                    </div>
                </div>
                <div id="slide3" className="hero carousel-item relative w-full h-full lg:h-[700px]" style={{backgroundImage: 'url(https://i.ibb.co/xSPYVZ6/banner6.jpg)'}}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content flex lg:flex-row flex-col  gap-52 text-center text-neutral-content">
                        <div className="max-w-md space-y-5 text-[#FFFFFF] text-start">
                            <h1 className="font-medium text-xl animate__animated animate__backInLeft">Luxury Houses</h1>
                            <h1 className="mb-5 text-2xl lg:text-5xl font-semibold animate__animated animate__backInUp">Luxury <br /> Residence Here</h1>
                            <p className="mb-5 animate__animated animate__lightSpeedInLeft">Whether you are looking to sell or let your home or want to buy or rent a home,we really are the people for you to come to</p>
                            <button className="btn btn-ghost border-2 border-[#71B100] hover:bg-[#71B100]">Read more</button>
                        </div>
                        <div className="space-y-5 bg-[#27282E] text-[#FFFFFF] p-5 rounded-lg  animate__animated animate__zoomInDown">
                            <h1 className="text-xl font-semibold">Sale Price</h1>
                            <p className="text-5xl">$250,199</p>
                            <button className="btn bg-[#71B100] border-none text-white">More Details</button>
                        </div>
                    </div>
                    <div
                        className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-square">❮</a>
                        <a href="#slide4" className="btn btn-square">❯</a>
                    </div>
                </div>
                <div id="slide4" className="hero carousel-item relative w-full h-full lg:h-[700px]" style={{backgroundImage: 'url(https://i.ibb.co/x5bYQWn/banner4.jpg)'}}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content flex lg:flex-row flex-col  gap-52 text-center text-neutral-content">
                        <div className="max-w-md space-y-5 text-[#FFFFFF] text-start">
                            <h1 className="font-medium text-xl animate__animated animate__backInLeft">Luxury Houses</h1>
                            <h1 className="mb-5 text-2xl lg:text-5xl font-semibold animate__animated animate__backInUp">Luxury <br /> Residence Here</h1>
                            <p className="mb-5 animate__animated animate__lightSpeedInLeft">Whether you are looking to sell or let your home or want to buy or rent a home,we really are the people for you to come to</p>
                            <button className="btn btn-ghost border-2 border-[#71B100] hover:bg-[#71B100]">Read more</button>
                        </div>
                        <div className="space-y-5 bg-[#27282E] text-[#FFFFFF] p-5 rounded-lg  animate__animated animate__zoomInDown">
                            <h1 className="text-xl font-semibold">Sale Price</h1>
                            <p className="text-5xl">$250,199</p>
                            <button className="btn bg-[#71B100] border-none text-white">More Details</button>
                        </div>
                    </div>
                    <div
                        className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-square">❮</a>
                        <a href="#slide1" className="btn btn-square">❯</a>
                    </div>
                </div>
            </div> 
            <div className='container mx-auto flex justify-center mt-20'>
                <div className="stats shadow w-full h-40 border-b-2 border-[#23BE0A] rounded-xl">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <IoIosHome className='text-[#71B100] text-3xl'></IoIosHome>
                        </div>
                        <div className="stat-title">Sale</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <FaRegUser className='text-[#71B100] text-2xl'></FaRegUser>
                        </div>
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <IoMdLogIn className='text-[#71B100] text-3xl'></IoMdLogIn>
                        </div>
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    
                </div>
            </div>
            <Residentials></Residentials>
            <div className='mt-28'>
                <div className='text-center space-y-2'>
                    <p className='text-[#71B100]'>We are Offering the Best Real Estate</p>
                    <h1 className='text-4xl font-semibold'>Best House to Purchase</h1>
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div className="max-w-xs bg-base-100 shadow-2xl border-2 dark:text-gray-900">
                            <img src="https://i.ibb.co/sqcR3vd/Developer-removebg-preview-removebg-preview.jpg" alt="" className="object-cover object-center w-80 h-96" />
                            <div className="mb-2  text-center p-2">
                                <h2 className="text-lg font-semibold tracking-wide">MH Shihab</h2>
                                <small className="dark:text-[#71B100]">Buying Agent</small>
                            </div>
                        </div>
                        <div className="max-w-xs bg-base-100 shadow-2xl border-2 dark:text-gray-900">
                            <img src="https://i.ibb.co/rfkmwRf/Developer2-removebg-preview-removebg-preview.jpg" alt="" className="object-cover object-center w-80 h-96" />
                            <div className="mb-2 text-center p-2">
                                <h2 className="text-lg font-semibold tracking-wide">Mehedi Hasan</h2>
                                <small className="dark:text-[#71B100]">Real Estate Broker</small>
                            </div>
                        </div>
                        <div className="max-w-xs bg-base-100 shadow-2xl border-2 dark:text-gray-900">
                            <img src="https://i.ibb.co/cNkPDLc/shundor3.jpg" alt="" className="object-cover object-center w-80 h-96" />
                            <div className="mb-2 text-center p-2">
                                <h2 className="text-lg font-semibold tracking-wide">Aya Magdy</h2>
                                <small className="dark:text-[#71B100]">Real Estate Broker</small>
                            </div>
                        </div>
                        <div className="max-w-xs bg-base-100 shadow-2xl border-2 dark:text-gray-900">
                            <img src="https://i.ibb.co/RY4qT21/shundor4.jpg" alt="" className="object-cover object-center w-80 h-96" />
                            <div className="mb-2 text-center p-2">
                                <h2 className="text-lg font-semibold tracking-wide">Arafa El Sherief</h2>
                                <small className="dark:text-[#71B100]">Team Leader</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;