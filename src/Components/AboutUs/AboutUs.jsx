import { Helmet } from 'react-helmet';
import { useCallback, useEffect, useState } from "react";
const AboutUs = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const carouselImages = ['https://i.ibb.co/hKTPKyd/vu-anh-Ti-VPTYCG-3-E-unsplash.jpg','https://i.ibb.co/thQC3pg/banner1.jpg','https://i.ibb.co/gZNHrwk/banner5.jpg','https://i.ibb.co/xSPYVZ6/banner6.jpg','https://i.ibb.co/x5bYQWn/banner4.jpg'];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
    const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
        nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider]);

    return (
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <div className="bg-[rgba(26,29,31,0.70)]">
                    <h1 className="text-2xl lg:text-4xl font-bold text-white text-center">About Us</h1>
            </div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col lg:flex-row justify-center items-center container mx-auto">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                        <span className="block mb-2 dark:text-[#71B100]">About Nafshi</span>
                        <h1 className="text-4xl font-extrabold dark:text-gray-900">Who We Are</h1>
                        <p className="my-8">
                            Nafshi is a premium WordPress theme for real estate agents where modern <br /> aesthetics are combined with tasteful simplicity and where the ease of use is <br /> achieved without compromise in your ability to customise the design.
                        </p>
                        <p className="my-8">
                        Whether you are a real estate agent looking to build a website for your company or a <br /> web developer seeking a perfect WordPress theme for your next project, you are certain <br /> to appreciate the numerous features and benefits that our theme provides.
                        </p>
                    </div>
                    {/* <img src="https://i.ibb.co/hKTPKyd/vu-anh-Ti-VPTYCG-3-E-unsplash.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" /> */}
                    <div>
                        <div className="h-60 w-full lg:w-[700px] md:h-[470px] lg:h-[540px] relative overflow-hidden">
                            {/* arrow left */}
                            <button onClick={prevSlider} className="absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                            </button>
                            {/* arrow right */}
                            <button onClick={nextSlider} className="absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                            <svg className="w-4 h-4 md:w-6 md:h-6 icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                            </button>
                            {/* dots */}
                            <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
                            {carouselImages.map((_, inx) => (
                                <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-500 bg-white ${currentSlider === inx ? "w-8" : "wz-2"} h-2`}></button>
                            ))}
                            </div>
                            {/* Carousel container */}
                            <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
                            {/* sliders */}
                            {carouselImages.map((slide, inx) => (
                                <img key={slide} src={slide} className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover" alt={`Slider - ${inx + 1}`}/>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-20">
                <div className="text-center">
                    <h1 className="text-[#71B100]">We are Offering the Best Real Estate</h1>
                    <p className="text-3xl lg:text-4xl font-bold">Property Services</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5 mt-10">
                    <div className="card border-2 hover:border-[#71B100]">
                        <div className="card-body items-center text-center">
                            <img className="w-20" src="https://i.ibb.co/b5xjfWb/house-1.png" alt="" />
                            <h2 className="card-title">Homes For Sale</h2>
                            <p>Here are the beautiful homes that are <br /> available for sale.</p>
                        </div>
                    </div>
                    <div className="card border-2 hover:border-[#71B100]">
                        <div className="card-body items-center text-center">
                            <img className="w-20" src="https://i.ibb.co/5MzMbnP/house-2.png" alt="" />
                            <h2 className="card-title">Homes For Rent</h2>
                            <p>Comfortable & Luxury homes are <br /> available for rent.</p>
                        </div>
                    </div>
                    <div className="card border-2 hover:border-[#71B100]">
                        <div className="card-body items-center text-center">
                            <img className="w-20" src="https://i.ibb.co/j9YfJBp/house-3.png" alt="" />
                            <h2 className="card-title">Homes For Mortgage</h2>
                            <p>Homes at the point of using normal <br /> distribution of letters.</p>
                        </div>
                    </div>
                    <div className="card border-2 hover:border-[#71B100]">
                        <div className="card-body items-center text-center">
                            <img className="w-20" src="https://i.ibb.co/HPjvvG4/apartment.png" alt="" />
                            <h2 className="card-title">Homes For Buyer</h2>
                            <p>Buyers of the Properties are available <br /> with us.</p>
                        </div>
                    </div>
                    <div className="card border-2 hover:border-[#71B100]">
                        <div className="card-body items-center text-center">
                            <img className="w-20" src="https://i.ibb.co/zVsLggr/market.png" alt="" />
                            <h2 className="card-title">Price Analysis</h2>
                            <p>Comfortable & Luxury homes are <br /> available for rent.</p>
                        </div>
                    </div>
                    <div className="card border-2 hover:border-[#71B100]">
                        <div className="card-body items-center text-center">
                            <img className="w-20" src="https://i.ibb.co/M6J6Qfm/house-4.png" alt="" />
                            <h2 className="card-title">Homes On Lease</h2>
                            <p>Homes at the point of using normal <br /> distribution of letters.</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default AboutUs;


