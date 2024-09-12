import React from "react";
import Image from "next/image";
import Img1 from "../public/bankapp.png";
import Img2 from "../public/blogapp.png";
import Img3 from "../public/ecotrack.png";

const Projects = () => {
    return (
        <section className="w-[900px] mt-10 py-10 relative">
            <div className="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
            <h1 className="font-manrope font-medium text-4xl text-white uppercase mb-10 text-center">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-center flex-col gap-8 w-full group">
                    <div className="block">
                        <Image 
                            className="rounded-3xl object-cover" 
                            src={Img1}
                            alt="Project Achievements of Sketch"   
                        />
                    </div>
                    <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                        <div className="block">
                            <h4 className="text-2xl font-manrope font-semibold text-white mb-1">Bank App</h4>
                            <p className="font-medium text-sm text-gray-400">Python, Flask, HTML Templates</p>
                        </div>
                        <button
                            className=" border border-white py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black group-hover:border-[#007ced]">
                            <svg className="stroke-white transition-all duration-300 group-hover:stroke-[#007ced]"
                                xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                fill="none">
                                <path
                                    d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                                    stroke="" stroke-width="1.6" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="group flex items-center flex-col gap-8 w-full">
                    <div className="block">
                        <Image className="rounded-3xl object-cover" src={Img2} alt="Project Achievements of Figma" />
                    </div>
                    <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                        <div className="block">
                            <h4 className="text-2xl font-manrope font-semibold text-white mb-1">Blog App</h4>
                            <p className="font-medium text-lg text-gray-400">Next.js, GraphQL, Tailwind CSS
                            </p>
                        </div>
                        <button
                            className=" border border-white py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black group-hover:border-[#007ced]">
                            <svg className="stroke-white transition-all duration-300 group-hover:stroke-[#007ced]"
                                xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                fill="none">
                                <path
                                    d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                                    stroke="" stroke-width="1.6" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className="group flex items-center flex-col gap-8 w-full md:w-1/2 mx-auto md:col-span-2 lg:col-span-1 lg:w-full">
                    <div className="block">
                        <Image className="rounded-3xl object-cover" src={Img3} alt="Project Achievements of Frame.io" />
                    </div>
                    <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                        <div className="block">
                            <h4 className="text-2xl font-manrope font-semibold text-white mb-1">Waste Management App</h4>
                            <p className="font-medium text-lg text-gray-400">MERN, Tailwind CSS
                            </p>
                        </div>
                        <button
                            className=" border border-white py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black group-hover:border-[#007ced]">
                            <svg className="stroke-white transition-all duration-300 group-hover:stroke-[#007ced]"
                                xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16"
                                fill="none">
                                <path
                                    d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                                    stroke="" stroke-width="1.6" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Projects;
