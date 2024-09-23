import React from "react";
import Image from "next/image";
import Link from "next/link";

import Img1 from "../public/bankapp.png";
import Img2 from "../public/blogapp.png";
import Img3 from "../public/FWG.png";
import Img4 from "../public/ecotrack.png";

import html from "../public/HTML5.png";
import python from "../public/Python.png";
import flask from "../public/Flask.png";
import next from "../public/Next.js.png";
import graph from "../public/GraphQL.png";
import tailwind from "../public/Tailwind CSS.png";
import react from "../public/React.png";
import vite from "../public/Vite.js.png";
import mongo from "../public/MongoDB.png";
import express from "../public/Express.png";
import node from "../public/Node.js.png";
import js from "../public/JavaScript.png";

const Projects = () => {
    return (
        <section className="max-w-[800px] mt-10 py-10 relative">
            <div className="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto space-y-6">
                <h1 className="font-medium text-4xl text-white uppercase mb-10 text-center">Projects</h1>
                <div className="bg-slate-900 ring-1 ring-inset ring-gray-500/10 rounded-md sm:flex justify-start">
                    <div className="shrink-0 relative w-full rounded-t-md overflow-hidden sm:rounded-s-md sm:max-w-60 md:rounded-se-none md:max-w-xs">
                        <Image 
                            className="size-full top-0 start-0 object-center hover:scale-105 duration-500" 
                            src={Img1} 
                            alt="bank app" 
                        />
                    </div>
                    <div className="flex flex-wrap justify-center mx-auto text-center">
                        <div className="p-4 flex flex-col h-full sm:p-7">
                        <h3 className="text-lg font-bold text-gray-200">
                            Simple Bank App
                        </h3>
                        <p className="mt-3 flex gap-3 justify-center items-center bg-slate-800 p-2 rounded-md">
                            <Image src={python} alt="Python" width={30} height={30} />
                            <Image src={html} alt="HTML" width={30} height={30} />
                            <Image src={flask} alt="Flask" width={30} height={30} />
                            <Image src={tailwind} alt="Tailwind" width={30} height={30} />
                        </p>
                        <div className="mt-5 sm:mt-auto text-xs hover:text-white duration-500">
                            <Link 
                                href="https://github.com/1deyce/BankApp-flask" 
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Source Code
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 ring-1 ring-inset ring-gray-500/10 rounded-md sm:flex">
                    <div className="shrink-0 relative w-full rounded-t-md overflow-hidden sm:rounded-s-md sm:max-w-60 md:rounded-se-none md:max-w-xs">
                        <Link 
                            href="https://modern-blog-app-ten.vercel.app/"               
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image 
                                className="size-full top-0 start-0 object-center hover:scale-105 duration-500" 
                                src={Img2} 
                                alt="blog app" 
                            />
                        </Link>
                    </div>
                    <div className="flex flex-wrap pl-3 justify-center mx-auto text-center">
                        <div className="p-4 flex flex-col h-full sm:p-7">
                        <h3 className="text-lg font-bold text-gray-200">
                            Splattr Blog
                        </h3>
                        <p className="text-xs italic">Modern Blog App</p>
                        <p className="mt-3 flex gap-3 justify-center items-center bg-slate-800 p-2 rounded-md">
                            <Image src={next} alt="Next.js" width={30} height={30} />
                            <Image src={js} alt="JS" width={30} height={30} className="rounded-md" />
                            <Image src={graph} alt="GraphQL" width={30} height={30} />
                            <Image src={tailwind} alt="Tailwind" width={30} height={30} />
                        </p>
                        <div className="pt-4 sm:mt-auto text-xs hover:text-white duration-500">
                            <Link 
                                href="https://github.com/1deyce/modern-blog-app/tree/main/cms_blog" 
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Source Code
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 ring-1 ring-inset ring-gray-500/10 rounded-md sm:flex">
                    <div className="shrink-0 relative w-full rounded-t-md overflow-hidden sm:rounded-s-md sm:max-w-60 md:rounded-se-none md:max-w-xs">
                        <Link 
                            href="https://fitnesswithgaby.co.za/"               
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image 
                                className="size-full top-0 start-0 object-cover hover:scale-105 duration-500" 
                                src={Img3} 
                                alt="fitness website" 
                            />
                        </Link>
                    </div>
                    <div className="flex flex-wrap pl-3 justify-center mx-auto text-center">
                        <div className="p-4 flex flex-col h-full sm:p-7">
                        <h3 className="text-lg font-bold text-gray-200">
                            Fitness With Gaby
                        </h3>
                        <p className="text-xs italic">Gym & Fitness Website</p>
                        <p className="mt-3 mb-3 mx-auto flex gap-3 justify-center items-center bg-slate-800 p-2 rounded-md">
                            <Image src={vite} alt="Vite" width={30} height={30} />
                            <Image src={react} alt="React" width={30} height={30} />
                            <Image src={js} alt="JS" width={30} height={30} className="rounded-md" />
                            <Image src={tailwind} alt="Tailwind" width={30} height={30} />
                        </p>
                        <div className="mt-5 sm:mt-auto text-xs hover:text-white duration-500">
                            <Link 
                                href="https://github.com/1deyce/Gym-website" 
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Source Code
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 ring-1 ring-inset ring-gray-500/10 rounded-md sm:flex">
                    <div className="shrink-0 relative w-full rounded-t-md overflow-hidden sm:rounded-s-md sm:max-w-60 md:rounded-se-none md:max-w-xs">
                        <Link 
                            href="https://ecotrack-solutions.netlify.app/"               
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image 
                                className="size-full top-0 start-0 object-center hover:scale-105 duration-500" 
                                src={Img4}
                                alt="Waste Management App"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-wrap pl-3 justify-center mx-auto text-center">
                        <div className="p-4 flex flex-col h-full sm:p-7">
                        <h3 className="text-lg font-bold text-gray-200">
                            EcoTrack Solutions
                        </h3>
                        <p className="text-xs italic">Waste Management & Tracking App</p>
                        <p className="mt-3 flex gap-3 justify-center items-center bg-slate-800 p-2 rounded-md">
                            <Image src={react} alt="React" width={30} height={30} />
                            <Image src={js} alt="JS" width={30} height={30} className="rounded-md" />
                            <Image src={node} alt="Node.js" width={30} height={30} />
                            <Image src={mongo} alt="MongoDB" width={30} height={30} />
                            <Image src={express} alt="Express.js" width={30} height={30} />
                            <Image src={tailwind} alt="Tailwind" width={30} height={30} />
                        </p>
                        <div className="pt-4 sm:mt-auto text-xs hover:text-white duration-500">
                            <Link 
                                href="https://github.com/1deyce/EcoTrack" 
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Source Code
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
