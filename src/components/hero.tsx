import Link from "next/link";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import { CgHello } from "react-icons/cg";
import IconCloud from "./magicui/icon-cloud";
import { FadeText } from "@/components/magicui/fade-text";

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
        <section className="mt-6 w-[800px] p-10 ">
            <div className="flex justify-center items-center rounded-md">
                <h1 className="text-4xl text-white uppercase">
                    <FadeText
                        className="text-4xl font-bold text-black dark:text-white"
                        direction="left"
                        framerProps={{
                            show: { transition: { delay: 0.2 } },
                        }}
                        text="Hi, I&apos;m Keenan"
                    />
                </h1>
                <CgHello className="ml-2 w-8 h-8 text-[#007ced]" />
            </div>
            <div className="flex justify-center items-center mt-2 mb-4">
                <FadeText
                    className="text-[#007ced] text-xl"
                    direction="up"
                    framerProps={{
                        show: { transition: { delay: 0.6 } },
                    }}
                    text="Full Stack Developer"
                />
            </div>
            <div className="flex justify-center items-center mt-6">
                <ul className="flex flex-row gap-2">
                    <li className="text-2xl hover:text-[#007ced] duration-500">
                        <Link title="LinkedIn" href="https://www.linkedin.com/in/keenan-deyce">
                            <RiLinkedinBoxFill />
                        </Link>
                    </li>
                    <li className="text-2xl hover:text-[#007ced] duration-500">
                        <Link title="GitHub" href="https://www.github.com/1deyce">
                            <RiGithubFill />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="relative bg-slate-800 mt-5 rounded-full flex items-center justify-center overflow-hidden pb-20 pt-4 h-full shadow drop-shadow-xl shadow-slate-950">
                <IconCloud iconSlugs={slugs} />
            </div>
        </section>
    );
};

export default Hero;
