import { IoIosCall } from "react-icons/io";
import { BiSolidMessage } from "react-icons/bi";
import { GoClockFill } from "react-icons/go";
import Marquee from "react-fast-marquee";
const Footer = () => {
    return (
        <div>
            <div className='mt-40 mx-auto bg-[#F5F5F5] pb-10'>
                <Marquee speed={100}>
                    <img src="https://i.ibb.co/xHgmC4h/estate1.png" alt="" />
                    <img src="https://i.ibb.co/z85FrQb/estate2.png" alt="" />
                    <img src="https://i.ibb.co/jhC6j9H/estate3.png" alt="" />
                    <img src="https://i.ibb.co/NxKN6y0/estate4.png" alt="" />
                    <img src="https://i.ibb.co/ftkBpRx/estate5.png" alt="" />
                </Marquee>
            </div>
            <footer className="p-10 bg-[#1A1D1F] text-white">
                <div className="footer items-center max-w-7xl mx-auto">
                    <aside className="space-y-5">
                        <p className="text-[#71B100]">Contact us</p>
                        <h1 className="text-2xl">Get in Touch</h1>
                        <p>Nafshi Real Estate brings wide range of choice,steadily updated <br />property list and market trend for you to figure out your right <br />decision.It is a premium WordPress theme for real estate where <br /> modern aesthetics are combined with tasteful simplicity.</p>
                        <div>
                            <h1 className="flex items-center gap-2"><IoIosCall className="text-[#71B100]"></IoIosCall>Call us 1-800-555-1234</h1>
                            <h1 className="flex items-center gap-2"><BiSolidMessage className="text-[#71B100]"></BiSolidMessage>info@example.com</h1>
                            <h1 className="flex items-center gap-2"><GoClockFill className="text-[#71B100]"></GoClockFill>Open House on the 24th, - 12 mid day to 5 pm.</h1>
                        </div>
                        <button className="bg-[#71B100] p-4 text-white">Schedule A Visit</button>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">All Properties</a>
                        <a className="link link-hover">Login</a>
                        <a className="link link-hover">Register</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title"> APPS</h6>
                        <a className="link link-hover">Mac</a>
                        <a className="link link-hover">Windows</a>
                        <a className="link link-hover">iPhone</a>
                        <a className="link link-hover">Android</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">MANAGEMENT</h6>
                        <a className="link link-hover">Estate business</a>
                        <a className="link link-hover">Estate Window</a>
                        <a className="link link-hover">Estate Iphone</a>
                        <a className="link link-hover">Estate Android</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;