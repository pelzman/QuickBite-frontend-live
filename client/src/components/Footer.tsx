// import React from 'react'
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="bg-[#000] mt-[50px] py-[20px] ">
            <div>
                <Link to="/"><img src={Logo} alt="" className="w-[100px] h-[100px]" /></Link>
            </div>

            <div className="footerLeft mx-6 space-y-4 md:space-y-0 md:flex md:gap-16 md:items-center md:justify-end">
                <div className="footerFeatures">
                    <h5 className="text-[#836868] text-[20px] md:text-[i6px]leading-[22px] font-bold">Social</h5>
                    <a className="no-underline " href="http://">
                        <p className="text-[#FFF] text-[16px] font-normal not-italic">Facebook</p>
                    </a>
                    <a className="no-underline " href="http://">
                        <p className="text-[#FFF] text-[16px] font-normal not-italic">Instagram</p>
                    </a>
                    <a className="no-underline" href="http://">
                        <p className="text-[#FFF] text-[16px] font-normal not-italic">LinkedIn</p>
                    </a>
                </div>

                <div className="footerFeatures">
                    <h5 className="text-[#836868] text-[20px] md:text-[i6px]leading-[22px] font-bold">Get help</h5>
                    <p className="text-[#FFF] text-[16px] font-normal not-italic">Partner with us</p>
                    <p className="text-[#FFF] text-[16px] font-normal not-italic">Add your restaurant</p>
                    <p className="text-[#FFF] text-[16px] font-normal not-italic">Sign up to deliver</p>
                </div>

                <div>
                    <h5 className="text-[#836868] text-[20px] md:text-[16px]leading-[22px] font-bold">Read our Blog</h5>
                    <p className="text-[#FFF] text-[16px] font-normal not-italic">Buy gift card</p>
                    <p className="text-[#FFF] text-[16px] font-normal not-italic">Restaurants nearby</p>
                    <p className="text-[#FFF] text-[16px] font-normal not-italic">Save on the first order</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;