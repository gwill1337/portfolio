"use client";
import { handleScroll } from "@/utils/handleScroll";

export function Hero() {

    return (
        <div className="flex flex-col items-center">
            <div
                className="flex flex-col items-center bg-card/35 backdrop-blur-sm border border-border/20 rounded-2xl shadow-xl pt-5 pb-2.5 px-2 animate-fade-in mx-2 md:mx-auto"
                style={{ animationDelay: "0.1s" }}>
                <h1
                    className="font-extrabold text-foreground text-3xl sm:text-[40px] animate-fade-in"
                    style={{ animationDelay: "0.1s" }}
                >
                    Hi, <span className="text-primary">I'm </span> Elisey Ar
                </h1>
                <h2
                    className="font-semibold text-foreground text-xl sm:text-2xl pt-2 my-1 max-w-3xl w-full text-center animate-fade-in"
                    style={{ animationDelay: "0.4s" }}
                >
                    Full-Stack Developer · Israel · Working worldwide </h2>
                <p className="font-medium text-center my-1 text-base sm:text-[18px] w-11/12 sm:w-3/4 animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                >
                    I build web apps and MVPs for startups and small businesses.
                </p>
                <p className="font-medium text-center text-sm sm:text-base w-11/12 sm:w-3/4 animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                >
                    From idea to a deployed product: Python/FastAPI backend,
                    Next.js frontend, Docker and CI/CD. Clear scope, regular updates,
                    working software.
                </p>
                <nav className="flex gap-3 mt-6 items-center ">
                    <a
                        key="#contact"
                        href="#contact"
                        onClick={(e) => handleScroll(e, "#contact")}
                        className="px-1.5 py-0.75 rounded text-xl md:text-2xl font-medium text-foreground hover:text-primary hover:bg-black/10 dark:hover:bg-white/10 transition animate-fade-in"
                        style={{ animationDelay: "0.6s" }}
                    >
                        [ Email me ]
                    </a>
                    <a
                        key="#projects"
                        href="#projects"
                        onClick={(e) => handleScroll(e, "#projects")}
                        className="px-1.5 py-0.75 rounded text-xl md:text-2xl font-medium text-foreground hover:text-primary hover:bg-black/10 dark:hover:bg-white/10 transition animate-fade-in"
                        style={{ animationDelay: "0.6s" }}
                    >
                        [ See projects ]
                    </a>
                </nav>
            </div>
        </div>
    )
}