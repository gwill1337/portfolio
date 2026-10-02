import { About } from "@/components/About";
import { ContactInfo } from "@/components/ContactInfo";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectSection";
import { Reveal } from "@/components/Reveal";
import { SkillsSection } from "@/components/SkillsSection";

export default function Page() {
    return (

        <div>
            <div className="flex justify-center max-w-4xl mx-auto mt-35">
                <Hero />
            </div>
            <div className="mt-35">
                <section id="skills" className="scroll-mt-20">
                    <SkillsSection />
                </section>
            </div>
            <div className="mt-35">
                <section id="about" className="scroll-mt-20">
                    <Reveal> <About /> </Reveal>
                </section>
            </div>
            <div className="mt-35 mb-35 ">
                <section id="projects" className="scroll-mt-20">
                    <Reveal> <ProjectsSection /> </Reveal>
                </section>
            </div>
            <div className="mt-35 mb-45">
                <section id="contact" className="scroll-mt-20">
                    <Reveal> <ContactInfo /> </Reveal>
                </section>
            </div>
        </div>
    )
}