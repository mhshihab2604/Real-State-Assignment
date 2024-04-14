import {Link, useLoaderData, useParams} from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { PiSquareLogoBold } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTagFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Helmet } from 'react-helmet';

const ResidentialDetails = () => {

    const residentials = useLoaderData();
    const { id } = useParams();
    const residential = residentials.find(residential => residential.id === id);
    console.log(residential);
    return (
        <div>
            <Helmet>
                <title>View Details</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img
                        src={residential.image_url}
                        className="rounded-lg w-[300px] lg:w-[500px] h-[350px] lg:h-[600px] bg-base-200 p-5"/>
                    <div className="space-y-7 border-2 rounded-lg p-2 shadow-2xl border-x-[#71B100]">
                        <h1 className="text-2xl text-center lg:text-3xl font-bold">{residential.estate_title}</h1>
                        <div className="flex justify-around  font-medium">
                            <h1 className="rounded-full p-1 flex items-center gap-1"><BsFillTagFill className="text-[#71B100]"></BsFillTagFill>{residential.segment_name}</h1>
                            <p className="text-[#131313CC] font-medium  flex items-center gap-1"><FaUserAlt className="text-[#71B100]"></FaUserAlt>{residential.landlord}</p>
                            <h1 className="rounded-full p-1 flex items-center gap-1"><MdDateRange className="text-[#71B100]"></MdDateRange>{residential.year_of_build}Year</h1>
                        </div>
                        <hr />
                        <div className="flex justify-around  font-medium">
                            <h1 className="rounded-full bg-[#F3F3F3] p-2 font-medium">Hot Offer</h1>
                            <h1 className="rounded-full bg-[#F3F3F3] p-2 font-medium">{residential.status}</h1>
                        </div>
                        <div className="space-y-4">
                            <div className="text-center space-y-2">
                                <h1 className="text-lg font-semibold">Our facilities</h1>
                                <p>Facilities provide essential amenities for <br /> convenience and satisfaction.</p>
                            </div>
                            <div className="flex justify-around items-center">
                                <h1 className="flex items-center"><GoDotFill></GoDotFill>{residential.facilities[0]}</h1>
                                <h1 className="flex items-center"><GoDotFill></GoDotFill>{residential.facilities[1]}</h1>
                                <h1 className="flex items-center"><GoDotFill></GoDotFill>{residential.facilities[2]}</h1>
                            </div>
                        </div>
                        <div className="flex justify-between bg-[#F3F3F3] p-2 text-[#131313CC] font-semibold">
                            <p>{residential.price}</p>
                            <p className="flex items-center gap-1"><PiSquareLogoBold></PiSquareLogoBold>{residential.square_feet}SqFt</p>
                        </div>
                        <Link to="/"><button className="btn w-full text-white bg-[#71B100]">View Property</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ResidentialDetails;