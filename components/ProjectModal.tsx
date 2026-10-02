"use client";
import { IProject } from "@/Types/IProject";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IProjectModal {
    project: IProject;
    onClose: () => void;
}

export function ProjectModal({ project, onClose }: IProjectModal) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [])

    if (!mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />
            <div
                className="z-10 flex flex-col w-full max-w-3xl 2xl:max-w-6xl h-auto bg-card border border-border rounded-2xl p-4 sm:p-6 text-foreground shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold p-1"
                >
                    ✕
                </button>
                <div>
                    <img
                        src={project.image}
                        alt={project.name}
                        //  "h-60" ? "aspect-video"
                        className='w-full object-cover aspect-video sm:p-2'
                    />
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">{project.name}</h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((tech) => (
                            <span key={tech} className="text-[10px] sm:text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"> {tech} </span>
                        ))}
                    </div>
                    <div className="w-full max-w-2xl bg-card">
                        <p className="text-second-foreground mb-4 text-xs sm:text-base">{project.large_description}</p>
                    </div>
                    <div className="flex gap-4">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-base rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
                            >
                                Check the demo
                            </a>

                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-base rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
                            >
                                Open project
                            </a>

                        )}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}