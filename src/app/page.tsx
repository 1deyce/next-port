import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
    return (
        <main className="relative flex flex-col justify-center items-center">
            <Hero />
            <Experience />
            <Projects />
            <Contact />
        </main>
    );
}
