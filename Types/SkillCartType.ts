
export type SkillType = "backend" | "frontend" | "tools" | "infrastructure";

export interface ISkillCart{
    name: string;
    type: SkillType[];
    color: string;
}