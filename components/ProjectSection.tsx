import { IProject } from "@/Types/IProject";
import { ProjectCard } from "./ProjectCard";

const projects: IProject[] = [
    {
        name: "Severus",
        description: "Self-hosted lightweight P2P messenger with  TLS, E2EE, and Iroh QUIC transport.",
        large_description: "Severus is a private P2P messenger built with Rust, Tauri 2, and React. It features Noise E2EE, custom TLS with TOFU security, dual connection modes (TCP and QUIC), and binary packet serialization for fast, secure messaging.",
        image: "/projects/Severus_host.gif",
        stack: ["Rust", "Tokio", "axum", "iroh", "E2EE", "Tauri"],
        link: "https://github.com/gwill1337/Severus",
    },
    {
        name: "MONA",
        description: "Monitoring selfhosted service with machine learning.",
        large_description: "MONA is a Kubernetes-native monitoring platform powered by an async FastAPI backend, Celery workers, and Redis task management. It executes Isolation Forest models for real-time metrics anomaly detection, features RBAC security with Redis sessions, and integrates PostgreSQL for persistent analytics storage.",
        image: "/projects/mona.gif",
        stack: ["Python", "FastAPI", "PostgreSQL", "scikit-learn"],
        link: "https://github.com/gwill1337/MONA",
        demo: "https://mona-demo-gwill1337.vercel.app/",
    },
    {
        name: "PetNetflix",
        description: "Full-stack Netflix clone with OAuth 2.0, interactive user features, and async FastAPI backend.",
        large_description: "PetNetflix is a full-stack movie browsing app built with React, TypeScript, and FastAPI. It features secure JWT and Google OAuth 2.0 authentication, real-time debounced search, user favorites, and comments, demonstrating modern full-stack architecture and session security.",
        image: "/projects/PetNetflix.gif",
        stack: ["Python", "FastAPI", "PostgreSQL", "TypeScript"],
        link: "https://github.com/gwill1337/PetNetflix",
        demo: "https://pet-netflix.vercel.app/",
    },
]

export function ProjectsSection() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-6xl items-center gap-5">
                <h2 className="self-start text-2xl sm:text-4xl font-semibold text-left mb-5 pl-2 ">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mx-7">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}