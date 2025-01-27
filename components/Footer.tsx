"use client";

import { IoCopyOutline } from "react-icons/io5";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
import animationData from "@/data/confetti.json";


const Footer = () => {
    const [copied, setCopied] = useState(false);

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () => {
        const text = "aryalsuwan.2003@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    const words = [
        { text: "Let's", className: "text-center text-[10px] sm:text-5xl md:text-5xl lg:text-5xl" },
        { text: "turn", className: "text-center text-[10px] sm:text-5xl md:text-5xl lg:text-5xl" },
        { text: "your", className: "text-center text-[10px] sm:text-5xl md:text-5xl lg:text-5xl" },
        { text: "data", className: "text-center text-purple sm:text-5xl text-[10px] md:text-5xl lg:text-5xl" },
        { text: "into", className: "text-center text-[10px] sm:text-5xl md:text-5xl lg:text-5xl" },
        { text: "action", className: "text-center text-[10px] sm:text-5xl md:text-5xl lg:text-5xl" },
    ];

    return (
        <footer className="w-full pt-20 pb-10 relative">

            
                {/* background grid */}
                <div className="w-full absolute left-0 -bottom-72 min-h-96" id="contact">
                    <img
                        src="/footer-grid.svg"
                        alt="grid"
                        className="w-full h-full opacity-50"
                    />
                </div>

                
                <div className="flex flex-col items-center">

                    <TypewriterEffect words={words} />

                    <div className="mt-5 relative">
                        <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                            
                            <Lottie options={defaultOptions} height={200} width={400} />
                        </div>

                        <MagicButton
                            title={copied ? "Email is Copied!" : "Copy my email address"}
                            icon={<IoCopyOutline />}
                            position="left"
                            handleClick={handleCopy}
                            otherClasses="!bg-[#161A31]"
                        />
                    </div>
                </div>

                
                <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                    <p className="md:text-base lg:text-sm md:font-normal text-sm font-light">
                        Copyright © 2024 Suwan Aryal
                    </p>

                    
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
