import {useEffect, useState} from "react";
import Residential from "../Residential/Residential"
const Residentials = () => {
    const [residentials, setResidentials] = useState([]);

    useEffect(() => {
        fetch("state.json")
            .then(res => res.json())
            .then(data => setResidentials(data));
    }, [])
    return (
        <div className="max-w-6xl mx-auto">
            <p className="text-center text-[#71B100] mt-20">Our Featured Properties For Sale and Rent</p>
            <h2 className="text-3xl lg:text-4xl font-bold  text-center mx-auto">Properties For Sale & Rent</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-2">
                {residentials.map(residential => <Residential key={residential.id} residential={residential}></Residential>)}
            </div>
        </div>
    );
};

export default Residentials;