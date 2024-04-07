
const Residential = ({ residential }) => {
    const {estate_title, image_url, landlord, year_of_build, segment_name, square_feet, description,price,status} = residential;
    return (
        <div>
            <div className="card w-full h-full card-compact bg-base-100 shadow-xl border-2 rounded-lg p-5 space-y-3">
                <div>
                    <figure><img className="rounded-t-xl h-52 w-full" src={image_url} alt="Shoes"/></figure>
                    <div className="flex justify-around items-center bg-black rounded-b-xl text-white font-semibold">
                            <h1 className="rounded-full p-1">{segment_name}</h1>
                            <h1 className="rounded-full p-1">{landlord}</h1>
                            <h1 className="rounded-full p-1">{year_of_build}</h1>
                    </div>
                </div>
                <div className="flex justify-around  font-medium">
                        <h1 className="rounded-full bg-[#F3F3F3] p-2 font-medium">Hot Offer</h1>
                        <h1 className="rounded-full bg-[#F3F3F3] p-2 font-medium">{status}</h1>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{estate_title}</h2>
                    <p className="text-[#131313CC] font-medium">{description}</p>
                </div>
                <hr className="border-dashed" />
                <div className="flex justify-between bg-[#F3F3F3] p-2 text-[#131313CC] font-semibold">
                    <p>{price}</p>
                    <p className="flex items-center gap-4">{square_feet}SqFt</p>
                </div>
                <button className="btn w-full text-white bg-[#71B100]">Details</button>
            </div>
        </div>
    );
};

export default Residential;