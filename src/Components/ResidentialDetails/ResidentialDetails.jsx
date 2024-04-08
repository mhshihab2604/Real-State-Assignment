import {useLoaderData, useParams} from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { PiSquareLogoBold } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTagFill } from "react-icons/bs";
const ResidentialDetails = () => {
    const residentials = useLoaderData();
    const { id } = useParams();
    const residential = residentials.find(residential => residential.id === id);
    console.log(residential);
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img
                        src={residential.image_url}
                        className="rounded-lg w-[300px] lg:w-[500px] h-[350px] lg:h-[650px] bg-base-200 p-5"/>
                    <div className="space-y-7">
                        <h1 className="text-3xl text-center lg:text-5xl font-bold">{residential.estate_title}</h1>
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
                        <div className="flex justify-between bg-[#F3F3F3] p-2 text-[#131313CC] font-semibold">
                            <p>{residential.price}</p>
                            <p className="flex items-center gap-1"><PiSquareLogoBold></PiSquareLogoBold>{residential.square_feet}SqFt</p>
                        </div>
                        <button className="btn w-full text-white bg-[#71B100]">View Property</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ResidentialDetails;