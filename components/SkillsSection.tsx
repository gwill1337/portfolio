"use client";

import type { ISkillCart, SkillType } from "../Types/SkillCartType";
import { SkillCart } from "./SkillCart";
import { SkillGroup } from "./SkillGroup";

const skills: ISkillCart[] = [
    // Backend
    { name: "FastAPI", type: ["backend"], color: "#009688" },
    { name: "Python", type: ["backend"], color: "#4b8bbe" },
    { name: "PostgreSQL", type: ["backend"], color: "#336791" },
    { name: "SQLAlchemy", type: ["backend"], color: "#e5533d" },
    { name: "Pydantic", type: ["backend"], color: "#E92063" },

    { name: "Alembic", type: ["backend"], color: "#d62828" },
    { name: "Redis", type: ["backend"], color: "#dc382d" },
    // { name: "Celery", type: ["backend"], color: "#37b24d" },
    // { name: "Kafka", type: ["backend"], color: "#231f20" },
    { name: "REST API", type: ["backend"], color: "#0055ff" },
    { name: "JWT/OAuth2", type: ["backend"], color: "#00B4D8" },
    // { name: "Pytest", type: ["backend"], color: "#0A9EDC" },

    { name: "Rust", type: ["backend"], color: "#dea584" },

    // Frontend
    { name: "JavaScript", type: ["frontend"], color: "#f7df1e" },
    { name: "TypeScript", type: ["frontend"], color: "#3178c6" },
    { name: "React", type: ["frontend"], color: "#61dafb" },
    { name: "HTML/CSS", type: ["frontend"], color: "#e34f26" },
    { name: "Tailwind CSS", type: ["frontend"], color: "#38bdf8" },
    { name: "Next.js", type: ["frontend"], color: "#111111" },

    // Tools & Infrastructure
    { name: "Docker", type: ["tools", "infrastructure"], color: "#2496ed" },
    { name: "Git/GitHub", type: ["tools"], color: "#f05032" },
    { name: "GitHub Actions", type: ["tools"], color: "#2088FF" },
    { name: "CI/CD", type: ["tools"], color: "#2da44e" },
    { name: "Terraform", type: ["infrastructure"], color: "#844fba" },
    { name: "Kubernetes", type: ["infrastructure"], color: "#326ce5" },
    // { name: "Figma", type: ["tools"], color: "#f24e1e" },
    { name: "Vercel", type: ["tools"], color: "#111111" },
    { name: "Render", type: ["infrastructure"], color: "#46e3b7" },
    // { name: "VS code", type: ["tools"], color: "#007acc" },
    { name: "PLG Stack", type: ["infrastructure"], color: "#f46800" }
];

interface SkillGroupConfig {
    title: string;
    side: "left" | "right";
    types: SkillType[];
    row1Count: number;
}

const groups: SkillGroupConfig[] = [
    { title: "Backend", side: "right", types: ["backend"], row1Count: 5 },
    { title: "Frontend", side: "left", types: ["frontend"], row1Count: 5 },
    { title: "Tools & Infra", side: "right", types: ["tools", "infrastructure"], row1Count: 5 },
];

export function SkillsSection() {
    return (
        <section className="skills-section relative isolate overflow-hidden py-12 md:py-20">
            <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 md:gap-16 px-4 md:px-8">
                {groups.map((g) => (
                    <SkillGroup
                        key={g.title}
                        title={g.title}
                        side={g.side}
                        row1Count={g.row1Count}
                    >
                        {skills
                            .filter((s) => s.type.some((t) => g.types.includes(t)))
                            .map((s) => (
                                <SkillCart
                                    key={s.name}
                                    color={s.color}
                                    name={s.name}
                                    type={s.type}
                                />
                            ))}
                    </SkillGroup>
                ))}
            </div>
        </section>
    );
}