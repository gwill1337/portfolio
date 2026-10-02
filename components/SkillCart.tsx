import type { CSSProperties } from "react";
import type { ISkillCart } from "../Types/SkillCartType";

export function SkillCart({ name, color }: ISkillCart) {
    return (
        <div
            style={{ "--glow": color } as CSSProperties}
            className="rounded-full border border-border bg-card px-1 py-1 sm:px-3 sm:py-1.5
                whitespace-nowrap shadow-sm transition duration-300
                hover:-translate-y-0.5 hover:border-(--glow)
                hover:bg-[color-mix(in_srgb,var(--glow)_12%,var(--color-card))]
                hover:shadow-[0_0_16px_var(--glow)]"
        >
            <p className="font-medium text-xs text-foreground md:text-sm">
                {name}
            </p>
        </div>
    )
}