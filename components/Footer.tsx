import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";



const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10 relative" >
            {/* background grid */}
            <div className="w-full absolute left-0 -bottom-72 min-h-96" id="contact">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Let&apos;s turn your <span className="text-purple">data</span> into action.
                </h1>
                <a href="mailto:aryalsuwan.2003@gmail.com">
                    <MagicButton
                        title="Get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>


            </div>

            {/* Footer Bottom Section */}
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base lg:text-sm md:font-normal text-sm font-light">
                    Copyright © 2024 Suwan Aryal
                </p>

                {/* Social Media Links */}
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((info) => (
                        <a
                            key={info.id}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                        >
                            <img src={info.img} alt="icon" width={20} height={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
