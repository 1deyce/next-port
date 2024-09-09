import { CgHello } from "react-icons/cg";
import IconCloud from "./magicui/icon-cloud";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "tailwindcss",
    "vuedotjs",
    "python",
    "nodedotjs",
    "express",
    "nextdotjs",
    "amazonaws",
    "firebase",
    "git",
    "jira",
    "github",
    "visualstudiocode",
    "figma",
    "mongodb",
];

const Hero = () => {
    return (
        <section className="mt-6 w-[800px] rounded-lg p-10">
            <div className="flex justify-center items-center rounded-md">
                <h1 className="text-4xl text-white uppercase">
                    Hi, I&apos;m Keenan
                </h1>
                <CgHello className="ml-2 w-8 h-8 text-[#007ced]" />
            </div>
            <div className="flex justify-center items-center mt-2 mb-4">
                <p className="text-xl text-[#007ced]">Full Stack Developer</p>
            </div>
            <div className="flex justify-center items-center mt-6">
                <ul className="flex flex-row gap-2">
                    <li className="text-2xl hover:text-[#007ced]">
                        <a href="https://www.linkedin.com/in/keenan-deyce">
                            <RiLinkedinBoxFill />
                        </a>
                    </li>
                    <li className="text-2xl hover:text-[#007ced]">
                        <a href="https:www.github.com/1deyce">
                            <RiGithubFill />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-4 h-full">
                <IconCloud iconSlugs={slugs} />
            </div>
        </section>
    );
};

export default Hero;
