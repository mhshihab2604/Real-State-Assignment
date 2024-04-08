import { FaUserAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { PiSquareLogoBold } from "react-icons/pi";
import { BsFillTagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
const Residential = ({ residential }) => {
    const {id,estate_title, image_url, location, landlord, year_of_build, segment_name, square_feet, description,price,status} = residential;
    return (
        <div>
            <div className="card w-full h-full card-compact bg-base-100 shadow-xl border-2 rounded-lg p-4 space-y-3">
                <div>
                    <figure><img className="rounded-t-xl h-52 w-full" src={image_url} alt="Shoes"/></figure>
                    <div className="flex justify-around items-center bg-black rounded-b-xl text-white font-medium text-sm">
                            <h1 className="rounded-full p-1 flex items-center gap-1"><BsFillTagFill className="text-[#71B100]"></BsFillTagFill>{segment_name}</h1>
                            <h1 className="rounded-full p-1 flex items-center gap-1"><FaUserAlt className="text-[#71B100]"></FaUserAlt> {landlord}</h1>
                            <h1 className="rounded-full p-1 flex items-center gap-1"><MdDateRange className="text-[#71B100]"></MdDateRange>{year_of_build}Year</h1>
                    </div>
                </div>
                <div className="flex justify-around  font-medium">
                        <h1 className="rounded-full bg-[#F3F3F3] p-2 font-medium">Hot Offer</h1>
                        <h1 className="rounded-full bg-[#F3F3F3] p-2 font-medium">{status}</h1>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{estate_title}</h2>
                    <h2 className="text-[#7EB35A] flex items-center gap-1"><IoLocationSharp className="text-[#71B100]"></IoLocationSharp>{location}</h2>
                    <p className="text-[#131313CC] font-medium">{description}</p>
                </div>
                <hr className="border-dashed" />
                <div className="flex justify-between bg-[#F3F3F3] p-2 text-[#131313CC] font-semibold">
                    <p>{price}</p>
                    <p className="flex items-center gap-1"><PiSquareLogoBold></PiSquareLogoBold>{square_feet}SqFt</p>
                </div>
                <Link to={`/residential/${id}`}>
                    <button className="btn w-full text-white bg-[#71B100]">View Properties</button>
                </Link>
                
            </div>
        </div>
    );
};

export default Residential;