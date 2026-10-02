import { Globe, GraduationCap } from "lucide-react";

export function About() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-6xl flex flex-col items-center">
                <h2 className="self-start text-2xl sm:text-3xl md:text-4xl font-semibold text-left lg:mb-5 px-1">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="max-w-4xl flex flex-col gap-5">
                    <p className="text-foreground text-xs sm:text-base px-2">
                        My background is in networking — CCNA-level topologies, routing protocols, and infrastructure security — which gave me a solid foundation in how systems actually works. From there I moved into software and backend development.
                    </p>
                    <p className="text-foreground text-xs sm:text-base px-2">
                        My main focus is backend: Python and FastAPI for APIs and services, and Rust for systems-level and performance-critical work — Severus, my P2P encrypted messenger, is built entirely in Rust. I also work comfortably across the stack with React and TypeScript when a project needs a frontend.
                    </p>
                    <p className="text-foreground text-xs sm:text-base px-2">
                        <span className="inline-flex items-center gap-1">
                            <GraduationCap size={15} /> High School Diploma (Bagrut) — ICT specialty (10 units) · CCNA-level networking
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <Globe size={15} /> Russian (native) · English (B2) · Hebrew (B2)
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}