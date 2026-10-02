export type Responsive<T> = T | { base?: T; sm?: T; md?: T; lg?: T; xl?: T };

export const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280 } as const;

export function resolveResponsive(value: Responsive<number>, width: number): number {
    if (typeof value === 'number') return value;

    let result = value.base ?? 0;
    for (const key of ['sm', 'md', 'lg', 'xl'] as const) {
        if (width >= BREAKPOINTS[key] && value[key] !== undefined) {
            result = value[key]!;
        }
    }
    return result;
}

export const DEFAULT_INDENT = { base: 0, sm: 75, md: 105 };