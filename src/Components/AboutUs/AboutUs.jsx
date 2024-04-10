
const AboutUs = () => {
    return (
        <div>
            <div className="bg-[rgba(26,29,31,0.70)]">
                    <h1 className="text-2xl lg:text-4xl font-bold text-white text-center">About Us</h1>
            </div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container grid gap-6 mx-auto  items-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                        <span className="block mb-2 dark:text-[#71B100]">About Shina</span>
                        <h1 className="text-4xl font-extrabold dark:text-gray-900">Who We Are</h1>
                        <p className="my-8">
                            Shina is a premium WordPress theme for real estate agents where modern <br /> aesthetics are combined with tasteful simplicity and where the ease of use is <br /> achieved without compromise in your ability to customise the design.
                        </p>
                        <p className="my-8">
                        Whether you are a real estate agent looking to build a website for your company or a <br /> web developer seeking a perfect WordPress theme for your next project, you are certain <br /> to appreciate the numerous features and benefits that our theme provides.
                        </p>
                    </div>
                    <img src="https://i.ibb.co/hKTPKyd/vu-anh-Ti-VPTYCG-3-E-unsplash.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
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