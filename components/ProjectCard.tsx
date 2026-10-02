"use client";
import { useState } from "react";
import type { IProject } from "../Types/IProject";
import { ProjectModal } from "./ProjectModal";

export function ProjectCard({ project, compact = false }: { project: IProject; compact?: boolean }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div
                onClick={() => setShowModal(true)}
                className="group cursor-pointer rounded-xl sm:rounded-2xl bg-card border border-border overflow-hidden w-full shadow-lg transition duration-300 hover:scale-[1.03] hover:shadow-2xl"
            >
                <img
                    src={project.image}
                    alt={project.name}
                    //  "h-60" ? "aspect-video"
                    className="w-full object-cover max-h-32 sm:max-h-none aspect-video"
                />
                {!compact && (
                    <div className="flex flex-col flex-1 px-3 py-2 sm:px-5 sm:py-3.5">
                            <h3 className="text-base sm:text-xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition">
                                {project.name}
                            </h3>
                        <p className="text-second-foreground text-xs sm:text-base mb-2 sm:mb-4">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-[10px] sm:text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/10 text-primary"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

            </div>
                {showModal && (
                    <ProjectModal project={project} onClose={() => setShowModal(false)} />
                )}
        </>
    )
}