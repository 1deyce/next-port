import Experience from "@/components/experience";
import Header from "../components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
    return (
        <main className="relative flex flex-col justify-center items-center">
            <Header />
            <Hero />
            <Experience />
            <Projects />
            {/* <Footer /> */}
        </main>
    );
}
