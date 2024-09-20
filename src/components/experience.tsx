import React from "react";
import Image from "next/image";

import uni from "../public/uwc.jpeg";
import sirius from "../public/sirius.jpeg";
import young from "../public/younglings.jpeg";
import absa from "../public/absa.jpeg";

const Experience = () => {
    return (
        <section className="max-w-[800px] p-8 mt-10 sm:p-4">
            <h1 className="mb-10 flex justify-center text-center text-4xl text-white uppercase">
                Previously
            </h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <Image src={uni} alt="University of the Western Cape" width={50} height={50} className="m-2 rounded-lg" />
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2019 - 2021</time>
                        <div className="text-lg font-semibold text-[#007ced]">
                            University of the Western Cape
                        </div>
                        <p className="text-sm">Completed a BA Degree in Sport, Recreation & Exercise
                        Science. Major: Management.</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <Image src={sirius} alt="Sirius Support" width={50} height={50} className="m-2 rounded-lg" />
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">
                            Jun 2022 - Dec 2022
                        </time>
                        <div className="text-lg font-semibold text-[#007ced]">
                            Sirius Support
                        </div>
                        <p className="text-sm">Worked as a Customer Service Agent, providing live text
                        technical support to a diverse client base.</p>
                        <br />
                        <span className="inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            Customer Service
                        </span>
                    </div>

                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <Image src={young} alt="Younglings Africa" width={50} height={50} className="m-2 rounded-lg" />
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2023</time>
                        <div className="text-lg font-semibold text-[#007ced]">
                            Younglings Africa
                        </div>
                        <p className="text-sm">Full Stack Developer Intern. Agile Workflow. Contributed
                        to various projects, utilizing the MERN stack to create
                        solutions.</p>
                        <br />
                        <span className="mr-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            HTML
                        </span>
                        <span className="mr-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            CSS
                        </span>
                        <span className="mr-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            JS
                        </span>
                        <span className="mr-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            React
                        </span>
                        <span className="mr-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            Node.js
                        </span>
                        <span className="mt-1 mr-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            MongoDB
                        </span>
                        <span className="mt-1 mr-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            Express.js
                        </span>
                        <span className="mt-1 mr-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            Figma
                        </span>
                        <span className="mr-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            Tailwind
                        </span>
                        <span className="mt-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            Firebase
                        </span>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <Image src={absa} alt="Absa" width={50} height={50} className="m-2 rounded-lg" />
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">
                            Jan 2024 - Jul 2024
                        </time>
                        <div className="text-lg font-semibold text-[#007ced]">
                            ABSA Group
                        </div>
                        <p className="text-sm">Associate AWS Developer. Developed serverless functions
                        using AWS Lambda, leveraging Node.js to interact with
                        the AWS SDK and automate AWS-related tasks.</p>
                        <br />
                        <span className="mr-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            AWS
                        </span>
                        <span className="mr-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            Amazon Connect
                        </span>
                        <span className="mt-1 sm:mt-0 mr-1 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-xs font-medium text-slate-500 ring-1 ring-inset ring-gray-500/10">
                            Node.js
                        </span>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Experience;
