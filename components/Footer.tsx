import { SiGithub } from "@icons-pack/react-simple-icons";

export function Footer() {
    return (
        <footer className="w-full bg-border border-t border-white/10">
            <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
                <div className="flex">
                    <a href="https://github.com/gwill1337" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition">
                        <SiGithub size={20} />
                    </a>
                </div>
                <p className="flex items-center gap-1.5 text-second-foreground text-sm">
                    All rights reserved © {new Date().getFullYear()} Gwill1337
                </p>
            </div>
        </footer>
    )
}